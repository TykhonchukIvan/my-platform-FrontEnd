const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const getMode = () => process.env.PORT || 3000;

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    compress: true,
    port: 3010, // default 8000
  },
});