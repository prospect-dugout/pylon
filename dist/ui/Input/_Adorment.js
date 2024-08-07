"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input_Adorment = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["disabled", "position"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Input_Adorment = exports.Input_Adorment = function Input_Adorment(_ref) {
  var disabled = _ref.disabled,
    position = _ref.position,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledTypography, _objectSpread(_objectSpread({
    className: "input-adornment"
  }, props), {}, {
    $_css: disabled ? 'var(--fg-disabled)' : 'var(--fg-subtle)',
    $_css2: position === 'start' ? 'padding: 0 0 0 var(--gap-3);' : 'padding: 0 var(--gap-3) 0 0;',
    $_css3: position === 'start' ? 'border-right: 1px solid var(--input-border-color)' : 'border-left: 1px solid var(--input-border-color)'
  }));
};
var _StyledTypography = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-1tg3dph-0"
})(["align-items:center;color:", ";display:flex;height:100%;justify-content:center;padding:0 var(--gap-3);pointer-events:none;", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});