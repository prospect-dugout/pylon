"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["alignItems", "children", "cols", "gap", "justifyContent", "rows", "tagName"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Grid = exports.Grid = function Grid(_ref) {
  var alignItems = _ref.alignItems,
    children = _ref.children,
    cols = _ref.cols,
    gap = _ref.gap,
    justifyContent = _ref.justifyContent,
    rows = _ref.rows,
    _ref$tagName = _ref.tagName,
    tagName = _ref$tagName === void 0 ? 'div' : _ref$tagName,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({
    as: tagName
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: alignItems || '',
    $_css2: cols,
    $_css3: rows,
    $_css4: gap ? _customCssPropertiesRule.gapMap[gap] : '',
    $_css5: justifyContent || '',
    $_css6: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: children
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1gfic66-0"
})(["align-items:", ";display:grid;grid-template-columns:", ";grid-template-rows:", ";gap:", ";justify-content:", ";> *{min-width:0;min-height:0;}", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
}, function (p) {
  return p.$_css6;
});