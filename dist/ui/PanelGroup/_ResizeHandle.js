"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelGroup_ResizeHandle = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _lib = require("../../lib");
var _jsxRuntime = require("preact/jsx-runtime");
var PanelGroup_ResizeHandle = exports.PanelGroup_ResizeHandle = function PanelGroup_ResizeHandle(_ref) {
  var direction = _ref.direction,
    _onTrack = _ref.onTrack,
    _onTrackEnd = _ref.onTrackEnd,
    ondblclick = _ref.ondblclick;
  var hoverDelayJob = (0, _hooks.useRef)(null);
  var targetRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    dragging = _useState2[0],
    setDragging = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    hovered = _useState4[0],
    setHovered = _useState4[1];
  var clearHoverDelay = function clearHoverDelay() {
    if (hoverDelayJob.current) {
      window.clearTimeout(hoverDelayJob.current);
      hoverDelayJob.current = null;
    }
  };
  var handleMouseEnter = function handleMouseEnter() {
    clearHoverDelay();
    hoverDelayJob.current = window.setTimeout(function () {
      setHovered(true);
    }, 250);
  };
  var handleMouseLeave = function handleMouseLeave() {
    clearHoverDelay();
    setHovered(false);
  };
  (0, _hooks.useEffect)(function () {
    var disposal = null;
    if (targetRef.current) {
      disposal = new _lib.TrackGesture({
        onTrack: function onTrack(params) {
          _onTrack(params);
          setDragging(true);
        },
        onTrackEnd: function onTrackEnd() {
          _onTrackEnd();
          setDragging(false);
        },
        orientation: direction === 'row' ? 'horizontal' : 'vertical',
        target: targetRef.current
      }).disposal;
    }
    return function () {
      var _disposal;
      (_disposal = disposal) === null || _disposal === void 0 || _disposal();
      clearHoverDelay();
      setDragging(false);
    };
  }, [direction, _onTrack, _onTrackEnd]);
  return (0, _jsxRuntime.jsx)(_StyledDiv, {
    $_css: direction === 'row' ? '100%' : '1px',
    $_css2: direction === 'column' ? '100%' : '1px',
    children: (0, _jsxRuntime.jsx)(_StyledDiv2, {
      ref: targetRef,
      onDblClick: ondblclick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      $_css3: direction === 'column' ? 'ns-resize' : 'ew-resize',
      $_css4: direction === 'row' ? "\n            height: 100%;\n            left: 50%;\n            top: 0;\n            transform: translateX(-50%);\n            width: 0.5rem;\n          " : "\n            height: 0.5rem;\n            left: 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 100%;\n          ",
      $_css5: dragging || hovered ? 1 : 0,
      $_css6: direction === 'row' ? "\n                height: 100%;\n                left: 0.125rem;\n                top: 0;\n                width: 0.25rem;\n              " : "\n                height: 0.25rem;\n                left: 0;\n                top: 0.125rem;\n                width: 100%;\n              "
    })
  });
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1cz25xm-0"
})(["background:var(--border-primary);height:", ";position:relative;width:", ";"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1cz25xm-1"
})(["cursor:", ";position:absolute;z-index:9999;", " &:after{background:var(--border-subtle);content:'';opacity:", ";position:absolute;transition:opacity 0.1s linear;", "}"], function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
}, function (p) {
  return p.$_css6;
});