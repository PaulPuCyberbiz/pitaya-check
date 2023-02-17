const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const threadLoader = require('thread-loader');

const notifier = require('node-notifier');
// var ICON = path.join(__dirname, 'icon.png');

const DIST_DIR = path.resolve(__dirname, '../dist');
const SRC_DIR = path.resolve(__dirname, '../src');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDockerDevServer = process.env.REMOTE_DEV_SERVER === 'true';

threadLoader.warmup({}, ['babel-loader', 'sass-loader', 'css-loader']);

// plugin
const basePlugin = [
  new CaseSensitivePathsPlugin(),
  !process.env.IGNORE_TS &&
    new ForkTsCheckerWebpackPlugin({
      async: isEnvProduction || process.env.FORK_TS,
      reportFiles: ['src/**/*.{ts,tsx}'],
      watch: ['src/**/*.{ts,tsx}'],
      tsconfig: path.resolve(__dirname, '../tsconfig.prod.json'),
      tslint: path.resolve(__dirname, '../tslint.json'),
      useTypescriptIncrementalApi: isEnvDevelopment,
    }),
  new MonacoWebpackPlugin({
    languages: ['javascript', 'typescript', 'handlebars', 'html', 'css'],
  }),
].filter(Boolean);

const devPlugin = [
  new webpack.HotModuleReplacementPlugin(),
  new FriendlyErrorsWebpackPlugin({
    onErrors: (severity, errors) => {
      if (severity !== 'error') {
        return;
      }
      const error = errors[0];
      notifier.notify({
        title: 'frontend/admin error',
        message: severity + ': ' + error.name,
        subtitle: error.file || '',
        // icon: ICON,
      });
    },
  }),
  process.env.ANALYZER && new BundleAnalyzerPlugin(),
].filter(Boolean);

const prodPlugin = [
  new ManifestPlugin({
    generate: (_seed, files) =>
      files.reduce((acc, file) => {
        const name = file.name.replace(/\~[A-Z0-9a-z]*\./, '.');
        if (Array.isArray(acc[name])) {
          acc[name].push(file.path);
        } else {
          acc[name] = [file.path];
        }
        return acc;
      }, {}),
  }),
  new CleanWebpackPlugin({
    dry: !!process.env.NO_CLEAN,
    root: path.resolve(__dirname, '..'),
  }),
];

const prodChunkOptions = {
  automaticNameDelimiter: '~',
  minSize: 400000,
  maxSize: 6000000,
};

const arrayEqual = (arr1, arr2) =>
  arr1.sort().toString() === arr2.sort().toString();

module.exports = function (env, argv) {
  const useHttps = argv && argv.https;
  const protocol = useHttps ? 'https' : 'http';

  console.log('check!!!!!')

  return {
    entry: {
      app: './src/app.tsx',
      admin: './src/admin.tsx',
    },

    output: {
      path: isEnvDevelopment ? DIST_DIR + '/app' : DIST_DIR,
      filename: isEnvDevelopment ? '[name].js' : '[name]-[hash].js',
      publicPath: isEnvDevelopment ? `${protocol}://localhost:8080/app/` : '',
    },

    devtool: isEnvDevelopment ? 'source-map' : false,

    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: [
            isEnvProduction && 'thread-loader',
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.css$/, // Only .css files
          loader: 'style-loader!css-loader', // Run both loaders
        },
        {
          test: /\.(css|scss)$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            isEnvProduction && 'thread-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                  mode: 'global',
                  exportGlobals: true,
                },
                sourceMap: isEnvDevelopment,
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isEnvDevelopment,
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
          loader: 'url-loader',
          options: {
            limit: 200000,
            fallback: require.resolve('null-loader'),
          },
        },
      ],
    },

    resolve: {
      extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.scss'],
      modules: ['node_modules'],
      alias: {
        '@src': path.resolve('../../src/'),
      },
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.prod.json'),
        }),
      ],
    },

    plugins: basePlugin.concat(isEnvProduction ? prodPlugin : devPlugin),

    devServer: {
      contentBase: './dist',
      hot: true,
      port: 8080,
      host: isEnvDockerDevServer ? '0.0.0.0' : 'localhost',
      disableHostCheck: true,
      historyApiFallback: {
        index: 'index.html',
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      overlay: true,
      quiet: true,
    },

    optimization: {
      splitChunks: {
        ...(isEnvProduction ? prodChunkOptions : {}),
        cacheGroups: {
          faCommon: {
            name: 'fa-common',
            chunks: 'all',
            minChunks: 2,
            priority: 10,
          },
          monacoCommon: {
            test: /[\\/]node_modules[\\/]monaco\-editor/,
            name: 'monaco-editor-common',
            chunks: 'async',
          },
        },
      },
    },
  };
};
