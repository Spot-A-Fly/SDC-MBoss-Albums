const webpack = require('webpack');
const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/components');
var DIST_DIR = path.join(__dirname, '/public');
module.exports = {
  context: __dirname + '/client',
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        }
      }
    ]
  }
};
