"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPlayer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
var _IconButton = require("../IconButton");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["containerCss", "containerProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var VideoPlayer = exports.VideoPlayer = (0, _compat.forwardRef)(function (_ref, _ref2) {
  var containerCss = _ref.containerCss,
    containerProps = _ref.containerProps,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var defaultMuted = typeof restProps.muted === 'boolean' ? restProps.muted : false;
  var innerVideoRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    paused = _useState2[0],
    setPaused = _useState2[1];
  var _useState3 = (0, _hooks.useState)(defaultMuted),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isMuted = _useState4[0],
    setMuted = _useState4[1];
  var onContainerClick = function onContainerClick(evt) {
    evt.stopPropagation();
    setPaused(function (prev) {
      if (!innerVideoRef.current) return prev;
      if (!prev) {
        innerVideoRef.current.pause();
      } else {
        innerVideoRef.current.play();
      }
      return !prev;
    });
  };
  var onClickVolumeBtn = function onClickVolumeBtn(evt) {
    evt.stopPropagation();
    if (!innerVideoRef.current) return;
    var muted = !innerVideoRef.current.muted;
    innerVideoRef.current.muted = muted;
    setMuted(muted);
  };
  var videoProps = _objectSpread({
    autoPlay: true,
    loop: true,
    muted: defaultMuted,
    controls: false
  }, restProps);
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({
    role: "button",
    onClick: onContainerClick
  }, containerProps), {}, {
    $_css: containerCss,
    children: [(0, _jsxRuntime.jsx)(StyledVideo, _objectSpread({
      ref: function ref(el) {
        if (typeof _ref2 === 'function') {
          _ref2(el);
        } else if (_ref2) {
          _ref2.current = el;
        }
        innerVideoRef.current = el;
      }
    }, videoProps)), (0, _jsxRuntime.jsx)(StyledVolumeIconButton, {
      variant: "unstyled",
      icon: isMuted ? 'volume-mute' : 'volume',
      size: 20,
      onClick: onClickVolumeBtn
    }), paused && (0, _jsxRuntime.jsx)(StyledPlayIconButton, {
      variant: "unstyled",
      icon: "play",
      iconSize: 78
    })]
  }));
});
var StyledVideo = /*#__PURE__*/_styledComponents["default"].video.withConfig({
  componentId: "sc-3l5d2a-0"
})(["max-height:100%;max-width:100%;"]);
var StyledPlayIconButton = /*#__PURE__*/(0, _styledComponents["default"])(_IconButton.IconButton).withConfig({
  componentId: "sc-3l5d2a-1"
})(["color:var(--white);left:50%;max-height:100px;opacity:0.8;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:2;"]);
var StyledVolumeIconButton = /*#__PURE__*/(0, _styledComponents["default"])(_IconButton.IconButton).withConfig({
  componentId: "sc-3l5d2a-2"
})(["color:var(--white);position:absolute;bottom:20px;right:20px;z-index:2;padding:var(--gap-2);background:var(--black);border-radius:50%;"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-3l5d2a-3"
})(["cursor:pointer;position:relative;", ""], function (p) {
  return p.$_css;
});