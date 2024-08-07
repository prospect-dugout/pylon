"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _Overlay = require("../Overlay");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "delay", "disabled", "keepOpenedOnChildFocus", "overlayPosition", "severity", "text", "title"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Tooltip = exports.Tooltip = function Tooltip(_ref) {
  var _children$type$displa;
  var children = _ref.children,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 0 : _ref$delay,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$keepOpenedOnChil = _ref.keepOpenedOnChildFocus,
    keepOpenedOnChildFocus = _ref$keepOpenedOnChil === void 0 ? false : _ref$keepOpenedOnChil,
    overlayPosition = _ref.overlayPosition,
    _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? 'default' : _ref$severity,
    text = _ref.text,
    title = _ref.title,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var childrenRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isChildFocused = _useState4[0],
    setIsChildFocused = _useState4[1];
  var openJob = (0, _hooks.useRef)(null);
  var closeJob = (0, _hooks.useRef)(null);
  var handleMouseEnter = function handleMouseEnter() {
    var _openJob$current, _closeJob$current;
    clearTimeout((_openJob$current = openJob.current) !== null && _openJob$current !== void 0 ? _openJob$current : -1);
    clearTimeout((_closeJob$current = closeJob.current) !== null && _closeJob$current !== void 0 ? _closeJob$current : -1);
    if (delay > 0) {
      openJob.current = setTimeout(function () {
        setOpened(true);
      }, delay);
    } else {
      setOpened(true);
    }
  };
  var handleMouseLeave = function handleMouseLeave() {
    var _openJob$current2, _closeJob$current2;
    clearTimeout((_openJob$current2 = openJob.current) !== null && _openJob$current2 !== void 0 ? _openJob$current2 : -1);
    clearTimeout((_closeJob$current2 = closeJob.current) !== null && _closeJob$current2 !== void 0 ? _closeJob$current2 : -1);
    closeJob.current = setTimeout(function () {
      setOpened(false);
    });
  };
  var childWithRef;
  if ((0, _preact.isValidElement)(children) && typeof children.type === 'function' && !((_children$type$displa = children.type.displayName) !== null && _children$type$displa !== void 0 && _children$type$displa.includes('ForwardRef'))) {
    childWithRef = (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({
      ref: childrenRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocusCapture: function onFocusCapture() {
        return setIsChildFocused(true);
      },
      onBlurCapture: function onBlurCapture() {
        return setIsChildFocused(false);
      }
    }, props), {}, {
      children: children
    }));
  } else {
    childWithRef = (0, _preact.cloneElement)(children, {
      ref: childrenRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocusCapture: function onFocusCapture() {
        return setIsChildFocused(true);
      },
      onBlurCapture: function onBlurCapture() {
        return setIsChildFocused(false);
      }
    });
  }
  var visible = keepOpenedOnChildFocus && isChildFocused || opened;
  return (0, _jsxRuntime.jsxs)(_StyledDiv2, {
    children: [childWithRef, visible && !!childrenRef.current && !disabled && (0, _jsxRuntime.jsxs)(_StyledOverlay, {
      opened: visible,
      role: "tooltip",
      noAutoFocus: true,
      animation: "opacity",
      position: _objectSpread({
        positionTarget: childrenRef.current
      }, overlayPosition),
      onMouseEnter: function onMouseEnter() {
        return clearTimeout(closeJob.current);
      },
      onMouseLeave: handleMouseLeave,
      $_css: styleMap[severity].bgColor,
      $_css2: styleMap[severity].color,
      children: [!!title && (0, _jsxRuntime.jsx)(_Typography.Typography, {
        variant: "body4",
        weight: "bold",
        children: title
      }), !!text && (0, _jsxRuntime.jsx)(_Typography.Typography, {
        variant: "body4",
        tagName: "span",
        children: text
      })]
    })]
  });
};
var styleMap = {
  "default": {
    bgColor: 'var(--gray90)',
    color: 'var(--white)'
  },
  success: {
    bgColor: 'var(--success-dark)',
    color: 'var(--success-dark-contrast-text)'
  },
  info: {
    bgColor: 'var(--info-dark)',
    color: 'var(--info-dark-contrast-text)'
  },
  warning: {
    bgColor: 'var(--warning-dark)',
    color: 'var(--warning-dark-contrast-text)'
  },
  error: {
    bgColor: 'var(--error-dark)',
    color: 'var(--error-dark-contrast-text)'
  }
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-pbrj94-0"
})(["display:inline-block;"]);
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-pbrj94-1"
})(["display:contents;"]);
var _StyledOverlay = /*#__PURE__*/(0, _styledComponents["default"])(_Overlay.Overlay).withConfig({
  componentId: "sc-pbrj94-2"
})(["background:", ";border-radius:var(--radius-2);box-shadow:var(--shadow-1);color:", ";cursor:default;max-width:18.5rem;padding:var(--gap-1-5) var(--gap-2);user-select:none;"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});