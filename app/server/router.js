'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  return function (req, res) {
    return (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {

      if (error) {
        res.status(500).send(error.message);
        return;
      }

      if (redirectLocation) {
        res.status(302, redirectLocation.pathname + redirectLocation.search);
        return;
      }

      if (renderProps) {
        var html = (0, _render2.default)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));

        res.status(200).send(html);
        return;
      }

      res.status(404).send('Not found');
    });
  };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }