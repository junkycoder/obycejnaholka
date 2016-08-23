const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = {

  output: {
    path: __dirname + '/app/',
    filename: 'client.js'
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


if (process.env.NODE_ENV === 'production') module.exports = merge(common, {

  entry: __dirname + '/src/client',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]

});

if (process.env.NODE_ENV === 'development') module.exports = merge(common, {

  devtool: 'eval',

  entry: [
      __dirname + '/src/client'
  ],

  plugins: [
    new webpack.NoErrorsPlugin()
  ]

});
