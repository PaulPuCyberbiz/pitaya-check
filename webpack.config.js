const path = require('path');
const SRC_DIR = path.resolve(__dirname, './src');
console.log('checjcje')
// const isEnvDevelopment = process.env.NODE_ENV === 'development';
// var ICON = path.join(__dirname, 'icon.png');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'istanbul',
              ['@babel/plugin-transform-modules-commonjs', { loose: true }],
            ],
          },
        },
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      },
      // {
      //   test: /\.css$/, // Only .css files
      //   loader: 'style-loader!css-loader', // Run both loaders
      // },
      {
        test: /\.(css|scss)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
                mode: 'global',
                exportGlobals: true,
              },
              // sourceMap: isEnvDevelopment,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            // options: {
            //   sourceMap: isEnvDevelopment,
            // },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 200000,
      //     fallback: require.resolve('null-loader'),
      //   },
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    alias: {
      '@src': path.resolve('./src/'),
    },
  },
};
