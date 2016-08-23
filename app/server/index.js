'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bundle = require('./bundle');

var _bundle2 = _interopRequireDefault(_bundle);

var _html = require('./html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start(port, devport) {
  var server = (0, _express2.default)();

  server.get('/client.js', (0, _bundle2.default)(devport));
  server.get('/styles.css', (0, _bundle2.default)(devport));
  server.get('*', (0, _html2.default)());

  server.listen(port, function () {
    console.log('Appserver running on http://localhost:' + port + '/');
  });
}