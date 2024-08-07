"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputVideo_InputArea = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = require("react");
var _InputFile = require("../InputFile");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var ACCEPT_EXT = 'video/mp4,video/webm,video/quicktime';
var InputVideo_InputArea = exports.InputVideo_InputArea = function InputVideo_InputArea(_ref) {
  var onChange = _ref.onChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    dragOver = _useState2[0],
    setDragOver = _useState2[1];
  var handleDragOver = function handleDragOver(evt) {
    evt.preventDefault();
    setDragOver(true);
  };
  var handleDragLeave = function handleDragLeave(evt) {
    evt.preventDefault();
    setDragOver(false);
  };
  var handleDrop = function handleDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    setDragOver(false);
    if (evt.dataTransfer && evt.dataTransfer.files.length > 0) {
      var _file = evt.dataTransfer.files[0];
      onChange === null || onChange === void 0 || onChange(_file);
      evt.dataTransfer.clearData();
    }
  };
  var handleInputChange = function handleInputChange(evt) {
    var target = evt.target;
    if (target.files && target.files[0]) {
      onChange === null || onChange === void 0 || onChange(target.files[0]);
    }
  };
  return (0, _jsxRuntime.jsxs)(_StyledDiv, {
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    $_css: dragOver ? 'var(--border-subtle)' : 'var(--border-muted)',
    children: [(0, _jsxRuntime.jsx)(_Typography.Typography, {
      weight: "bold",
      children: "Drag a video here"
    }), (0, _jsxRuntime.jsx)(_Typography.Typography, {
      variant: "body3",
      "css-color": "var(--fg-muted)",
      "css-mt": 1,
      "css-mb": 6,
      children: "MP4, WebM or MOV."
    }), (0, _jsxRuntime.jsx)(_InputFile.InputFile, {
      accept: ACCEPT_EXT,
      onChange: handleInputChange,
      placeholder: "Select file",
      buttonProps: {
        buttonSize: 'md'
      }
    })]
  });
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1reg14z-0"
})(["border-radius:var(--radius-2);border:2px dashed ", ";padding:var(--gap-14) var(--gap-4);text-align:center;transition:border-color 0.3s;width:100%;"], function (p) {
  return p.$_css;
});