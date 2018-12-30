'use strict';

const js_path = __dirname + '/dist/js/';
const html_path = __dirname + '/dist/html/';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
	context: __dirname,
	entry: {
			polyfills: js_path + 'polyfills.ts',
			vendor: js_path + 'vendor.ts',
			main: js_path + 'main.ts'
	},
	resolve: {
	    extensions: ['.ts', '.js']
	 },
	output: {
	  filename: '[name].js',
	  path: __dirname + '/comp',
	},
	module: {
		rules: [
		  {
		    test: /\.ts$/,
		    loaders: [
	          {
	            loader: 'awesome-typescript-loader',
	          } ,
	          'angular2-template-loader'
	        ]
		  },
		  {
	        test: /\.html$/,
	        loader: 'html-loader'
	      }
		]
	},
	devtool: 'source-map',
	watch: true,
	watchOptions: {
		//aggregateTimeout: 100
	},
	plugins: [
	    // Workaround for angular/angular#11580
	    new webpack.ContextReplacementPlugin(
	      // The (\\|\/) piece accounts for path separators in *nix and Windows
	      /angular(\\|\/)core(\\|\/)@angular/,
	      helpers.root('./dist'), // location of your src
	      {} // a map of your routes
	    ),

	    /*new webpack.optimize.CommonsChunkPlugin({
	      name: ['main', 'vendor', 'polyfills']
	    }),*/

	    new HtmlWebpackPlugin({
	      template: html_path + 'index.html',
	      filename: '../index.html'
	    })
	],
	optimization: {
    minimizer: [new UglifyJsPlugin({
			uglifyOptions: {
				output: {
					ascii_only: true,
					beautify: false
				}
			}
		})]
  }
};
