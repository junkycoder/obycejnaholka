const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {

  entry: __dirname + '/../src/app/client.js',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]

});
