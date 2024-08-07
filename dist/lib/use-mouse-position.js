"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMousePosition;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _hooks = require("preact/hooks");
// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c

function useMousePosition() {
  var _useState = (0, _hooks.useState)({
      mouseX: null,
      mouseY: null
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    mousePosition = _useState2[0],
    setMousePosition = _useState2[1];
  var updateMousePosition = function updateMousePosition(evt) {
    setMousePosition({
      mouseX: evt.clientX,
      mouseY: evt.clientY
    });
  };
  (0, _hooks.useEffect)(function () {
    window.addEventListener('mousemove', updateMousePosition);
    return function () {
      return window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
}