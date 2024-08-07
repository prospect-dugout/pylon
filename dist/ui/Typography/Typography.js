"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typographyVariants = exports.Typography = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "fontStyle", "tagName", "textTransform", "variant", "weight"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var typographyVariants = exports.typographyVariants = {
  h1: {
    fontSize: 'var(--font-size-h1)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.01562em',
    lineHeight: 'var(--line-height-1)',
    tagName: 'h1'
  },
  h2: {
    fontSize: 'var(--font-size-h2)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.00833em',
    lineHeight: 'var(--line-height-1)',
    tagName: 'h2'
  },
  h3: {
    fontSize: 'var(--font-size-h3)',
    fontWeight: 'var(--font-weight-extra-bold)',
    lineHeight: 'var(--line-height-1)',
    tagName: 'h3'
  },
  h4: {
    fontSize: 'var(--font-size-h4)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.09rem',
    lineHeight: 'var(--line-height-3)',
    tagName: 'h4'
  },
  h5: {
    fontSize: 'var(--font-size-h5)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.05rem',
    tagName: 'h5'
  },
  h6: {
    fontSize: 'var(--font-size-h6)',
    fontWeight: 'var(--font-weight-bold)',
    letterSpacing: '-0.05rem',
    tagName: 'h6'
  },
  subtitle1: {
    fontSize: 'var(--font-size-subtitle-1)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: 'var(--line-height-5)'
  },
  subtitle2: {
    fontSize: 'var(--font-size-subtitle-2)',
    fontWeight: 'var(--font-weight-medium)'
  },
  body1: {
    fontSize: 'var(--font-size-body-1)'
  },
  body2: {
    fontSize: 'var(--font-size-body-2)'
  },
  body3: {
    fontSize: 'var(--font-size-body-3)'
  },
  body4: {
    fontSize: 'var(--font-size-body-4)'
  },
  body5: {
    fontSize: 'var(--font-size-body-5)'
  },
  "default": {
    fontSize: 'var(--font-size-default)'
  }
};
var Typography = exports.Typography = function Typography(_ref) {
  var children = _ref.children,
    fontStyle = _ref.fontStyle,
    tagName = _ref.tagName,
    textTransform = _ref.textTransform,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _typographyVariants$v = typographyVariants[variant],
    fontSize = _typographyVariants$v.fontSize,
    fontWeight = _typographyVariants$v.fontWeight,
    letterSpacing = _typographyVariants$v.letterSpacing,
    lineHeight = _typographyVariants$v.lineHeight,
    defaultTagName = _typographyVariants$v.tagName;
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({
    as: tagName || defaultTagName
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: fontSize || 'var(--font-size-default)',
    $_css2: fontWeight || "var(--font-weight-".concat(weight, ")"),
    $_css3: letterSpacing || 'initial',
    $_css4: lineHeight || 'var(--line-height-4)',
    $_css5: fontStyle ? "font-style: ".concat(fontStyle, ";") : '',
    $_css6: textTransform ? "text-transform: ".concat(textTransform, ";") : '',
    $_css7: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: children
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-czkf6p-0"
})(["font-size:", ";font-weight:", ";letter-spacing:", ";line-height:", ";", " ", " ", ""], function (p) {
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
}, function (p) {
  return p.$_css7;
});