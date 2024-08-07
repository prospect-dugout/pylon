"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRange = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _hooks = require("preact/hooks");
var _Grid = require("../Grid");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultValue", "deferOnChange", "max", "min", "minLength", "onChange", "step"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputRange = exports.InputRange = function InputRange(_ref) {
  var defaultValue = _ref.defaultValue,
    _ref$deferOnChange = _ref.deferOnChange,
    deferOnChange = _ref$deferOnChange === void 0 ? false : _ref$deferOnChange,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    minLength = _ref.minLength,
    onChange = _ref.onChange,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var adjustedMin = normalizeStepValue(min, step);
  var adjustedMax = normalizeStepValue(max, step);
  var draggingRef = (0, _hooks.useRef)(false);
  var _useState = (0, _hooks.useState)([defaultValue ? defaultValue[0] : adjustedMin, defaultValue ? defaultValue[1] : Math.max(adjustedMax, adjustedMin)]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    range = _useState2[0],
    setRange = _useState2[1];
  var handleInputChange = function handleInputChange(index, evt) {
    evt.preventDefault();
    var adjustedMinLength = typeof minLength === 'number' ? minLength : step;
    var value = parseFloat(evt.target.value);
    value = index === 0 ? Math.min(value, range[1] - adjustedMinLength) : Math.max(value, range[0] + adjustedMinLength);
    setRange(function (prev) {
      var updatedRange = (0, _toConsumableArray2["default"])(prev);
      updatedRange[index] = normalizeStepValue(value, step);
      return updatedRange;
    });
    if (deferOnChange && !draggingRef.current || !deferOnChange) {
      onChange === null || onChange === void 0 || onChange(range);
    }
  };
  var handleInputMouseDown = function handleInputMouseDown() {
    draggingRef.current = true;
  };
  var handleInputMouseUp = function handleInputMouseUp() {
    draggingRef.current = false;
    if (deferOnChange) {
      onChange === null || onChange === void 0 || onChange(range);
    }
  };
  var percentageMin = (range[0] - min) / (adjustedMax - adjustedMin) * 100;
  var percentageMax = (range[1] - min) / (adjustedMax - adjustedMin) * 100;
  return (0, _jsxRuntime.jsxs)(_StyledGrid, {
    cols: "2rem 1fr 2rem",
    alignItems: "center",
    gap: 3,
    children: [(0, _jsxRuntime.jsx)(_Typography.Typography, {
      variant: "body4",
      "css-color": "var(--fg-muted)",
      "css-textAlign": "left",
      "css-mt": 1,
      children: parseDisplayValue(range[0], step)
    }), (0, _jsxRuntime.jsxs)(_StyledDiv, {
      children: [(0, _jsxRuntime.jsx)(StyledTrackBackground, {}), (0, _jsxRuntime.jsx)(StyledTrackSelectedBackground, {
        style: {
          left: "".concat(percentageMin, "%"),
          right: "".concat(100 - percentageMax, "%")
        }
      }), (0, _jsxRuntime.jsx)(StyledInput, _objectSpread({
        type: "range",
        min: adjustedMin,
        max: adjustedMax,
        value: range[0],
        step: step,
        onInput: function onInput(evt) {
          return handleInputChange(0, evt);
        },
        onMouseDown: handleInputMouseDown,
        onMouseUp: handleInputMouseUp
      }, props)), (0, _jsxRuntime.jsx)(StyledInput, _objectSpread({
        type: "range",
        min: adjustedMin,
        max: adjustedMax,
        value: range[1],
        step: step,
        onInput: function onInput(evt) {
          return handleInputChange(1, evt);
        },
        onMouseDown: handleInputMouseDown,
        onMouseUp: handleInputMouseUp
      }, props))]
    }), (0, _jsxRuntime.jsx)(_Typography.Typography, {
      variant: "body4",
      "css-color": "var(--fg-muted)",
      "css-mt": 1,
      "css-textAlign": "right",
      children: parseDisplayValue(range[1], step)
    })]
  });
};
var normalizeStepValue = function normalizeStepValue(value, step) {
  var roundedValue = Math.round(value / step) * step;
  return roundedValue;
};
var parseDisplayValue = function parseDisplayValue(value, step) {
  if (step === 1) {
    return value.toFixed(0);
  }
  if (step === 0.1) {
    return value.toFixed(1);
  }
  if (step === 0.01) {
    return value.toFixed(2);
  }
  return value.toFixed(2);
};
var StyledTrackBackground = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-12qq03o-0"
})(["background:var(--border-muted);height:0.25rem;position:absolute;top:50%;width:100%;z-index:1;"]);
var StyledTrackSelectedBackground = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-12qq03o-1"
})(["background:var(--primary50);height:0.25rem;position:absolute;top:50%;z-index:1;"]);
var thumbStyles = /*#__PURE__*/(0, _styledComponents.css)(["-webkit-appearance:none;-moz-appearance:none;background:var(--primary50);border-radius:var(--radius-round);cursor:pointer;height:1.25rem;position:relative;transition:box-shadow 150ms cubic-bezier(0.4,0,0.2,1) 0ms;width:1.25rem;z-index:2;"]);
var StyledInput = /*#__PURE__*/_styledComponents["default"].input.withConfig({
  componentId: "sc-12qq03o-2"
})(["-webkit-appearance:none;-moz-appearance:none;background:transparent;height:0.25rem;position:absolute;top:0;width:100%;&::-moz-range-thumb{", "}&::-webkit-slider-thumb{", "}&:focus{outline:none;}"], thumbStyles, thumbStyles);
var _StyledGrid = /*#__PURE__*/(0, _styledComponents["default"])(_Grid.Grid).withConfig({
  componentId: "sc-12qq03o-3"
})(["user-select:none;width:100%;"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-12qq03o-4"
})(["position:relative;"]);