"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaQuery = exports.breakpoints = void 0;
var _styledComponents = require("styled-components");
var breakpoints = exports.breakpoints = {
  sm: 568,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1600
};
var mediaQuery = exports.mediaQuery = function mediaQuery(breakpoint, styles) {
  var operator, bp;
  if (breakpoint.startsWith('<')) {
    operator = '<';
    bp = breakpoint.slice(1);
  } else {
    operator = '>';
    bp = breakpoint.slice(0, -1);
  }
  var mediaFeature;
  if (operator === '>') {
    mediaFeature = "(min-width: ".concat(breakpoints[bp], "px)");
  } else if (operator === '<') {
    mediaFeature = "(max-width: ".concat(breakpoints[bp], "px)");
  } else {
    throw new Error("Invalid operator: ".concat(operator));
  }
  return (0, _styledComponents.css)(["@media ", "{", "}"], mediaFeature, styles);
};