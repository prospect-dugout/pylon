"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _Overlay = require("../Overlay");
var _jsxRuntime = require("preact/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DropdownMenu = exports.DropdownMenu = function DropdownMenu(_ref) {
  var children = _ref.children,
    _ref$closeTargets = _ref.closeTargets,
    closeTargets = _ref$closeTargets === void 0 ? ['button'] : _ref$closeTargets,
    _ref$openOnHover = _ref.openOnHover,
    openOnHover = _ref$openOnHover === void 0 ? false : _ref$openOnHover,
    _ref$overlayAnimation = _ref.overlayAnimation,
    overlayAnimation = _ref$overlayAnimation === void 0 ? 'move-down' : _ref$overlayAnimation,
    overlayPosition = _ref.overlayPosition,
    triggerCss = _ref.triggerCss;
  var closeTimeout = (0, _hooks.useRef)();
  var triggerRef = (0, _hooks.useRef)();
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var handleTriggerMouseLeave = function handleTriggerMouseLeave() {
    if (openOnHover) {
      closeTimeout.current = window.setTimeout(function () {
        setOpened(false);
      }, 100);
    }
  };
  var handleTriggerMouseEnter = function handleTriggerMouseEnter() {
    if (openOnHover) {
      setOpened(true);
    }
  };
  var handleOverlayMouseEnter = function handleOverlayMouseEnter() {
    if (openOnHover) {
      window.clearTimeout(closeTimeout.current);
    }
  };
  var handleOverlayMouseLeave = function handleOverlayMouseLeave() {
    if (openOnHover) {
      closeTimeout.current = window.setTimeout(function () {
        setOpened(false);
      }, 100);
    }
  };
  var handleTriggerMouseDown = function handleTriggerMouseDown(evt) {
    if (opened) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };
  var handleTriggerClick = function handleTriggerClick(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    setOpened(!opened);
  };
  var handleOverlayClick = function handleOverlayClick(evt) {
    if (closeTargets.length) {
      var path = evt.composedPath ? evt.composedPath() : evt.path;
      var _loop = function _loop() {
        var node = path[idx];
        if (closeTargets.some(function (target) {
          var _node$matches;
          return (_node$matches = node.matches) === null || _node$matches === void 0 ? void 0 : _node$matches.call(node, target);
        })) {
          setOpened(false);
        }
      };
      for (var idx = 0; idx < path.length; idx++) {
        _loop();
      }
    }
  };
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_StyledDiv, {
      ref: triggerRef,
      onMouseEnter: handleTriggerMouseEnter,
      onMouseLeave: handleTriggerMouseLeave,
      onMouseDown: handleTriggerMouseDown,
      onClick: handleTriggerClick,
      $_css: triggerCss,
      children: children[0]
    }), (0, _jsxRuntime.jsx)(_StyledOverlay, _objectSpread(_objectSpread({
      cancelOnEscKey: true,
      cancelOnOutsideClick: true,
      opened: opened,
      setOpened: setOpened,
      position: _objectSpread(_objectSpread({}, overlayPosition), {}, {
        positionTarget: triggerRef.current
      })
    }, overlayAnimation ? {
      animation: overlayAnimation
    } : {}), {}, {
      children: (0, _jsxRuntime.jsx)(_StyledDiv2, {
        onMouseEnter: handleOverlayMouseEnter,
        onMouseLeave: handleOverlayMouseLeave,
        onClick: handleOverlayClick,
        children: children.slice(1, children.length)
      })
    }))]
  });
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-bzag36-0"
})(["display:inline-flex;", ""], function (p) {
  return p.$_css;
});
var _StyledOverlay = /*#__PURE__*/(0, _styledComponents["default"])(_Overlay.Overlay).withConfig({
  componentId: "sc-bzag36-1"
})(["", ""], _Overlay.dropdownOverlayCss);
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-bzag36-2"
})(["display:flex;flex-direction:column;flex:1;"]);