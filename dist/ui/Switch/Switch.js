"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultChecked", "disabled", "label", "onChange", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Switch = exports.Switch = (0, _compat.forwardRef)(function (_ref, ref) {
  var _ref$defaultChecked = _ref.defaultChecked,
    defaultChecked = _ref$defaultChecked === void 0 ? false : _ref$defaultChecked,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    label = _ref.label,
    _onChange = _ref.onChange,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _compat.useState)(defaultChecked || false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var content = (0, _jsxRuntime.jsxs)(StyledRoot, _objectSpread(_objectSpread({
    $disabled: disabled,
    $size: size,
    $css: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props)
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    children: [(0, _jsxRuntime.jsx)(StyledInput, {
      ref: ref,
      type: "checkbox",
      defaultChecked: defaultChecked,
      disabled: disabled,
      onChange: function onChange(evt) {
        var _checked = evt.currentTarget.checked;
        setChecked(_checked);
        _onChange === null || _onChange === void 0 || _onChange(evt);
      }
    }), (0, _jsxRuntime.jsx)(StyledCircle, {
      $checked: checked,
      $size: size,
      children: (0, _jsxRuntime.jsx)(StyledCircleInner, {
        $size: size
      })
    }), (0, _jsxRuntime.jsx)(StyledBackground, {
      $checked: checked,
      $disabled: disabled
    })]
  }));
  if (label) {
    return (0, _jsxRuntime.jsxs)(_StyledLabel, {
      $_css: disabled ? '' : 'pointer',
      children: [content, (0, _jsxRuntime.jsx)(_StyledSpan, {
        $_css2: disabled ? 'var(--fg-disabled)' : 'inherit',
        children: label
      })]
    });
  } else {
    return content;
  }
});
var sizesMap = {
  sm: {
    rootHeight: '1.875rem',
    rootWidth: '2.5rem',
    circlePadding: '0.6875rem',
    circleSize: '0.5rem',
    circleCheckedTransform: 'translateX(0.625rem)'
  },
  md: {
    rootHeight: '2.125rem',
    rootWidth: '3rem',
    circlePadding: '0.6875rem',
    circleSize: '0.75rem',
    circleCheckedTransform: 'translateX(0.875rem)'
  }
};
var StyledRoot = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-f36kfn-0"
})(["cursor:", ";display:inline-flex;flex-shrink:0;height:", ";margin-left:-0.5rem;overflow:hidden;padding:0.5rem;position:relative;vertical-align:middle;width:", ";z-index:0;", ""], function (p) {
  return p.$disabled ? 'default' : 'pointer';
}, function (p) {
  return sizesMap[p.$size].rootHeight;
}, function (p) {
  return sizesMap[p.$size].rootWidth;
}, function (p) {
  return p.$css;
});
var StyledCircle = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-f36kfn-1"
})(["-webkit-box-align:center;-webkit-box-pack:center;-webkit-tap-highlight-color:transparent;align-items:center;appearance:none;background-color:transparent;border:0;border-radius:50%;box-sizing:border-box;color:rgb(255,255,255);display:inline-flex;justify-content:center;left:0;margin:0;outline:0;padding:", ";pointer-events:none;position:absolute;text-decoration:none;top:0;transform:", ";transition:transform 200ms cubic-bezier(0.4,0,0.2,1) 0ms;user-select:none;vertical-align:middle;z-index:1;"], function (p) {
  return sizesMap[p.$size].circlePadding;
}, function (p) {
  return p.$checked ? sizesMap[p.$size].circleCheckedTransform : '';
});
var StyledCircleInner = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-f36kfn-2"
})(["background-color:var(--white);border-radius:50%;height:", ";width:", ";"], function (p) {
  return sizesMap[p.$size].circleSize;
}, function (p) {
  return sizesMap[p.$size].circleSize;
});
var StyledBackground = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-f36kfn-3"
})(["background:", ";border-radius:var(--radius-3);height:100%;transition:background 150ms cubic-bezier(0.4,0,0.2,1) 0ms;width:100%;z-index:-1;"], function (p) {
  return p.$checked && !p.$disabled ? 'var(--primary50)' : 'var(--bg-muted)';
});
var StyledInput = /*#__PURE__*/_styledComponents["default"].input.withConfig({
  componentId: "sc-f36kfn-4"
})(["cursor:inherit;inset:0;margin:0;opacity:0;padding:0;position:absolute;z-index:1;"]);
var _StyledLabel = /*#__PURE__*/(0, _styledComponents["default"])("label").withConfig({
  componentId: "sc-f36kfn-5"
})(["align-items:center;cursor:", ";display:inline-flex;gap:var(--gap-1);"], function (p) {
  return p.$_css;
});
var _StyledSpan = /*#__PURE__*/(0, _styledComponents["default"])("span").withConfig({
  componentId: "sc-f36kfn-6"
})(["color:", ";"], function (p) {
  return p.$_css2;
});