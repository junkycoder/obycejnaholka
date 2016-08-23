'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _httpProxy = require('http-proxy');

var _html = require('./html');

var _server = require('./router/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function proxy(_ref) {
  var port = _ref.port;

  var proxy = (0, _httpProxy.createProxyServer)({
    target: {
      port: port
    }
  });

  return function (req, res) {
    return proxy.web(req, res);
  };
}

function start(port, devserver) {
  var server = (0, _express2.default)();

  // Serve bundled assets
  if (devserver) server.all('/client/*', proxy(devserver));else server.use('/client', _express2.default.static(__dirname + '/client'));

  // Serve html document
  server.get('*', function (req, res) {
    return (0, _server2.default)({ location: req.url }, function (action, payload) {
      switch (action) {

        case 'error':
          res.status(500).send(payload);
          break;

        case 'redirect':
          var pathname = payload.pathname;
          var search = payload.search;


          res.status(302, pathname + search);
          break;

        case 'render':
          var doc = (0, _html.createDocument)(payload);

          res.status(200).send(doc);
          break;

        default:
          res.status(404).send('Not found');
          break;
      }
    });
  });

  // Start server
  server.listen(port, function () {
    console.log('Appserver running on http://localhost:' + port + '/');
  });
}