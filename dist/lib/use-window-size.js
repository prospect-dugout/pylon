"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = useWindowSize;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _hooks = require("preact/hooks");
var _utils = require("./utils");
function useWindowSize() {
  var _useState = (0, _hooks.useState)({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    size = _useState2[0],
    setSize = _useState2[1];
  (0, _hooks.useLayoutEffect)(function () {
    var updateSize = function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    (0, _utils.on)(window, 'resize', updateSize);
    return function () {
      return (0, _utils.off)(window, 'resize', updateSize);
    };
  }, []);
  return size;
}