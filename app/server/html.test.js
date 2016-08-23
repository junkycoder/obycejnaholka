'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _html = require('./html');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('createDocument', function (t) {

  var doc = (0, _html.createDocument)('__CONTENT__');

  t.is(typeof doc === 'undefined' ? 'undefined' : (0, _typeof3.default)(doc), 'string');
  t.regex(doc, /__CONTENT__/);
});