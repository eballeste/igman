var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['pixi.js', './scripts/bootstrap.js'],
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
      },
      {
      	test: /\.js$/, 
      	exclude: /node_modules/, 
      	loader: 'babel-loader',
      	query: 
          {	
            presets:['es2015'],
            plugins:['transform-class-properties']	
          } 
      },
      { 
        test: /\.jpe?g$|\.svg$|\.png$/, 
        exclude: /node_modules/, 
        loader: 'file-loader?name=[path][name].[ext]'
      },
    ]
  }
}