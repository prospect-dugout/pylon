"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["animation", "height", "variant", "width"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var shimmer = /*#__PURE__*/(0, _styledComponents.keyframes)(["100%{transform:translateX(100%);}"]);
var Skeleton = exports.Skeleton = function Skeleton(_ref) {
  var _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? true : _ref$animation,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '1rem' : _ref$height,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'rounded' : _ref$variant,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '1rem' : _ref$width,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
    $_css: variant === 'circular' ? width : variant === 'rounded' ? 'var(--radius-2)' : '0',
    $_css2: height,
    $_css3: width,
    $_css4: animation && (0, _styledComponents.css)(["&::after{animation:", " 1.25s infinite;background:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.3) 20%,rgba(255,255,255,0.6) 60%,rgba(255,255,255,0) );content:'';inset:0;position:absolute;transform:translateX(-100%);}"], shimmer)
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-80ynxw-0"
})(["background:var(--bg-subtle);border-radius:", ";height:", ";overflow:hidden;position:relative;width:", ";", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
});