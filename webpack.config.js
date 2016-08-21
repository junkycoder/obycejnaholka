const webpack = require('webpack');


module.exports = {
  entry: './src/public/client.js',

  output: {
    path: __dirname + '/build/public/',
    filename: 'client.js'
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
