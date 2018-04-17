// webpack.config.js
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/assets/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, 'source/assets/javascripts/'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }],
  },
  plugins: [
    new ExtractTextPlugin("../stylesheets/bundle.css")
  ]
};
