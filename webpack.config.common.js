'use strict';
const js_path = __dirname + '/dist/js/';

module.exports = {
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
  module: {
    rules: [
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
};
