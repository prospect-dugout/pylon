"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultChecked", "disabled", "label", "onChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = exports.Checkbox = (0, _compat.forwardRef)(function (_ref, ref) {
  var defaultChecked = _ref.defaultChecked,
    disabled = _ref.disabled,
    label = _ref.label,
    _onChange = _ref.onChange,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var content = (0, _jsxRuntime.jsx)(_StyledSpan, {
    $_css: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: (0, _jsxRuntime.jsx)(_StyledInput, _objectSpread({
      ref: ref,
      type: "checkbox",
      disabled: disabled,
      defaultChecked: defaultChecked,
      onChange: function onChange(evt) {
        _onChange === null || _onChange === void 0 || _onChange(evt);
      }
    }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)))
  });
  if (label) {
    return (0, _jsxRuntime.jsxs)(_StyledLabel, {
      $_css2: disabled && (0, _styledComponents.css)(["opacity:0.5;"]),
      children: [content, (0, _jsxRuntime.jsx)(_StyledDiv, {
        children: label
      })]
    });
  } else {
    return content;
  }
});
var _StyledSpan = /*#__PURE__*/(0, _styledComponents["default"])("span").withConfig({
  componentId: "sc-1btpz9i-0"
})(["align-items:center;cursor:pointer;display:inline-flex;justify-content:center;margin:0px;outline:0px;padding:0.5625rem;position:relative;text-decoration:none;user-select:none;vertical-align:middle;", ""], function (p) {
  return p.$_css;
});
var _StyledInput = /*#__PURE__*/(0, _styledComponents["default"])("input").withConfig({
  componentId: "sc-1btpz9i-1"
})(["cursor:inherit;inset:0;margin:0;padding:0;position:absolute;z-index:1;"]);
var _StyledLabel = /*#__PURE__*/(0, _styledComponents["default"])("label").withConfig({
  componentId: "sc-1btpz9i-2"
})(["align-items:center;cursor:pointer;display:inline-flex;", ""], function (p) {
  return p.$_css2;
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1btpz9i-3"
})(["margin-left:var(--gap-2);"]);