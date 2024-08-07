"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInput = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Input = require("../Input");
var _Fieldset = require("./Fieldset");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["fullWidth", "helpText", "id", "invalid", "invalidText", "label", "fieldsetCss", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormInput = exports.FormInput = (0, _compat.forwardRef)(function (_ref, ref) {
  var _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    helpText = _ref.helpText,
    id = _ref.id,
    invalid = _ref.invalid,
    invalidText = _ref.invalidText,
    label = _ref.label,
    fieldsetCss = _ref.fieldsetCss,
    size = _ref.size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledFieldset, {
    fullWidth: fullWidth,
    helpText: helpText,
    labelFor: id,
    invalidText: invalidText,
    label: label,
    size: size,
    $_css: fieldsetCss,
    $_css2: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: (0, _jsxRuntime.jsx)(_Input.Input, _objectSpread({
      ref: ref,
      id: id,
      invalid: invalid,
      size: size
    }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)))
  });
});
var _StyledFieldset = /*#__PURE__*/(0, _styledComponents["default"])(_Fieldset.Fieldset).withConfig({
  componentId: "sc-a24a44-0"
})(["", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});