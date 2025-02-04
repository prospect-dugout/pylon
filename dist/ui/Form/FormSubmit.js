"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSubmit = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _Button = require("../Button");
var _Loading = require("../Loading");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["value", "submitting", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormSubmit = exports.FormSubmit = function FormSubmit(_ref) {
  var value = _ref.value,
    submitting = _ref.submitting,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var loadingMargin = {
    sm: [0, 1, 0, 2],
    md: [0, 0, 0, 3],
    lg: [0, 0, 0, 3]
  };
  return (0, _jsxRuntime.jsxs)(_Button.Button, _objectSpread(_objectSpread({
    type: "submit",
    disabled: submitting,
    variant: "primary"
  }, props), {}, {
    children: [value || children, submitting && (0, _jsxRuntime.jsx)(_Loading.Loading, {
      size: "sm",
      "css-color": "var(--white)",
      "css-m": loadingMargin[props.buttonSize || 'md']
    })]
  }));
};