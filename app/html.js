"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createDocument = exports.createDocument = function createDocument(content) {
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title></title>\n      <link rel=\"stylesheet\" href=\"/client/styles.css\" charset=\"utf-8\">\n    </head>\n    <body>\n      <div id=\"app\">" + content + "</div>\n      <script src=\"/client/app.js\"></script>\n    </body>\n  </html>\n";
};