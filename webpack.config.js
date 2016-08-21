const webpack = require('webpack');

module.exports = {

  devtool: 'eval',

  entry:  [
    './src/client'
  ],

  output: {
    path: __dirname + '/build/static/',
    filename: 'client.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
