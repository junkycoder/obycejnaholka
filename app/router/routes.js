'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Layout = require('../web/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = require('../pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Trips = require('../pages/Trips');

var _Trips2 = _interopRequireDefault(_Trips);

var _FoodAndDrink = require('../pages/FoodAndDrink');

var _FoodAndDrink2 = _interopRequireDefault(_FoodAndDrink);

var _ContactMe = require('../pages/ContactMe');

var _ContactMe2 = _interopRequireDefault(_ContactMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'domu', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'vylety', component: _Trips2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'jidlo-a-piti', component: _FoodAndDrink2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'napiste-mi', component: _ContactMe2.default })
);