const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    }),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-runtime'],
        babelrc: false
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style',
        `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`
      )
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  postcss: [
    require('autoprefixer')
  ]
}
