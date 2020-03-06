const commonPaths = require('./common-paths');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
          use: [
            {
              // We configure 'MiniCssExtractPlugin'
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              // options: {
              //   modules: true,
              //   importLoaders: 1,
              //   localsConvention: 'camelCase',
              //   sourceMap: false
              // }
            },
            {
              loader: 'postcss-loader'
            },
          ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css'
    })
  ]
};
module.exports = config;
