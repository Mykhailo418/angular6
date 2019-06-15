const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.dev');

// const js_path = path.resolve(__dirname,'dist','js');
// const html_path = path.resolve(__dirname,'dist','html');
const js_path = __dirname + '/dist/js/';
const html_path = __dirname + '/dist/html/';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  watch: true,
  cache: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/comp',
    chunkFilename: '[id].chunk.js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true
            }
          },
          {
            loader: 'angular2-template-loader',
          },
          {
            loader: 'angular-router-loader', // for lazy loading
          }
        ]
      },
    ]
  },
  plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core/,
        helpers.root('.'+js_path), // location of your src
        {} // a map of your routes
      ),

      /*new webpack.optimize.CommonsChunkPlugin({
        name: ['main', 'vendor', 'polyfills']
      }),*/

      new HtmlWebpackPlugin({
        template: html_path + 'index.html',
        filename: '../index.html',
        hash: true
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.NamedChunksPlugin(),
      new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") })
  ],
  performance: {
    hints: false
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',
    flagIncludedChunks: false,
    occurrenceOrder: false,
    sideEffects: false,
    usedExports: false,
    splitChunks: {
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity
    },
    noEmitOnErrors: false,
    checkWasmTypes: false,
    minimize: false
  }
});
