'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'main',
    null,
    children,
    _react2.default.createElement(_Sidebar2.default, null)
  );
}