const merge = require('webpack-merge')
const common = require('./webpack.common');

module.exports = merge(common, {

  entry: __dirname + '/../src/app/client.js'

});