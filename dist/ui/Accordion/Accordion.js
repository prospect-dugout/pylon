"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _hooks = require("preact/hooks");
var _responsive = require("../../lib/responsive");
var _Button = require("../Button");
var _Icon = require("../Icon");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "title"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Accordion = exports.Accordion = function Accordion(_ref) {
  var children = _ref.children,
    title = _ref.title,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var contentRef = (0, _hooks.useRef)();
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
    $_css: (0, _responsive.mediaQuery)('lg>', (0, _styledComponents.css)(["background:", ";"], expanded ? 'var(--bg-minimal)' : '')),
    children: [(0, _jsxRuntime.jsxs)(_StyledButton, {
      variant: "unstyled",
      "aria-expanded": expanded,
      onClick: function onClick() {
        return setExpanded(function (prev) {
          return !prev;
        });
      },
      $_css2: (0, _responsive.mediaQuery)('lg>', (0, _styledComponents.css)(["padding:var(--gap-4) var(--gap-6);&:hover{background:var(--bg-minimal);}"])),
      children: [(0, _jsxRuntime.jsx)(_StyledTypography, {
        tagName: "h3",
        variant: "subtitle1",
        weight: "bold",
        $_css3: (0, _responsive.mediaQuery)('lg>', (0, _styledComponents.css)(["font-size:", ";font-weight:", ";letter-spacing:", ";"], _Typography.typographyVariants.h6.fontSize, _Typography.typographyVariants.h6.fontWeight, _Typography.typographyVariants.h6.letterSpacing)),
        children: title
      }), (0, _jsxRuntime.jsx)(_StyledIcon, {
        icon: "chevron-down",
        $_css4: expanded ? 'rotate(180deg)' : ''
      })]
    }), (0, _jsxRuntime.jsx)(_StyledDiv2, {
      $_css5: expanded ? 1 : 0,
      $_css6: expanded ? 'all' : 'none',
      $_css7: expanded ? 'visible' : 'hidden',
      $_css8: expanded && contentRef.current ? "".concat(contentRef.current.getBoundingClientRect().height, "px") : '0',
      children: (0, _jsxRuntime.jsx)(_StyledTypography2, {
        ref: function ref(e) {
          if (e !== null && e !== void 0 && e.base) {
            contentRef.current = e.base;
          }
        },
        variant: "body1",
        "css-color": "var(--fg-subtle)",
        $_css9: (0, _responsive.mediaQuery)('lg>', (0, _styledComponents.css)(["padding:var(--gap-2) var(--gap-6) var(--gap-6);"])),
        children: children
      })
    })]
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1r2hz18-0"
})(["border-radius:var(--radius-3);margin-bottom:0.25rem;", ""], function (p) {
  return p.$_css;
});
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])(_Button.Button).withConfig({
  componentId: "sc-1r2hz18-1"
})(["align-items:center;border-radius:var(--radius-3);color:var(--fg-default);display:flex;gap:var(--gap-4);justify-content:space-between;padding:var(--gap-4) 0;white-space:pre-wrap;width:100%;&:hover svg{color:var(--fg-default);}", ""], function (p) {
  return p.$_css2;
});
var _StyledTypography = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-1r2hz18-2"
})(["", ""], function (p) {
  return p.$_css3;
});
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-1r2hz18-3"
})(["color:var(--fg-muted);transition:transform 0.2s ease-in-out;transform:", ";"], function (p) {
  return p.$_css4;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1r2hz18-4"
})(["opacity:", ";overflow:hidden;pointer-events:", ";transition:all 0.2s ease-in-out;visibility:", ";height:", ";"], function (p) {
  return p.$_css5;
}, function (p) {
  return p.$_css6;
}, function (p) {
  return p.$_css7;
}, function (p) {
  return p.$_css8;
});
var _StyledTypography2 = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-1r2hz18-5"
})(["line-height:var(--line-height-5);max-width:var(--breakpoint-md);padding:var(--gap-2) 0 var(--gap-6);& ul{padding-left:var(--gap-6);margin:var(--gap-6) 0;}", ""], function (p) {
  return p.$_css9;
});