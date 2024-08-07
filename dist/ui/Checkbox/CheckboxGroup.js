"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _Button = require("../Button");
var _Checkbox = require("./Checkbox");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["options", "defaultChecked", "onChange", "maxOptions"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CheckboxGroup = exports.CheckboxGroup = function CheckboxGroup(_ref) {
  var options = _ref.options,
    _ref$defaultChecked = _ref.defaultChecked,
    defaultChecked = _ref$defaultChecked === void 0 ? [] : _ref$defaultChecked,
    onChange = _ref.onChange,
    _ref$maxOptions = _ref.maxOptions,
    maxOptions = _ref$maxOptions === void 0 ? Infinity : _ref$maxOptions,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    displayAll = _useState2[0],
    setDisplayAll = _useState2[1];
  var _useState3 = (0, _hooks.useState)(defaultChecked),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    state = _useState4[0],
    setState = _useState4[1];
  var handleCheckboxChange = function handleCheckboxChange(evt) {
    var value = evt.target.value;
    var newState = state.includes(value) ? state.filter(function (v) {
      return v !== value;
    }) : [].concat((0, _toConsumableArray2["default"])(state), [value]);
    setState(newState);
    onChange === null || onChange === void 0 || onChange(newState);
  };
  var filteredOptions = displayAll ? options : options.slice(0, maxOptions);
  return (0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [filteredOptions.map(function (option) {
      return (0, _jsxRuntime.jsx)("div", {
        children: (0, _jsxRuntime.jsx)(_Checkbox.Checkbox, {
          value: option.value,
          label: option.label,
          defaultChecked: defaultChecked.includes(option.value) || state.includes(option.value),
          onChange: handleCheckboxChange
        })
      }, option.value);
    }), options.length > maxOptions && (0, _jsxRuntime.jsxs)(_StyledButton, {
      variant: "unstyled",
      onClick: function onClick() {
        return setDisplayAll(!displayAll);
      },
      children: ["View ", displayAll ? 'less' : 'more']
    })]
  }));
};
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])(_Button.Button).withConfig({
  componentId: "sc-1ye6tvj-0"
})(["color:var(--primary50);&:hover{color:var(--primary80);}"]);