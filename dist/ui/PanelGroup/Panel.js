"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children"];
var Panel = exports.Panel = function Panel(_ref) {
  var children = _ref.children,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _ref2 = restProps,
    _panelSize = _ref2._panelSize;
  return (0, _jsxRuntime.jsx)(_StyledDiv, {
    $_css: _panelSize || 0,
    children: children
  });
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-3wc3qa-0"
})(["display:flex;flex:", " 0;background:var(--panel-group-bg,var(--bg-minimal));"], function (p) {
  return p.$_css;
});