"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPickerInput = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _lodash = require("lodash");
var _reactColorful = require("react-colorful");
var _Overlay = require("../Overlay");
var _jsxRuntime = require("preact/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorPickerInput = exports.ColorPickerInput = function ColorPickerInput(_ref) {
  var _ref$defaultColor = _ref.defaultColor,
    defaultColor = _ref$defaultColor === void 0 ? '#aabbcc' : _ref$defaultColor,
    onChange = _ref.onChange,
    overlayPosition = _ref.overlayPosition;
  var buttonRef = (0, _hooks.useRef)();
  var _useState = (0, _hooks.useState)(defaultColor),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    color = _useState2[0],
    setColor = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    opened = _useState4[0],
    setOpened = _useState4[1];
  var throttledOnChange = (0, _hooks.useRef)((0, _lodash.throttle)(onChange || function () {}, 100));
  var handleChange = function handleChange(hex) {
    setColor(hex);
    throttledOnChange.current(hex);
  };
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_StyledButton, {
      ref: buttonRef,
      type: "button",
      onClick: function onClick() {
        return setOpened(true);
      },
      $_css: color
    }), (0, _jsxRuntime.jsxs)(_StyledOverlay, {
      opened: opened,
      setOpened: setOpened,
      animation: "move-down",
      cancelOnEscKey: true,
      cancelOnOutsideClick: true,
      withBackdrop: true,
      backdropColor: "transparent",
      position: _objectSpread(_objectSpread({}, overlayPosition ? overlayPosition : {}), {}, {
        horizontalAlign: 'right',
        horizontalOffset: 6,
        noHorizontalOverlap: true,
        noVerticalOverlap: false,
        positionTarget: buttonRef.current,
        verticalAlign: 'bottom',
        verticalOffset: -10
      }),
      children: [(0, _jsxRuntime.jsx)(_reactColorful.HexColorPicker, {
        color: defaultColor,
        onChange: handleChange
      }), (0, _jsxRuntime.jsxs)(_StyledDiv, {
        children: [(0, _jsxRuntime.jsx)(_StyledDiv2, {
          children: "Hex"
        }), (0, _jsxRuntime.jsx)(_StyledHexColorInput, {
          color: color,
          onChange: handleChange
        })]
      })]
    })]
  });
};
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])("button").withConfig({
  componentId: "sc-ygpls3-0"
})(["background:", ";border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.1);cursor:pointer;height:2.125rem;padding:0;width:2.125rem;&:focus-visible{box-shadow:inset 0 0 0 2px var(--white);outline:2px solid var(--input-outline-color);}"], function (p) {
  return p.$_css;
});
var _StyledOverlay = /*#__PURE__*/(0, _styledComponents["default"])(_Overlay.Overlay).withConfig({
  componentId: "sc-ygpls3-1"
})(["backdrop-filter:blur(1.875rem);background:var(--bg-default-blurry);border-radius:var(--radius-4);border:1px solid var(--border-subtle);box-shadow:0 10px 25px rgb(0 0 0 / 10%);display:flex;flex-direction:column;gap:0.625rem;padding:0.625rem;"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-ygpls3-2"
})(["align-items:center;display:grid;font-size:0.875rem;gap:0.625rem;grid-template-columns:max-content 1fr;width:12.5rem;"]);
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-ygpls3-3"
})(["padding-left:0.25rem;"]);
var _StyledHexColorInput = /*#__PURE__*/(0, _styledComponents["default"])(_reactColorful.HexColorInput).withConfig({
  componentId: "sc-ygpls3-4"
})(["background:var(--white);border:1px solid var(--border-subtle);border-radius:0.375rem;font-family:inherit;padding:0.375rem;text-transform:uppercase;width:100%;&:focus{outline-color:var(--primary50);}&::placeholder{color:var(--fg-muted);}"]);