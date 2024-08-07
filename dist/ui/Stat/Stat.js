"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stat = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _css3 = require("../../lib/css");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Icon = require("../Icon");
var _Loading = require("../Loading");
var _Stack = require("../Stack");
var _Tooltip = require("../Tooltip");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["iconColor", "icon", "loading", "title", "tooltipProps", "value"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Stat = exports.Stat = function Stat(_ref) {
  var _ref$iconColor = _ref.iconColor,
    iconColor = _ref$iconColor === void 0 ? 'inherit' : _ref$iconColor,
    icon = _ref.icon,
    loading = _ref.loading,
    title = _ref.title,
    tooltipProps = _ref.tooltipProps,
    value = _ref.value,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: [(0, _jsxRuntime.jsxs)(_Stack.Stack, {
      direction: "row",
      justifyContent: "space-between",
      "css-mb": 4,
      children: [!!icon && (0, _jsxRuntime.jsx)(_StyledDiv2, {
        $_css2: iconColor && (0, _styledComponents.css)(["color:", ";background:", ";"], iconColor, (0, _css3.computedStyleValue)(iconColor) + '1A'),
        children: typeof icon === 'string' ? (0, _jsxRuntime.jsx)(_Icon.Icon, {
          icon: icon
        }) : icon
      }), (0, _jsxRuntime.jsx)(_Typography.Typography, {
        variant: "h5",
        tagName: "div",
        children: loading ? (0, _jsxRuntime.jsx)(_StyledSkeleton, {
          width: "80px",
          height: "24px"
        }) : value
      })]
    }), (0, _jsxRuntime.jsxs)(_StyledTypography, {
      variant: "body2",
      tagName: "div",
      "css-color": "var(--fg-muted)",
      children: [title, tooltipProps && (0, _jsxRuntime.jsx)(_Tooltip.Tooltip, _objectSpread(_objectSpread({}, tooltipProps), {}, {
        children: (0, _jsxRuntime.jsx)(_Icon.Icon, {
          icon: "info-circle-outline",
          "css-ml": 1,
          "css-color": "var(--fg-muted)",
          size: 20
        })
      }))]
    })]
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-mjp2ug-0"
})(["", ""], function (p) {
  return p.$_css;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-mjp2ug-1"
})(["border-radius:var(--radius-2);display:inline-flex;padding:var(--gap-2);", ""], function (p) {
  return p.$_css2;
});
var _StyledSkeleton = /*#__PURE__*/(0, _styledComponents["default"])(_Loading.Skeleton).withConfig({
  componentId: "sc-mjp2ug-2"
})(["margin-top:var(--gap-2);"]);
var _StyledTypography = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-mjp2ug-3"
})(["display:flex;align-items:center;"]);