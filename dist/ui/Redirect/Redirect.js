"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = void 0;
var _preactIso = require("preact-iso");
var _hooks = require("preact/hooks");
var Redirect = exports.Redirect = function Redirect(_ref) {
  var to = _ref.to,
    _ref$replace = _ref.replace,
    replace = _ref$replace === void 0 ? false : _ref$replace;
  var location = (0, _preactIso.useLocation)();
  (0, _hooks.useEffect)(function () {
    location.route(to, replace);
  }, []);
  return null;
};