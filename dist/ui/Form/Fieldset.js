"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Tooltip = require("../Tooltip");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "fullWidth", "helpText", "invalidText", "label", "labelFor", "showInvalidTextInTooltip", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Fieldset = exports.Fieldset = function Fieldset(_ref) {
  var children = _ref.children,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    helpText = _ref.helpText,
    invalidText = _ref.invalidText,
    label = _ref.label,
    labelFor = _ref.labelFor,
    _ref$showInvalidTextI = _ref.showInvalidTextInTooltip,
    showInvalidTextInTooltip = _ref$showInvalidTextI === void 0 ? false : _ref$showInvalidTextI,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsxs)(StyledFieldset, _objectSpread(_objectSpread({
    $fullWidth: fullWidth
  }, restProps), {}, {
    children: [label && (0, _jsxRuntime.jsx)(StyledLabel, {
      "for": labelFor,
      $size: size,
      children: label
    }), showInvalidTextInTooltip && !!invalidText ? (0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      text: invalidText,
      severity: "error",
      keepOpenedOnChildFocus: true,
      overlayPosition: {
        horizontalAlign: 'right',
        verticalOffset: 2
      },
      children: children
    }) : children, !!invalidText && !showInvalidTextInTooltip && (0, _jsxRuntime.jsx)(StyledInvalidText, {
      $size: size,
      children: invalidText
    }), !!helpText && (0, _jsxRuntime.jsx)(StyledHelpText, {
      $size: size,
      children: helpText
    })]
  }));
};
var StyledFieldset = /*#__PURE__*/_styledComponents["default"].fieldset.withConfig({
  componentId: "sc-jpqxn5-0"
})(["align-items:flex-start;display:inline-flex;flex-direction:column;gap:var(--gap-2);min-width:0;width:", ";"], function (p) {
  return p.$fullWidth ? '100%' : '';
});
var StyledLabel = /*#__PURE__*/_styledComponents["default"].label.withConfig({
  componentId: "sc-jpqxn5-1"
})(["font-size:var(--input-font-size-", ");font-weight:var(--font-weight-bold);width:100%;"], function (p) {
  return p.$size;
});
var StyledInvalidText = /*#__PURE__*/_styledComponents["default"].p.withConfig({
  componentId: "sc-jpqxn5-2"
})(["color:var(--error-dark);font-size:var(--input-font-size-", ");font-weight:var(--font-weight-bold);"], function (p) {
  return p.$size;
});
var StyledHelpText = /*#__PURE__*/_styledComponents["default"].p.withConfig({
  componentId: "sc-jpqxn5-3"
})(["color:var(--fg-muted);font-size:var(--input-font-size-", ");font-weight:var(--font-weight-medium);"], function (p) {
  return p.$size;
});