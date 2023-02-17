const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    console.log('oooooopppppp')
    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
      alias: {
        '@src': path.join(__dirname, '../src/'),
        // '@stories': path.resolve('../src/components/stories/'),
      },
    };
    config.module.rules.push(
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    );
    // config.plugins.push(new MonacoWebpackPlugin());
    // console.log(config.module.rules);
    config.stats = { loggingDebug: ['sass-loader'] }
    return config;
  },
}