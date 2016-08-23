'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _server = require('react-dom/server');

function render(content) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title></title>\n        <link rel="stylesheet" href="/styles.css" charset="utf-8">\n      </head>\n      <body>\n        <div id="app">' + (0, _server.renderToString)(content) + '</div>\n        <script src="/client.js"></script>\n      </body>\n    </html>\n  ';
}