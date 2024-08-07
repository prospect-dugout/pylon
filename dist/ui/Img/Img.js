"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _hooks = require("preact/hooks");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["placeholder", "position", "preload", "sizing", "src"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Img = exports.Img = function Img(_ref) {
  var placeholder = _ref.placeholder,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'center' : _ref$position,
    _ref$preload = _ref.preload,
    preload = _ref$preload === void 0 ? true : _ref$preload,
    _ref$sizing = _ref.sizing,
    sizing = _ref$sizing === void 0 ? 'contain' : _ref$sizing,
    src = _ref.src,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  (0, _hooks.useEffect)(function () {
    if (preload && src) {
      setError(false);
      var image = new Image();
      image.onload = function () {
        setError(false);
        setLoaded(true);
      };
      image.onerror = function () {
        setError(true);
      };
      image.src = src;
    } else {
      setError(false);
    }
  }, [src, preload]);
  var displyPlaceholder = (error || !src) && placeholder;
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(restProps)), {}, {
    $_css: src,
    $_css2: position,
    $_css3: sizing,
    $_css4: loaded ? 1 : 0,
    $_css5: displyPlaceholder && (0, _styledComponents.css)(["align-items:center;display:flex;justify-content:center;"]),
    $_css6: (0, _customCssPropertiesRule.customCSSPropertiesRule)(restProps),
    children: displyPlaceholder && (0, _jsxRuntime.jsx)(_Typography.Typography, {
      variant: "body2",
      weight: "medium",
      "css-color": "var(--fg-muted)",
      children: placeholder
    })
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-ft1wwi-0"
})(["background-color:var(--gray10);background-image:url(", ");background-position:", ";background-repeat:no-repeat;background-size:", ";display:inline-flex;height:auto;width:auto;opacity:", ";transition:opacity 0.5s ease;", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
}, function (p) {
  return p.$_css6;
});