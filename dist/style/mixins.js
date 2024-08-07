"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollBarMixin = exports.overlayDropdownMixin = exports.openedScaleMixin = exports.hoverScaleMixin = void 0;
var _styledComponents = require("styled-components");
var openedScaleMixin = exports.openedScaleMixin = function openedScaleMixin(_ref) {
  var opened = _ref.opened,
    zoom = _ref.zoom;
  return (0, _styledComponents.css)(["transform:scale(1) translateZ(0);transition:transform 0.2s ease;", ""], opened && "\n    --webkit-font-smoothing: subpixel-antialiased;\n    backfaceVisibility: hidden;\n    position: relative;\n    transform: scale(".concat(zoom || 1.025, ") translateZ(0);\n    zIndex: 1;\n  "));
};
var hoverScaleMixin = exports.hoverScaleMixin = function hoverScaleMixin() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$zoom = _ref2.zoom,
    zoom = _ref2$zoom === void 0 ? 1.025 : _ref2$zoom;
  return (0, _styledComponents.css)(["transform:scale(1) translateZ(0);transition:transform 0.5s cubic-bezier(0.16,1,0.3,1) 0s;&:hover{--webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;position:relative;transform:scale(", ") translateZ(0);z-index:1;}"], zoom || 1.025);
};
var overlayDropdownMixin = exports.overlayDropdownMixin = /*#__PURE__*/(0, _styledComponents.css)(["background:var(--bg-overlay);border-radius:var(--radius-3);box-shadow:0 1.75rem 4.5rem rgb(0 0 0 / 12%);min-width:15rem;padding:0.625rem;"]);
var scrollBarMixin = exports.scrollBarMixin = /*#__PURE__*/(0, _styledComponents.css)(["&::-webkit-scrollbar{width:8px;height:8px;}&::-webkit-scrollbar-track{background-color:var(--scroll-track-color);}&::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border-radius:1rem;}&::-webkit-scrollbar-button{display:none;}:root[data-theme='dark']{}"]);