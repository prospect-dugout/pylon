"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "withDot", "variant"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Badge = exports.Badge = function Badge(_ref) {
  var children = _ref.children,
    _ref$withDot = _ref.withDot,
    withDot = _ref$withDot === void 0 ? false : _ref$withDot,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'success' : _ref$variant,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _variantMap$variant = variantMap[variant],
    color = _variantMap$variant.color,
    background = _variantMap$variant.background,
    dotColor = _variantMap$variant.dotColor;
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, restProps), {}, {
    $_css: background,
    $_css2: color,
    children: [withDot && (0, _jsxRuntime.jsx)(_StyledDiv2, {
      $_css3: dotColor
    }), (0, _jsxRuntime.jsx)(_Typography.Typography, {
      variant: "body5",
      weight: "bold",
      textTransform: "uppercase",
      children: children
    })]
  }));
};
var variantMap = {
  info: {
    background: 'var(--info)',
    color: 'var(--info-contrast-text)',
    dotColor: 'var(--info-contrast-text)'
  },
  success: {
    background: 'var(--success)',
    color: 'var(--success-contrast-text)',
    dotColor: 'var(--success-contrast-text)'
  },
  error: {
    background: 'var(--error)',
    color: 'var(--error-contrast-text)',
    dotColor: 'var(--error-contrast-text)'
  },
  warning: {
    background: 'var(--warning)',
    color: 'var(--warning-contrast-text)',
    dotColor: 'var(--warning-contrast-text)'
  },
  'info-dark': {
    background: 'var(--info-dark)',
    color: 'var(--info-dark-contrast-text)',
    dotColor: 'var(--info-dark-contrast-text)'
  },
  'success-dark': {
    background: 'var(--success-dark)',
    color: 'var(--success-dark-contrast-text)',
    dotColor: 'var(--success-dark-contrast-text)'
  },
  'error-dark': {
    background: 'var(--error-dark)',
    color: 'var(--error-dark-contrast-text)',
    dotColor: 'var(--error-dark-contrast-text)'
  },
  'warning-dark': {
    background: 'var(--warning-dark)',
    color: 'var(--warning-dark-contrast-text)',
    dotColor: 'var(--warning-dark-contrast-text)'
  }
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-8smnph-0"
})(["align-items:center;background:", ";border-radius:var(--radius-4);color:", ";display:inline-flex;height:1.625rem;gap:var(--gap-1-5);padding:0 var(--gap-3);"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-8smnph-1"
})(["background:", ";border-radius:50%;height:6px;width:6px;"], function (p) {
  return p.$_css3;
});