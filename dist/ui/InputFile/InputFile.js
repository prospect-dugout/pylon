"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFile = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
var _Button = require("../Button");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["buttonCss", "buttonProps", "renderCustomButton", "multiple", "onChange", "placeholder", "showSelectedFileNames"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputFile = exports.InputFile = (0, _compat.forwardRef)(function (_ref, _ref2) {
  var buttonCss = _ref.buttonCss,
    buttonProps = _ref.buttonProps,
    renderCustomButton = _ref.renderCustomButton,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    _ref$showSelectedFile = _ref.showSelectedFileNames,
    showSelectedFileNames = _ref$showSelectedFile === void 0 ? true : _ref$showSelectedFile,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedFiles = _useState2[0],
    setSelectedFiles = _useState2[1];
  var inputRef = (0, _hooks.useRef)(null);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)("input", _objectSpread({
      ref: function ref(e) {
        if (typeof _ref2 === 'function') {
          _ref2(e);
        } else if (_ref2) {
          _ref2.current = e;
        }
        inputRef.current = e;
      },
      tabIndex: -1,
      multiple: multiple,
      style: {
        display: 'none'
      },
      onChange: function onChange(evt) {
        evt.stopPropagation();
        if (typeof _onChange === 'function') {
          _onChange(evt);
        }
        setSelectedFiles(evt.target.files);
      },
      type: "file"
    }, props)), renderCustomButton ? renderCustomButton({
      onClick: function onClick() {
        var _inputRef$current$cli;
        return (_inputRef$current$cli = inputRef.current.click()) !== null && _inputRef$current$cli !== void 0 ? _inputRef$current$cli : null;
      }
    }) : (0, _jsxRuntime.jsx)(_StyledButton, _objectSpread(_objectSpread({
      variant: "primary",
      buttonSize: "sm",
      onClick: function onClick() {
        var _inputRef$current$cli2;
        return (_inputRef$current$cli2 = inputRef.current.click()) !== null && _inputRef$current$cli2 !== void 0 ? _inputRef$current$cli2 : null;
      }
    }, buttonProps), {}, {
      $_css: buttonCss,
      children: selectedFiles.length > 0 && showSelectedFileNames ? Array.from(selectedFiles).map(function (file) {
        return file.name;
      }).join(', ') : placeholder || (multiple ? 'Select files' : 'Select file')
    }))]
  });
});
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])(_Button.Button).withConfig({
  componentId: "sc-l19fj4-0"
})(["display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ""], function (p) {
  return p.$_css;
});