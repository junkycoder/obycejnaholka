'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bundle;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bundle(devport) {

  return function (req, res) {
    if (devport) res.redirect('//localhost:' + devport + req.route.path);else res.sendFile(req.route.path, { root: _path2.default.join(__dirname, '../') });
  };
}