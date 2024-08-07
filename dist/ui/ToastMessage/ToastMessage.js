"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastMessage = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _IconButton = require("../IconButton");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "contentCss", "onClickClose", "severity", "withoutIcon"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var stylesMap = {
  "default": {
    bgColor: 'var(--bg-minimal)',
    color: 'var(--fg-default)'
  },
  info: {
    bgColor: 'var(--info)',
    color: 'var(--info-contrast-text)',
    emoji: 'ℹ️'
  },
  warning: {
    bgColor: 'var(--warning)',
    color: 'var(--warning-contrast-text)',
    emoji: '⚠️'
  },
  error: {
    bgColor: 'var(--error)',
    color: 'var(--error-contrast-text)',
    emoji: '💥'
  },
  success: {
    bgColor: 'var(--success)',
    color: 'var(--success-contrast-text)',
    emoji: '✅'
  }
};
var ToastMessage = exports.ToastMessage = function ToastMessage(_ref) {
  var children = _ref.children,
    contentCss = _ref.contentCss,
    onClickClose = _ref.onClickClose,
    _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? 'default' : _ref$severity,
    _ref$withoutIcon = _ref.withoutIcon,
    withoutIcon = _ref$withoutIcon === void 0 ? false : _ref$withoutIcon,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _stylesMap$severity = stylesMap[severity],
    bgColor = _stylesMap$severity.bgColor,
    color = _stylesMap$severity.color,
    emoji = _stylesMap$severity.emoji;
  var hasIcon = emoji && !withoutIcon;
  var hasCloseButton = !!onClickClose;
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(restProps)), {}, {
    $_css: bgColor,
    $_css2: color,
    $_css3: (0, _customCssPropertiesRule.customCSSPropertiesRule)(restProps),
    children: [(hasCloseButton || hasIcon) && (0, _jsxRuntime.jsxs)(_StyledDiv2, {
      children: [hasIcon && (0, _jsxRuntime.jsx)(_StyledDiv3, {
        children: emoji
      }), hasCloseButton && (0, _jsxRuntime.jsx)(_StyledIconButton, {
        icon: "close",
        size: 20,
        "css-color": "inherit",
        onClick: onClickClose
      })]
    }), (0, _jsxRuntime.jsx)(_StyledTypography, {
      weight: "medium",
      $_css4: hasIcon ? 'var(--gap-10)' : 0,
      $_css5: hasCloseButton ? 'var(--gap-10)' : 0,
      $_css6: contentCss,
      children: children
    })]
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1jnfgvy-0"
})(["background:", ";border-radius:var(--radius-2);color:", ";display:flex;gap:var(--gap-2);min-height:calc(var(--button-height-md) + var(--gap-6));padding:var(--gap-3) var(--gap-4);position:relative;", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1jnfgvy-1"
})(["align-items:center;display:flex;height:100%;justify-content:space-between;left:var(--gap-4);max-height:var(--button-height-md);pointer-events:none;position:absolute;right:var(--gap-4);top:var(--gap-3);"]);
var _StyledDiv3 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1jnfgvy-2"
})(["flex-shrink:0;font-size:var(--font-size-subtitle-1);min-width:1.875rem;text-align:center;"]);
var _StyledIconButton = /*#__PURE__*/(0, _styledComponents["default"])(_IconButton.IconButton).withConfig({
  componentId: "sc-1jnfgvy-3"
})(["flex-shrink:0;pointer-events:all;"]);
var _StyledTypography = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-1jnfgvy-4"
})(["align-items:center;display:flex;flex-wrap:wrap;flex:1;padding-left:", ";padding-right:", ";", ""], function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
}, function (p) {
  return p.$_css6;
});