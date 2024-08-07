"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebouncedEffect = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _react = require("react");
var useDebouncedEffect = exports.useDebouncedEffect = function useDebouncedEffect(effect, deps, delay) {
  (0, _react.useEffect)(function () {
    var handler = setTimeout(function () {
      return effect();
    }, delay);
    return function () {
      return clearTimeout(handler);
    };
  }, [].concat((0, _toConsumableArray2["default"])(deps || []), [delay]));
};