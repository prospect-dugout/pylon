"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeSelect = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["id", "invalid", "defaultValue", "propertyForLabel", "options"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NativeSelect = exports.NativeSelect = (0, _compat.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    _ref$invalid = _ref.invalid,
    invalid = _ref$invalid === void 0 ? false : _ref$invalid,
    defaultValue = _ref.defaultValue,
    _ref$propertyForLabel = _ref.propertyForLabel,
    propertyForLabel = _ref$propertyForLabel === void 0 ? 'label' : _ref$propertyForLabel,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledSelect, _objectSpread(_objectSpread({
    id: id,
    ref: ref
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: invalid ? '1px solid var(--input-outline-error-color)' : '1px solid var(--input-border-color)',
    $_css2: invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)',
    $_css3: invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)',
    $_css4: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: options.map(function (option) {
      return (0, _jsxRuntime.jsx)("option", {
        value: option.value,
        selected: defaultValue === option.value,
        children: option[propertyForLabel]
      }, option.value);
    })
  }));
});
var _StyledSelect = /*#__PURE__*/(0, _styledComponents["default"])("select").withConfig({
  componentId: "sc-1g3iwfs-0"
})(["background:var(--input-bg);border:", ";border-radius:var(--input-radius-md);color:var(--input-color);display:inline-block;height:var(--input-height-md);outline:0;padding:var(--input-padding-md);text-decoration:none;text-overflow:ellipsis;&:focus{border-color:", ";box-shadow:inset 0 0 0 1px ", ";}", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
});