const webpack = require('webpack');

module.exports = {

  output: {
    path: __dirname + '/../build/client/',
    filename: 'app.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${process.env.NODE_ENV}"`
      }
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
