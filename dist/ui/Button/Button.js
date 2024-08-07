"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Anchor = require("../Anchor");
var _Icon = require("../Icon");
var _Icon2 = require("./_Icon");
var _variantStyles = require("./variant-styles");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["buttonSize", "children", "customVariant", "disabled", "fullWidth", "href", "iconCss", "iconLeading", "iconSize", "iconTrailing", "type", "variant", "withArrow"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Button = exports.Button = (0, _compat.forwardRef)(function (_ref, ref) {
  var _ref$buttonSize = _ref.buttonSize,
    buttonSize = _ref$buttonSize === void 0 ? 'md' : _ref$buttonSize,
    children = _ref.children,
    customVariant = _ref.customVariant,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    href = _ref.href,
    iconCss = _ref.iconCss,
    iconLeading = _ref.iconLeading,
    iconSize = _ref.iconSize,
    iconTrailing = _ref.iconTrailing,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$withArrow = _ref.withArrow,
    withArrow = _ref$withArrow === void 0 ? false : _ref$withArrow,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var content = (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Icon2.Button_Icon, {
      icon: iconLeading,
      direction: "leading",
      buttonSize: buttonSize,
      iconCss: iconCss,
      iconSize: iconSize
    }), children, (0, _jsxRuntime.jsx)(_Icon2.Button_Icon, {
      icon: iconTrailing,
      direction: "trailing",
      buttonSize: buttonSize,
      iconCss: iconCss,
      iconSize: iconSize
    }), withArrow ? (0, _jsxRuntime.jsx)(_StyledIcon, {
      icon: "chevron-down",
      size: "1rem"
    }) : null]
  });
  var commonStyles = /*#__PURE__*/(0, _styledComponents.css)(["align-items:center;cursor:pointer;display:inline-flex;text-align:left;text-decoration:none;user-select:none;vertical-align:middle;white-space:nowrap;width:", ";&:focus-visible{outline-offset:2px;outline:2px solid var(--input-outline-color);}&[disabled]{cursor:default;filter:grayscale(1) opacity(0.7);pointer-events:none;}", " ", ""], fullWidth ? '100%' : 'auto', customVariant ? customVariant({
    buttonSize: buttonSize,
    iconTrailing: iconTrailing,
    iconLeading: iconLeading
  }) : variant !== 'unstyled' ? (0, _styledComponents.css)(["border-radius:var(--button-radius-", ");font-size:var(--button-font-size-", ");font-weight:var(--button-weight-", ");height:var(--button-height-", ");justify-content:center;padding:var(--button-padding-", ");", ";"], buttonSize, buttonSize, buttonSize, buttonSize, buttonSize, _variantStyles.variantsStyles[variant]) : null, (0, _customCssPropertiesRule.customCSSPropertiesRule)(restProps));
  if (href) {
    return (0, _jsxRuntime.jsx)(_StyledAnchor, _objectSpread(_objectSpread({
      ref: ref,
      type: type,
      variant: "unstyled",
      href: href,
      disabled: disabled
    }, (0, _customCssPropertiesRule.nonCustomCSSProps)(restProps)), {}, {
      $_css: commonStyles,
      children: content
    }));
  } else {
    return (0, _jsxRuntime.jsx)(_StyledButton, _objectSpread(_objectSpread({
      ref: ref,
      type: type,
      disabled: disabled
    }, (0, _customCssPropertiesRule.nonCustomCSSProps)(restProps)), {}, {
      $_css2: commonStyles,
      children: content
    }));
  }
});
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-q0vpkx-0"
})(["& svg{margin-left:var(--gap-2);}"]);
var _StyledAnchor = /*#__PURE__*/(0, _styledComponents["default"])(_Anchor.Anchor).withConfig({
  componentId: "sc-q0vpkx-1"
})(["", ""], function (p) {
  return p.$_css;
});
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])("button").withConfig({
  componentId: "sc-q0vpkx-2"
})(["", ""], function (p) {
  return p.$_css2;
});