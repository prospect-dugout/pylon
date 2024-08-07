"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["direction"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Divider = exports.Divider = function Divider(_ref) {
  var direction = _ref.direction,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  if (direction === 'row') {
    return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
      $_css: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props)
    }));
  }
  return (0, _jsxRuntime.jsx)(_StyledDiv2, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css2: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props)
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-mymvrg-0"
})(["width:0.0625rem;height:100%;background:var(--border-muted);", ""], function (p) {
  return p.$_css;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-mymvrg-1"
})(["height:0.0625rem;width:100%;background:var(--border-muted);", ""], function (p) {
  return p.$_css2;
});