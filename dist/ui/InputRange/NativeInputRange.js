"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeInputRange = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _jsxRuntime = require("preact/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NativeInputRange = exports.NativeInputRange = function NativeInputRange(props) {
  return (0, _jsxRuntime.jsx)(StyledInput, _objectSpread({
    type: "range"
  }, props));
};
var thumbStyles = "\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border: 1px solid var(--primary50);\n  background: var(--primary50);\n  border-radius: var(--radius-round);\n  width: 1rem;\n  height: 1rem;\n  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n";
var StyledInput = /*#__PURE__*/_styledComponents["default"].input.withConfig({
  componentId: "sc-16fcylz-0"
})(["-webkit-appearance:none;-moz-appearance:none;height:0.1875rem;border-top:white;border-bottom:white;background:var(--border-muted);width:100%;&::-moz-range-thumb{", "}&::-webkit-slider-thumb{", "}"], thumbStyles, thumbStyles);