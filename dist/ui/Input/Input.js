"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _utils = require("../../lib/utils");
var _Adorment = require("./_Adorment");
var _variants = require("./variants");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["autofocus", "containerCss", "defaultValue", "disabled", "endAdornment", "id", "invalid", "size", "startAdornment", "variant"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Input = exports.Input = (0, _compat.forwardRef)(function (_ref, ref) {
  var _ref$autofocus = _ref.autofocus,
    autofocus = _ref$autofocus === void 0 ? false : _ref$autofocus,
    containerCss = _ref.containerCss,
    defaultValue = _ref.defaultValue,
    disabled = _ref.disabled,
    _ref$endAdornment = _ref.endAdornment,
    endAdornment = _ref$endAdornment === void 0 ? null : _ref$endAdornment,
    id = _ref.id,
    invalid = _ref.invalid,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    startAdornment = _ref.startAdornment,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var innerRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  (0, _hooks.useLayoutEffect)(function () {
    var _innerRef$current, _innerRef$current2;
    if (autofocus) {
      (0, _utils.afterNextRender)(function () {
        innerRef.current && innerRef.current.focus();
      });
    }
    var onFocus = function onFocus() {
      return setFocused(true);
    };
    var onBlur = function onBlur() {
      return setFocused(false);
    };
    (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.addEventListener('focus', onFocus);
    (_innerRef$current2 = innerRef.current) === null || _innerRef$current2 === void 0 || _innerRef$current2.addEventListener('blur', onBlur);
    return function () {
      var _innerRef$current3, _innerRef$current4;
      (_innerRef$current3 = innerRef.current) === null || _innerRef$current3 === void 0 || _innerRef$current3.removeEventListener('focus', onFocus);
      (_innerRef$current4 = innerRef.current) === null || _innerRef$current4 === void 0 || _innerRef$current4.removeEventListener('blur', onBlur);
    };
  }, []);
  var handleInputRef = function handleInputRef(e) {
    if (typeof ref === 'function') {
      ref(e);
    } else if (ref) {
      ref.current = e;
    }
    innerRef.current = e;
  };
  var _variants$variant = (0, _variants.variants)({
      disabled: disabled,
      size: size,
      focused: focused,
      invalid: invalid
    })[variant],
    borderRadius = _variants$variant.borderRadius,
    placeholderColor = _variants$variant.placeholderColor,
    background = _variants$variant.background,
    color = _variants$variant.color,
    border = _variants$variant.border;
  return (0, _jsxRuntime.jsxs)(_StyledDiv, {
    onMouseDown: function onMouseDown() {
      requestAnimationFrame(function () {
        var _innerRef$current5;
        (_innerRef$current5 = innerRef.current) === null || _innerRef$current5 === void 0 || _innerRef$current5.focus();
      });
    },
    $_css: background,
    $_css2: borderRadius,
    $_css3: size,
    $_css4: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    $_css5: containerCss,
    children: [startAdornment && (0, _jsxRuntime.jsx)(_Adorment.Input_Adorment, {
      disabled: disabled,
      position: "start",
      children: startAdornment
    }), (0, _jsxRuntime.jsx)(_StyledInput, _objectSpread(_objectSpread({
      id: id,
      disabled: disabled,
      ref: handleInputRef,
      "aria-invalid": invalid,
      autoComplete: "off",
      spellCheck: false,
      defaultValue: defaultValue
    }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
      $_css6: color,
      $_css7: size,
      $_css8: size,
      $_css9: placeholderColor
    })), endAdornment && (0, _jsxRuntime.jsx)(_Adorment.Input_Adorment, {
      disabled: disabled,
      position: "end",
      children: endAdornment
    }), (0, _jsxRuntime.jsx)(_StyledFieldset, {
      "aria-hidden": true,
      $_css10: border
    })]
  });
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1asb39x-0"
})(["align-items:center;background:", ";border-radius:", ";display:inline-flex;height:var(--input-height-", ");position:relative;width:100%;", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
});
var _StyledInput = /*#__PURE__*/(0, _styledComponents["default"])("input").withConfig({
  componentId: "sc-1asb39x-1"
})(["background:inherit;border-radius:inherit;border:0;color:", ";flex:1;font-size:var(--input-font-size-", ");height:100%;outline:0;padding:0 var(--input-padding-", ");width:100%;&::placeholder{color:", ";}&:disabled{cursor:not-allowed;}"], function (p) {
  return p.$_css6;
}, function (p) {
  return p.$_css7;
}, function (p) {
  return p.$_css8;
}, function (p) {
  return p.$_css9;
});
var _StyledFieldset = /*#__PURE__*/(0, _styledComponents["default"])("fieldset").withConfig({
  componentId: "sc-1asb39x-2"
})(["border-radius:inherit;border:", ";inset:0;margin:0;min-width:0%;overflow:hidden;pointer-events:none;position:absolute;"], function (p) {
  return p.$_css10;
});