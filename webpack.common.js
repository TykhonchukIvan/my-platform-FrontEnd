const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const getMode = () => process.env.MY_PLATFORM_FRONT_NODE_ENV === 'production' ? 'production' : 'development';

const ruleTypeScriptFiles = {
  test: [/\.ts$/, /\.tsx?$/, /\.js$/, /\.jsx?$/],
  exclude: /node_modules/,
  loader: 'ts-loader',
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
  },
};

const ruleLessCssFiles = {
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
}

const ruleImagesFiles = {
  test: /\.(png|svg|jpg|gif)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[hash].[ext]',
      outputPath: 'images/',
    },
  },
};

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
      favicon: path.join(__dirname, '/public/favicon.svg'),
    }),
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
  ];
  return plugin;
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  mode: getMode(),
  module: { rules: [ruleTypeScriptFiles, ruleImagesFiles, ruleLessCssFiles] },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    getEnv(),
    ...getPlugins(),
  ],
}