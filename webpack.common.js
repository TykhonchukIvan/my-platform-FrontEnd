const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const getMode = () => process.env.MY_PLATFORM_FRONT_NODE_ENV === 'production' ? 'production' : 'development';
const resolvePath = p => path.resolve(__dirname, p);

const rulesJavaScriptFiles = () => ({
  test: [/\.js$/, /\.jsx?$/],
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
});

const rulesLessCssFiles = () => ({
  test: [/\.less$/, /\.css$/],
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    }, {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }],
});

const rulesImagesFiles = () => ({
  test: /\.(png|svg|jpg|gif)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[hash].[ext]',
      outputPath: 'images/',
    },
  },
});

const rulesResolve = () => ({
  extensions: ['.js', '.jsx', '.json'],
  alias: {
    '@src': resolvePath('./src'),
    '@public': resolvePath('./public'),
  },
})

const getEnv = () => {
  const fileEnv = dotenv.config({ path: '.env' }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  return new webpack.DefinePlugin(envKeys);
};

const getPlugins = () => {
  const plugin = [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      filename: 'index.html',
      favicon: path.join(__dirname, '/public/images/logo-light.svg'),
    }),
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
  ];
  return plugin;
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  mode: getMode(),
  module: { rules: [rulesJavaScriptFiles(), rulesLessCssFiles(), rulesImagesFiles()] },
  resolve: rulesResolve(),
  plugins: [
    getEnv(),
    ...getPlugins(),
  ],
}