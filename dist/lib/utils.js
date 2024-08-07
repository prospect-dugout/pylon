"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.afterNextRender = afterNextRender;
exports.distance = distance;
exports.ensureLeadingSlash = ensureLeadingSlash;
exports.off = off;
exports.on = on;
exports.toFloatOrNull = toFloatOrNull;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
/* eslint-disable @typescript-eslint/ban-types */

function afterNextRender(cb) {
  requestAnimationFrame(function () {
    setTimeout(function () {
      cb();
    });
  });
}
function on(obj) {
  if (obj && obj.addEventListener) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    obj.addEventListener.apply(obj, (0, _toConsumableArray2["default"])(args));
  }
}
function off(obj) {
  if (obj && obj.removeEventListener) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    obj.removeEventListener.apply(obj, (0, _toConsumableArray2["default"])(args));
  }
}
function distance(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;
  return Math.hypot(a, b);
}
function ensureLeadingSlash(url) {
  return typeof url === 'string' ? url[0] !== '/' ? "/".concat(url) : url : url;
}
function toFloatOrNull(value) {
  if (value === null || typeof value === 'undefined') return null;
  if (typeof value === 'number') return value;
  var parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}