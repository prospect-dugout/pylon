"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _Icon = require("../Icon");
var _IconButton = require("../IconButton");
var _Overlay = require("../Overlay");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["severity", "anchorOrigin", "autoHideDuration", "children", "customImage", "noCloseButton", "noIcon", "opened", "overlayProps", "setOpened"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styleMap = {
  success: {
    bgColor: 'var(--success-dark)',
    color: 'var(--success-dark-contrast-text)',
    iconName: 'check-circle-outline'
  },
  info: {
    bgColor: 'var(--info-dark)',
    color: 'var(--info-dark-contrast-text)',
    iconName: 'info-circle-outline'
  },
  warning: {
    bgColor: 'var(--warning-dark)',
    color: 'var(--warning-dark-contrast-text)',
    iconName: 'alert-outline'
  },
  error: {
    bgColor: 'var(--error-dark)',
    color: 'var(--error-dark-contrast-text)',
    iconName: 'alert-outline'
  }
};
var Snackbar = exports.Snackbar = function Snackbar(_ref) {
  var _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? 'success' : _ref$severity,
    _ref$anchorOrigin = _ref.anchorOrigin,
    anchorOrigin = _ref$anchorOrigin === void 0 ? {
      vertical: 'bottom',
      horizontal: 'center'
    } : _ref$anchorOrigin,
    _ref$autoHideDuration = _ref.autoHideDuration,
    autoHideDuration = _ref$autoHideDuration === void 0 ? null : _ref$autoHideDuration,
    children = _ref.children,
    customImage = _ref.customImage,
    _ref$noCloseButton = _ref.noCloseButton,
    noCloseButton = _ref$noCloseButton === void 0 ? false : _ref$noCloseButton,
    _ref$noIcon = _ref.noIcon,
    noIcon = _ref$noIcon === void 0 ? false : _ref$noIcon,
    _ref$opened = _ref.opened,
    opened = _ref$opened === void 0 ? false : _ref$opened,
    _ref$overlayProps = _ref.overlayProps,
    overlayProps = _ref$overlayProps === void 0 ? null : _ref$overlayProps,
    setOpened = _ref.setOpened,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var timerAutoHide = (0, _hooks.useRef)();
  (0, _hooks.useLayoutEffect)(function () {
    if (opened && autoHideDuration !== null) {
      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = window.setTimeout(function () {
        setOpened(false);
      }, autoHideDuration);
    }
    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [autoHideDuration, opened, setOpened]);
  var _styleMap$severity = styleMap[severity],
    bgColor = _styleMap$severity.bgColor,
    color = _styleMap$severity.color,
    iconName = _styleMap$severity.iconName;
  return (0, _jsxRuntime.jsx)(_StyledOverlay, _objectSpread(_objectSpread({
    opened: opened,
    cancelOnEscKey: false,
    cancelOnOutsideClick: false,
    animation: "scale-in"
  }, overlayProps), {}, {
    $_css: anchorOrigin.vertical === 'bottom' ? 'flex-end' : anchorOrigin.vertical === 'top' ? 'flex-start' : 'center',
    $_css2: anchorOrigin.horizontal === 'left' ? 'left' : anchorOrigin.horizontal === 'right' ? 'flex-end' : 'center',
    children: (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
      $_css3: bgColor,
      $_css4: color,
      $_css5: customImage ? '.875rem' : '.875rem 1rem',
      children: [customImage ? customImage : !noIcon ? (0, _jsxRuntime.jsx)(_StyledIcon, {
        icon: iconName,
        $_css6: color
      }) : null, (0, _jsxRuntime.jsx)(_StyledDiv2, {
        children: children
      }), noCloseButton ? null : (0, _jsxRuntime.jsx)(_StyledIconButton, {
        icon: "close",
        onClick: function onClick() {
          clearTimeout(timerAutoHide.current);
          setOpened(false);
        },
        $_css7: color
      })]
    }))
  }));
};
var _StyledOverlay = /*#__PURE__*/(0, _styledComponents["default"])(_Overlay.Overlay).withConfig({
  componentId: "sc-1dwticx-0"
})(["border-radius:var(--radius-4);display:flex;flex-direction:row;inset:0;padding:2rem;pointer-events:none;align-items:", ";justify-content:", ";"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1dwticx-1"
})(["align-items:center;background:", ";border-radius:var(--radius-1);box-shadow:var(--shadow-xl);color:", ";display:flex;padding:", ";pointer-events:all;will-change:transform;"], function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
});
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-1dwticx-2"
})(["color:", ";height:1.5rem;width:1.5rem;"], function (p) {
  return p.$_css6;
});
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1dwticx-3"
})(["margin:0 0.75rem;"]);
var _StyledIconButton = /*#__PURE__*/(0, _styledComponents["default"])(_IconButton.IconButton).withConfig({
  componentId: "sc-1dwticx-4"
})(["color:inherit;margin-right:-0.125rem;padding:0;&:hover{color:", ";}"], function (p) {
  return p.$_css7;
});