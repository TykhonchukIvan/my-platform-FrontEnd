const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

const getMode = () => process.env.MY_PLATFORM_FRONT_NODE_ENV === 'production' ? 'production' : 'development';

const getPluginsBuild = () => ([new CleanWebpackPlugin()]);

const getOptimization = () => ({
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          const packageName = module.context.match(
            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
          )[1];
          return `npm.${packageName.replace('@', '')}`;
        },
      },
    },
  },
});

const getPerformance = () => ({
  maxEntrypointSize: 5120000,
  maxAssetSize: 5120000
});

module.exports = merge(common, {
  mode: getMode(),
  plugins: getPluginsBuild(),
  optimization: getOptimization(),
  performance: getPerformance()
});