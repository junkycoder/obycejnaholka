"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation() {
  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      "ul",
      null,
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "a",
          { href: "/" },
          "Domů"
        )
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "a",
          { href: "/vylety/" },
          "Výlety"
        )
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "a",
          { href: "/jidlo-a-piti/" },
          "Jídlo a pití"
        )
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "a",
          { href: "/napiste-mi/" },
          "Napiště mi"
        )
      )
    )
  );
}