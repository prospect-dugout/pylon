"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computedStyleValue = void 0;
var computedStyleValue = exports.computedStyleValue = function computedStyleValue(str) {
  if (str.indexOf('var(--') === 0) {
    var varName = "--".concat(str.slice(6, -1));
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
  } else {
    return str;
  }
};