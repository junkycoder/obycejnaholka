'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref, callback) {
  var location = _ref.location;


  (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {

    if (error) {
      callback('error', error.message);
      return;
    }

    if (redirectLocation) {
      callback('redirect', redirectLocation);
      return;
    }

    if (renderProps) {
      var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));

      callback('render', html);
      return;
    }

    callback();
  });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }