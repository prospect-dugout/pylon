"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptionList = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Stack = require("../Stack");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "gap", "expandWidthSize"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DescriptionList = exports.DescriptionList = function DescriptionList(_ref) {
  var children = _ref.children,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 0 : _ref$gap,
    _ref$expandWidthSize = _ref.expandWidthSize,
    expandWidthSize = _ref$expandWidthSize === void 0 ? 0 : _ref$expandWidthSize,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledStack, _objectSpread(_objectSpread({
    direction: "column",
    gap: gap
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: expandWidthSize,
    $_css2: expandWidthSize,
    $_css3: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: children
  }));
};
var _StyledStack = /*#__PURE__*/(0, _styledComponents["default"])(_Stack.Stack).withConfig({
  componentId: "sc-1y6zh1u-0"
})(["margin-left:calc(var(--gap-", ") * -1);width:calc(100% + var(--gap-", ") * 2);> *:nth-child(even){background:var(--bg-minimal);}", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
});