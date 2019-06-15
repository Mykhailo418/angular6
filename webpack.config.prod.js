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
  entry: {
      polyfills: js_path + 'polyfills.ts',
      vendor: js_path + 'vendor.ts',
      main: js_path + 'main.aot.ts'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/comp',
    chunkFilename: '[id].[hash].chunk.js',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'angular2-template-loader'
          },
          {
            loader: 'angular-router-loader?aot=true' // for lazy loading
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

      new HtmlWebpackPlugin({
        template: html_path + 'index.html',
        filename: '../index.html',
        hash: true
      }),
      new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            node_vendors: {
                test: /[\\/]node_modules[\\/]/,
                chunks: "async",
                priority: 1
            }
        }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
        uglifyOptions: {
          output: {
            ascii_only: true,
            beautify: false
          }
        }
      })
    ],
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3
    },
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true
  }
});
