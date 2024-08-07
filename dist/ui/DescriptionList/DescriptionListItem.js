"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptionListItem = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _lib = require("../../lib");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Icon = require("../Icon");
var _Tooltip = require("../Tooltip");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "cols", "contentCss", "title", "tooltipProps"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DescriptionListItem = exports.DescriptionListItem = function DescriptionListItem(_ref) {
  var children = _ref.children,
    cols = _ref.cols,
    contentCss = _ref.contentCss,
    title = _ref.title,
    tooltipProps = _ref.tooltipProps,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsxs)(_StyledDl, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: cols ? cols : '35% 1fr',
    $_css2: (0, _lib.mediaQuery)('md>', (0, _styledComponents.css)(["grid-template-columns:", ";"], cols ? cols : '20% 1fr')),
    $_css3: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: [(0, _jsxRuntime.jsxs)(_StyledDt, {
      children: [title, !!tooltipProps && (0, _jsxRuntime.jsx)(_Tooltip.Tooltip, _objectSpread(_objectSpread({
        overlayPosition: {
          horizontalAlign: 'right',
          horizontalOffset: 6,
          noHorizontalOverlap: true,
          noVerticalOverlap: false,
          verticalAlign: 'bottom',
          verticalOffset: -16
        }
      }, tooltipProps), {}, {
        children: (0, _jsxRuntime.jsx)(_Icon.Icon, {
          icon: "info-circle-outline",
          "css-ml": 2,
          size: 20
        })
      }))]
    }), (0, _jsxRuntime.jsx)(_StyledDd, {
      $_css4: contentCss,
      children: children
    })]
  }));
};
var _StyledDl = /*#__PURE__*/(0, _styledComponents["default"])("dl").withConfig({
  componentId: "sc-1tozxec-0"
})(["display:grid;gap:var(--gap-4);grid-template-columns:", ";padding:var(--gap-3) var(--gap-6);", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
});
var _StyledDt = /*#__PURE__*/(0, _styledComponents["default"])("dt").withConfig({
  componentId: "sc-1tozxec-1"
})(["align-items:center;color:var(--fg-subtle);display:flex;"]);
var _StyledDd = /*#__PURE__*/(0, _styledComponents["default"])("dd").withConfig({
  componentId: "sc-1tozxec-2"
})(["", ""], function (p) {
  return p.$_css4;
});