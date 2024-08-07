"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["email", "size", "src", "username"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultColors = [['#697fff', '#ff9ada'], ['#ff5900', '#ff9ada'], ['#697fff', '#00d192'], ['#ff5900', '#e6ff00'], ['#00d192', '#e6ff00'], ['#0061ff', '#60efff'], ['#ba42c0', '#deb8f5'], ['#01dbff', '#0f971c'], ['#ff51eb', '#ede342'], ['#a106f4', '#00d192'], ['#697fff', '#8752a3'], ['#f40752', '#ff9ada'], ['#f19e18', '#ff5900'], ['#6c35c8', '#ef566a'], ['#00d192', '#46b83d'], ['#ff9ada', '#ed5c86'], ['#ff9ada', '#00458e'], ['#01dbff', '#f55c7a'], ['#ff5900', '#f90c71'], ['#00d192', '#affcaf']];

// https://en.wikipedia.org/wiki/Linear_congruential_generator
var stringAsciiPRNG = function stringAsciiPRNG(value, m) {
  var charCodes = value.split('').map(function (letter) {
    return letter.charCodeAt(0);
  });
  var len = charCodes.length;
  var a = len % (m - 1) + 1;
  var c = charCodes.reduce(function (current, next) {
    return current + next;
  }) % m;
  var random = charCodes[0] % m;
  for (var i = 0; i < len; i++) random = (a * random + c) % m;
  return random;
};

/**
 * Get a value based color.
 * The reason for this is we want colors to be consistent for the same value.
 */
var getRandomGradient = function getRandomGradient(value) {
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultColors;
  if (!value) return 'transparent';
  var idx = stringAsciiPRNG(value, colors.length);
  var _colors = (0, _slicedToArray2["default"])(colors[idx > -1 ? idx : 0], 2),
    colorA = _colors[0],
    colorB = _colors[1];
  return "linear-gradient(to bottom, ".concat(colorA, ", ").concat(colorB, ")");
};
var Avatar = exports.Avatar = function Avatar(_ref) {
  var email = _ref.email,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    src = _ref.src,
    username = _ref.username,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var displayName = username || email || 'O';
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({}, restProps), {}, {
    $_css: sizeStyleMap[size].fontSize,
    $_css2: sizeStyleMap[size].height,
    $_css3: sizeStyleMap[size].width,
    $_css4: src ? "\n          background-image: url(".concat(src, ");\n        ") : "\n          background: ".concat(getRandomGradient(displayName), ";\n        "),
    children: src ? null : displayName.charAt(0)
  }));
};
var sizeStyleMap = {
  xl: {
    fontSize: '2rem',
    height: '5rem',
    width: '5rem'
  },
  lg: {
    fontSize: '1.25rem',
    height: '3rem',
    width: '3rem'
  },
  md: {
    fontSize: '0.8125rem',
    height: '2rem',
    width: '2rem'
  },
  sm: {
    fontSize: '0.5rem',
    height: '1.5rem',
    width: '1.5rem'
  }
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-114s7q3-0"
})(["align-items:center;background-position:center;background-size:cover;border-radius:100%;box-shadow:inset 0 0 0 0.0625rem hsl(0deg 0% 100% / 20%);color:var(--white);display:flex;flex-shrink:0;font-size:", ";font-weight:500;height:", ";justify-content:center;text-transform:uppercase;width:", ";", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
});