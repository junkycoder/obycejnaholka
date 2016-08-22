const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {

  devtool: 'eval',

  entry: [
      __dirname + '/../src/app/client.js'
  ],

  output: {
    publicPath: '/client/'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]

});