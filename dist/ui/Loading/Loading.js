"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _hooks = require("preact/hooks");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["centered", "size"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Loading = exports.Loading = function Loading(_ref) {
  var _ref$centered = _ref.centered,
    centered = _ref$centered === void 0 ? false : _ref$centered,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    updated = _useState2[0],
    setUpdated = _useState2[1];
  props['css-color'] = props['css-color'] || 'var(--fg-subtle)';
  (0, _hooks.useEffect)(function () {
    var timer = setTimeout(function () {
      setUpdated(true);
    }, 50);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return (0, _jsxRuntime.jsx)(StyledRoot, _objectSpread(_objectSpread({
    $css: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    $centered: centered
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    children: (0, _jsxRuntime.jsx)(StyledSvg, {
      viewBox: "25 25 50 50",
      strokeWidth: widthMap[size],
      $size: size,
      $updated: updated,
      children: (0, _jsxRuntime.jsx)("circle", {
        cx: "50",
        cy: "50",
        r: "20"
      })
    })
  }));
};
var sizeMap = {
  sm: '22px',
  md: '32px',
  lg: '42px'
};
var widthMap = {
  sm: '5px',
  md: '4px',
  lg: '3px'
};
var rotateAnimation = /*#__PURE__*/(0, _styledComponents.keyframes)(["100%{transform:rotate(360deg);}"]);
var stretchAnimation = /*#__PURE__*/(0, _styledComponents.keyframes)(["0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px;}100%{stroke-dashoffset:-124px;}"]);
var StyledRoot = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-187avbl-0"
})(["display:", ";justify-content:", ";align-items:", ";padding:", ";width:", ";", ""], function (p) {
  return p.$centered ? 'flex' : 'inline-flex';
}, function (p) {
  return p.$centered ? 'center' : 'initial';
}, function (p) {
  return p.$centered ? 'center' : 'initial';
}, function (p) {
  return p.$centered ? '1rem 0' : 'initial';
}, function (p) {
  return p.$centered ? '100%' : 'initial';
}, function (p) {
  return p.$css;
});
var StyledSvg = /*#__PURE__*/_styledComponents["default"].svg.withConfig({
  componentId: "sc-187avbl-1"
})(["animation:", " 2s linear infinite;height:", ";transform-origin:center;vertical-align:middle;width:", ";will-change:transform;& circle{fill:none;stroke:currentColor;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;display:", ";animation:", " calc(2s * 0.75) ease-in-out infinite;}"], rotateAnimation, function (p) {
  return sizeMap[p.$size];
}, function (p) {
  return sizeMap[p.$size];
}, function (p) {
  return p.$updated ? 'initial' : 'none';
}, stretchAnimation);