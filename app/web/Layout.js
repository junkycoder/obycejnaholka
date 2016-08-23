'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = {
  'layout': 'styles_layout__2BnV0'
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: _styles2.default.layout },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      _Main2.default,
      null,
      children
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
}