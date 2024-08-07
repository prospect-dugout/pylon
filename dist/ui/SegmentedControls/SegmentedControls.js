"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedControls = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultValue", "items", "onChange", "segmentWidth", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SegmentedControls = exports.SegmentedControls = function SegmentedControls(_ref) {
  var _items$0$value, _items$;
  var defaultValue = _ref.defaultValue,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    onChange = _ref.onChange,
    _ref$segmentWidth = _ref.segmentWidth,
    segmentWidth = _ref$segmentWidth === void 0 ? 60 : _ref$segmentWidth,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(defaultValue ? defaultValue : (_items$0$value = (_items$ = items[0]) === null || _items$ === void 0 ? void 0 : _items$.value) !== null && _items$0$value !== void 0 ? _items$0$value : ''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedValue = _useState2[0],
    setSelectedValue = _useState2[1];
  var selectedIndex = items.findIndex(function (item) {
    return item.value === selectedValue;
  });
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: size,
    $_css2: size,
    $_css3: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: [items.map(function (item) {
      return (0, _jsxRuntime.jsx)(_StyledTypography, {
        variant: "body4",
        weight: "bold",
        onClick: function onClick() {
          setSelectedValue(item.value);
          onChange === null || onChange === void 0 || onChange(item);
        },
        $_css4: item.value === selectedValue ? 'var(--fg-default)' : 'var(--fg-muted)',
        $_css5: segmentWidth,
        children: item.render ? item.render() : item.title
      }, item.value);
    }), (0, _jsxRuntime.jsx)(_StyledDiv2, {
      $_css6: selectedIndex * segmentWidth,
      $_css7: segmentWidth,
      children: (0, _jsxRuntime.jsx)(_StyledDiv3, {
        $_css8: size
      })
    })]
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-8qy0qy-0"
})(["align-items:center;border-radius:var(--segmented-controls-radius-", ");border:0.0625rem solid var(--border-muted);cursor:pointer;display:inline-flex;height:var(--segmented-controls-height-", ");position:relative;user-select:none;", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
}, function (p) {
  return p.$_css3;
});
var _StyledTypography = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-8qy0qy-1"
})(["align-items:center;color:", ";display:flex;height:100%;justify-content:center;position:relative;text-align:center;white-space:nowrap;width:", "px;z-index:1;"], function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-8qy0qy-2"
})(["bottom:0;left:0;padding:0.1875rem;pointer-events:none;position:absolute;top:0;transform:translateX(", "px);transition:transform 0.2s cubic-bezier(0.22,1,0.36,1);width:", "px;"], function (p) {
  return p.$_css6;
}, function (p) {
  return p.$_css7;
});
var _StyledDiv3 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-8qy0qy-3"
})(["background:var(--bg-minimal);border-radius:var(--segmented-controls-radius-", ");height:100%;width:100%;"], function (p) {
  return p.$_css8;
});