'use strict';

const js_path = __dirname + '/dist/js/';
const html_path = __dirname + '/dist/html/';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
	context: __dirname,
	entry: {
		main: js_path + 'main.ts',
		vendor: js_path + 'vendor.ts',
		polyfills: js_path + 'polyfills.ts'
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
		    loader: 'awesome-typescript-loader'
		  }
		]
	},
	devtool: "cheap-inline-source-map",
	watch: true,
	watchOptions: {
		aggregateTimeout: 100
	},
	plugins: [
	    // Workaround for angular/angular#11580
	    new webpack.ContextReplacementPlugin(
	      // The (\\|\/) piece accounts for path separators in *nix and Windows
	      /angular(\\|\/)core(\\|\/)@angular/,
	      helpers.root('./dist'), // location of your src
	      {} // a map of your routes
	    ),

	    new webpack.optimize.CommonsChunkPlugin({
	      name: ['main', 'vendor', 'polyfills']
	    }),

	    new HtmlWebpackPlugin({
	      template: html_path + 'index.html',
	      filename: '../index.html'
	    })
	]
};