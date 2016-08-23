'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Veronika Hallerová'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Blog obyčejné holky'
    ),
    _react2.default.createElement(_Navigation2.default, null)
  );
}