"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Anchor = require("../Anchor");
var _Icon = require("../Icon");
var _variants = require("./variants");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["buttonSize", "href", "icon", "iconSize", "variant", "withArrow"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var IconButton = exports.IconButton = (0, _compat.forwardRef)(function (_ref, ref) {
  var _ref$buttonSize = _ref.buttonSize,
    buttonSize = _ref$buttonSize === void 0 ? 'lg' : _ref$buttonSize,
    href = _ref.href,
    icon = _ref.icon,
    iconSize = _ref.iconSize,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$withArrow = _ref.withArrow,
    withArrow = _ref$withArrow === void 0 ? false : _ref$withArrow,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var customIconSize = typeof iconSize === 'number' ? "".concat(iconSize, "px") : iconSize;
  var styles = /*#__PURE__*/(0, _styledComponents.css)(["align-items:center;cursor:pointer;display:inline-flex;text-decoration:none;user-select:none;& *:not(.arrow-icon) svg{height:", ";width:", ";}", " ", " &[disabled]{cursor:default;opacity:0.6;pointer-events:none;}", ""], customIconSize || "var(--icon-button-size-".concat(buttonSize, ")"), customIconSize || "var(--icon-button-size-".concat(buttonSize, ")"), variant !== 'unstyled' && (0, _styledComponents.css)(["border-radius:var(--icon-button-radius-", ");padding:var(--icon-button-padding-", ");transition:all 0.25s ease;"], buttonSize, buttonSize), _variants.variantsStyles[variant], (0, _customCssPropertiesRule.customCSSPropertiesRule)(props));
  var content = (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [typeof icon === 'string' ? (0, _jsxRuntime.jsx)(_Icon.Icon, {
      icon: icon
    }) : icon, withArrow && (0, _jsxRuntime.jsx)(_StyledIcon, {
      icon: "chevron-down",
      className: "arrow-icon",
      size: "1rem"
    })]
  });
  if (href) {
    return (0, _jsxRuntime.jsx)("div", {
      ref: ref,
      children: (0, _jsxRuntime.jsx)(_StyledAnchor, _objectSpread(_objectSpread({
        type: "button",
        href: href
      }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
        $_css: styles,
        children: content
      }))
    });
  } else {
    return (0, _jsxRuntime.jsx)(_StyledButton, _objectSpread(_objectSpread({
      ref: ref,
      type: "button"
    }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
      $_css2: styles,
      children: content
    }));
  }
});
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-iyu2et-0"
})(["& svg{margin-left:0.25rem;}"]);
var _StyledAnchor = /*#__PURE__*/(0, _styledComponents["default"])(_Anchor.Anchor).withConfig({
  componentId: "sc-iyu2et-1"
})(["", ""], function (p) {
  return p.$_css;
});
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])("button").withConfig({
  componentId: "sc-iyu2et-2"
})(["", ""], function (p) {
  return p.$_css2;
});