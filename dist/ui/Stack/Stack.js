"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["alignItems", "children", "direction", "gap", "justifyContent"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Stack = exports.Stack = function Stack(_ref) {
  var alignItems = _ref.alignItems,
    children = _ref.children,
    direction = _ref.direction,
    gap = _ref.gap,
    justifyContent = _ref.justifyContent,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(StyledStack, _objectSpread(_objectSpread({
    $alignItems: alignItems,
    $direction: direction,
    $gap: gap,
    $extraCss: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    $justifyContent: justifyContent
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    children: children
  }));
};
var StyledStack = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-10oujte-0"
})(["align-items:", ";display:flex;flex-direction:", ";gap:", ";justify-content:", ";", ""], function (p) {
  return p.$alignItems || '';
}, function (p) {
  return p.$direction || '';
}, function (p) {
  return p.$gap ? _customCssPropertiesRule.gapMap[p.$gap] : '';
}, function (p) {
  return p.$justifyContent || '';
}, function (p) {
  return p.$extraCss;
});