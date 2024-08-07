"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Anchor = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["variant"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var variantStyleMap = {
  unstyled: (0, _styledComponents.css)(["color:inherit;text-decoration:none;"]),
  "default": (0, _styledComponents.css)(["color:inherit;text-decoration:none;&:hover{color:var(--primary50);}"]),
  primary: (0, _styledComponents.css)(["color:var(--primary50);text-decoration:none;"]),
  secondary: (0, _styledComponents.css)(["color:var(--secondary50);text-decoration:none;"]),
  muted: (0, _styledComponents.css)(["color:var(--fg-muted);text-decoration:none;&:hover{color:var(--fg-default);}"]),
  hoverUnderline: (0, _styledComponents.css)(["color:inherit;text-decoration:none;&:hover{text-decoration:underline;}"]),
  hoverBg: (0, _styledComponents.css)(["border-radius:var(--radius-1);color:inherit;padding:var(--gap-1-5) var(--gap-2);text-decoration:none;&:hover{background-color:var(--bg-minimal);}"]),
  underline: (0, _styledComponents.css)(["color:inherit;text-decoration:underline;&:hover{color:var(--primary50);}"])
};
var Anchor = exports.Anchor = (0, _compat.forwardRef)(function (_ref, ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledA, _objectSpread(_objectSpread({
    ref: ref
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: variantStyleMap[variant],
    $_css2: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props)
  }));
});
var _StyledA = /*#__PURE__*/(0, _styledComponents["default"])("a").withConfig({
  componentId: "sc-1rkbe30-0"
})(["", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});