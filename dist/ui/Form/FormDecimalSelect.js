"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDecimalSelect = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _lib = require("../../lib");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _Grid = require("../Grid");
var _Select = require("../Select");
var _Fieldset = require("./Fieldset");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["fieldsetCss", "fullWidth", "helpText", "id", "invalid", "invalidText", "label", "maxFractionalNumber", "minFractionalNumber", "maxWholeNumber", "minWholeNumber", "onChange", "size", "value"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormDecimalSelect = exports.FormDecimalSelect = function FormDecimalSelect(props) {
  var fieldsetCss = props.fieldsetCss,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    helpText = props.helpText,
    id = props.id,
    invalid = props.invalid,
    invalidText = props.invalidText,
    label = props.label,
    _props$maxFractionalN = props.maxFractionalNumber,
    maxFractionalNumber = _props$maxFractionalN === void 0 ? 99 : _props$maxFractionalN,
    _props$minFractionalN = props.minFractionalNumber,
    minFractionalNumber = _props$minFractionalN === void 0 ? 0 : _props$minFractionalN,
    _props$maxWholeNumber = props.maxWholeNumber,
    maxWholeNumber = _props$maxWholeNumber === void 0 ? 99 : _props$maxWholeNumber,
    _props$minWholeNumber = props.minWholeNumber,
    minWholeNumber = _props$minWholeNumber === void 0 ? 0 : _props$minWholeNumber,
    onChange = props.onChange,
    size = props.size,
    value = props.value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var parsedValue = (0, _lib.toFloatOrNull)(value);
  var values = String(parsedValue === null ? '' : parsedValue).split('.');
  var wholeNumberOptions = Array.from({
    length: maxWholeNumber - minWholeNumber + 1
  }, function (_, i) {
    return {
      label: String(minWholeNumber + i),
      value: String(minWholeNumber + i)
    };
  });
  var fractionalNumberOptions = Array.from({
    length: maxFractionalNumber - minFractionalNumber + 1
  }, function (_, i) {
    return {
      label: (minFractionalNumber + i).toString().padStart(2, '0'),
      value: (minFractionalNumber + i).toString().padStart(2, '0')
    };
  });
  var handleOnChange = function handleOnChange(evt, value) {
    var modifiedTarget = {
      name: restProps.name,
      value: value
    };
    var modifiedEvt = Object.assign({}, evt, {
      currentTarget: modifiedTarget,
      target: modifiedTarget
    });
    onChange === null || onChange === void 0 || onChange(modifiedEvt);
  };
  return (0, _jsxRuntime.jsx)(_StyledFieldset, {
    fullWidth: fullWidth,
    helpText: helpText,
    invalidText: invalidText,
    label: label,
    size: size,
    $_css: fieldsetCss,
    $_css2: (0, _customCssPropertiesRule.customCSSPropertiesRule)(restProps),
    children: (0, _jsxRuntime.jsxs)(_StyledGrid, {
      id: id,
      cols: "1fr max-content 1fr",
      alignItems: "center",
      gap: 2,
      children: [(0, _jsxRuntime.jsx)(_StyledSelect, _objectSpread(_objectSpread({
        options: wholeNumberOptions,
        size: size,
        placeholder: '-',
        invalid: invalid
      }, values[0] && {
        defaultValue: values[0]
      }), {}, {
        onChange: function onChange(evt) {
          handleOnChange(evt, "".concat(evt.currentTarget.value, ".").concat(values[1]));
        }
      })), (0, _jsxRuntime.jsx)("span", {
        children: ":"
      }), (0, _jsxRuntime.jsx)(_StyledSelect2, _objectSpread(_objectSpread({
        options: fractionalNumberOptions,
        size: size,
        placeholder: '-',
        invalid: invalid
      }, values[1] && {
        defaultValue: values[1]
      }), {}, {
        onChange: function onChange(evt) {
          handleOnChange(evt, "".concat(values[0], ".").concat(evt.currentTarget.value));
        }
      }))]
    })
  });
};
var _StyledFieldset = /*#__PURE__*/(0, _styledComponents["default"])(_Fieldset.Fieldset).withConfig({
  componentId: "sc-hvq49h-0"
})(["", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledGrid = /*#__PURE__*/(0, _styledComponents["default"])(_Grid.Grid).withConfig({
  componentId: "sc-hvq49h-1"
})(["width:100%;"]);
var _StyledSelect = /*#__PURE__*/(0, _styledComponents["default"])(_Select.Select).withConfig({
  componentId: "sc-hvq49h-2"
})(["width:100%;min-width:0;"]);
var _StyledSelect2 = /*#__PURE__*/(0, _styledComponents["default"])(_Select.Select).withConfig({
  componentId: "sc-hvq49h-3"
})(["width:100%;min-width:0;"]);