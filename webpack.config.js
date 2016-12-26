var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['pixi.js', './scripts/igman.js'],
  output: { filename: 'build/igman.js' },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}