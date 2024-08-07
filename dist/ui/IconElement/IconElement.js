"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconElement = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var IconElement = exports.IconElement = (0, _compat.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    size = _ref.size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _size = typeof size === 'number' ? "".concat(size, "px") : size;
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({
    ref: ref
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: _size && "\n            & svg {\n              height: ".concat(_size, ";\n              width: ").concat(_size, ";\n            }\n          "),
    $_css2: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: children
  }));
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1l1ls9w-0"
})(["display:inline-flex;", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});