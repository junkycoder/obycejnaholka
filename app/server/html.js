'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDocument = undefined;

exports.default = function () {
  return function (req, res) {
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
          var doc = createDocument(payload);

          res.status(200).send(doc);
          break;

        default:
          res.status(404).send('Not found');
          break;
      }
    });
  };
};

var _server = require('../router/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDocument = exports.createDocument = function createDocument(content) {
  return '\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title></title>\n      <link rel="stylesheet" href="/styles.css" charset="utf-8">\n    </head>\n    <body>\n      <div id="app">' + content + '</div>\n      <script src="/client.js"></script>\n    </body>\n  </html>\n';
};