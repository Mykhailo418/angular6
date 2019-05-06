'use strict';

const js_path = __dirname + '/dist/js/';
const html_path = __dirname + '/dist/html/';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const helpers = require('./helpers');

module.exports = (env, argv) => {
	const config = {
		context: __dirname,
		entry: {
				polyfills: js_path + 'polyfills.ts',
				vendor: js_path + 'vendor.ts',
				main: js_path + 'main.ts'
		},
		performance: {
        hints: 'warning'
    },
		resolve: {
		    extensions: ['.ts', '.js', '.less', '.css', '.html']
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
		     },
				 {
              // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
              // Removing this will cause deprecation warnings to appear.
              test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
              parser: { system: true },  // enable SystemJS
          }
			]
		},
		devtool: 'source-map',
		watch: true,
		watchOptions: {
			aggregateTimeout: 100
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
			]
	  }
	};
	if(argv.mode === 'development'){
			 config.devtool = "source-map";
			 config.watch = true;
			 config.watchOptions = {
					 aggregateTimeout: 100
			 };
			 config.cache = true;
			 config.performance.hints = false;
			 config.output.pathinfo = true;
			 config.optimization.namedModules = true;
			 config.optimization.namedChunks = true;
			 config.optimization.nodeEnv = 'development';
			 config.optimization.flagIncludedChunks = false;
			 config.optimization.occurrenceOrder = false;
			 config.optimization.sideEffects = false;
			 config.optimization.usedExports = false;
			 config.optimization.splitChunks.hidePathInfo = false;
			 config.optimization.splitChunks.minSize = 10000;
			 config.optimization.splitChunks.maxAsyncRequests = Infinity;
			 config.optimization.splitChunks.maxInitialRequests = Infinity;
			 config.optimization.noEmitOnErrors = false;
			 config.optimization.checkWasmTypes = false;
			 config.optimization.minimize = false;
			 config.plugins.push(new webpack.NamedModulesPlugin());
			 config.plugins.push(new webpack.NamedChunksPlugin());
			 config.plugins.push(new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }));
	 }else if(argv.mode === 'production'){
			 config.output.pathinfo = false;
			 config.optimization.namedModules = false;
			 config.optimization.namedChunks = false;
			 config.optimization.nodeEnv = 'production';
			 config.optimization.flagIncludedChunks = true;
			 config.optimization.occurrenceOrder = true;
			 config.optimization.sideEffects = true;
			 config.optimization.usedExports = true;
			 config.optimization.concatenateModules = true;
			 config.optimization.splitChunks.hidePathInfo = true;
			 config.optimization.splitChunks.minSize = 30000;
			 config.optimization.splitChunks.maxAsyncRequests = 5;
			 config.optimization.splitChunks.maxInitialRequests = 3;
			 config.optimization.noEmitOnErrors = true;
			 config.optimization.checkWasmTypes = true;
			 config.optimization.minimize = true;
			 config.plugins.push(new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }));
			 config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
			 config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
	 }
	return config;
};
