"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _preact = require("preact");
var _lib = require("../../lib");
var _Anchor = require("../Anchor");
var _Icon = require("../Icon");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["items"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Breadcrumbs = exports.Breadcrumbs = function Breadcrumbs(_ref) {
  var items = _ref.items,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({}, restProps), {}, {
    children: items.map(function (_ref2, idx) {
      var href = _ref2.href,
        title = _ref2.title;
      return (0, _jsxRuntime.jsxs)(_preact.Fragment, {
        children: [href ? (0, _jsxRuntime.jsx)(_StyledAnchor, {
          href: href,
          $_css: idx ? '0 .5rem' : '0 .5rem 0 0',
          children: title
        }) : (0, _jsxRuntime.jsx)(_StyledDiv2, {
          $_css2: idx ? '0 .5rem' : 0,
          children: title
        }), idx !== items.length - 1 && (0, _jsxRuntime.jsx)(_Icon.Icon, {
          icon: "chevron-forward",
          "css-color": "var(--fg-subtle)",
          size: Number((0, _lib.computedStyleValue)('var(--breadcrums-icon-size)')) || 20
        })]
      }, title);
    })
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-kfo6mz-0"
})(["align-items:center;display:flex;flex-wrap:wrap;font-size:var(--breadcrums-font-size,var(--font-size-default));font-weight:var(--font-weight-bold);margin:0 0 1.5rem 0;"]);
var _StyledAnchor = /*#__PURE__*/(0, _styledComponents["default"])(_Anchor.Anchor).withConfig({
  componentId: "sc-kfo6mz-1"
})(["color:var(--fg-subtle);margin:", ";"], function (p) {
  return p.$_css;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-kfo6mz-2"
})(["color:var(--fg-default);margin:", ";"], function (p) {
  return p.$_css2;
});