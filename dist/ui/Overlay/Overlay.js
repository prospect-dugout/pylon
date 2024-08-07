"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../lib/utils");
var _animations = require("./animations");
var _getOverlayPosition = require("./get-overlay-position");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["animation", "backdropColor", "cancelOnEscKey", "cancelOnOutsideClick", "children", "closeOthers", "disableBodyScroll", "noAutoFocus", "opened", "position", "pushHistoryState", "rootCss", "setOpened", "withBackdrop"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Overlay = exports.Overlay = (0, _compat.forwardRef)(function (_ref, _ref2) {
  var animation = _ref.animation,
    _ref$backdropColor = _ref.backdropColor,
    backdropColor = _ref$backdropColor === void 0 ? 'rgba(0, 0, 0, 0.33)' : _ref$backdropColor,
    _ref$cancelOnEscKey = _ref.cancelOnEscKey,
    cancelOnEscKey = _ref$cancelOnEscKey === void 0 ? false : _ref$cancelOnEscKey,
    _ref$cancelOnOutsideC = _ref.cancelOnOutsideClick,
    cancelOnOutsideClick = _ref$cancelOnOutsideC === void 0 ? false : _ref$cancelOnOutsideC,
    children = _ref.children,
    _ref$closeOthers = _ref.closeOthers,
    closeOthers = _ref$closeOthers === void 0 ? false : _ref$closeOthers,
    _ref$disableBodyScrol = _ref.disableBodyScroll,
    disableBodyScroll = _ref$disableBodyScrol === void 0 ? false : _ref$disableBodyScrol,
    _ref$noAutoFocus = _ref.noAutoFocus,
    noAutoFocus = _ref$noAutoFocus === void 0 ? false : _ref$noAutoFocus,
    _ref$opened = _ref.opened,
    opened = _ref$opened === void 0 ? false : _ref$opened,
    position = _ref.position,
    _ref$pushHistoryState = _ref.pushHistoryState,
    pushHistoryState = _ref$pushHistoryState === void 0 ? false : _ref$pushHistoryState,
    rootCss = _ref.rootCss,
    setOpened = _ref.setOpened,
    _ref$withBackdrop = _ref.withBackdrop,
    withBackdrop = _ref$withBackdrop === void 0 ? false : _ref$withBackdrop,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var rootRef = (0, _hooks.useRef)();
  var overlayRef = (0, _hooks.useRef)();
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showBackdrop = _useState2[0],
    setShowBackdrop = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  var isLastOpened = function isLastOpened() {
    var overlays = getOpenedOverlays();
    return overlays.length - 1 === overlays.indexOf(rootRef.current);
  };

  /* cancelOnEscKey */
  (0, _hooks.useEffect)(function () {
    var handleCancelOnEscKey = function handleCancelOnEscKey(evt) {
      if (evt.key === 'Escape' && isLastOpened()) {
        setOpened === null || setOpened === void 0 || setOpened(false);
      }
    };
    if (cancelOnEscKey && visible && isLastOpened()) {
      (0, _utils.on)(document, 'keydown', handleCancelOnEscKey);
    }
    return function () {
      (0, _utils.off)(document, 'keydown', handleCancelOnEscKey);
    };
  }, [cancelOnEscKey, visible, setOpened]);

  /* cancelOnOutsideClick */
  (0, _hooks.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(evt) {
      if (overlayRef.current && !overlayRef.current.contains(evt.target) && isLastOpened()) {
        evt.stopPropagation();
        evt.preventDefault();
        setOpened === null || setOpened === void 0 || setOpened(false);
      }
    };
    if (cancelOnOutsideClick && visible && isLastOpened()) {
      (0, _utils.on)(document, 'mousedown', handleClickOutside);
      (0, _utils.on)(document, 'touchend', handleClickOutside);
    }
    return function () {
      (0, _utils.off)(document, 'mousedown', handleClickOutside);
      (0, _utils.off)(document, 'touchend', handleClickOutside);
    };
  }, [cancelOnOutsideClick, visible, setOpened]);

  /* closeOthers */
  (0, _hooks.useEffect)(function () {
    var handleCloseOthers = function handleCloseOthers(evt) {
      if (closeOthers && !isLastOpened() && (closeOthers === true || evt.detail.overlay.matches(closeOthers))) {
        setOpened === null || setOpened === void 0 || setOpened(false);
      }
    };
    (0, _utils.on)(window, 'overlay-opened', handleCloseOthers);
    return function () {
      (0, _utils.off)(window, 'overlay-opened', handleCloseOthers);
    };
  }, [opened, setOpened, closeOthers]);

  // autofocus
  (0, _hooks.useLayoutEffect)(function () {
    if (opened && !noAutoFocus) {
      var x = window.scrollX;
      var y = window.scrollY;
      overlayRef.current.focus();
      window.scrollTo(x, y);
    }
  }, [noAutoFocus, opened]);

  // disableBodyScroll
  (0, _hooks.useEffect)(function () {
    if (opened && disableBodyScroll) {
      // safari ios needs both
      document.body.style.overflow = 'hidden';
    }
    return function () {
      if (disableBodyScroll && getOpenedOverlays().filter(function (el) {
        return el.dataset.disabledBodyScroll;
      }).length <= 1) {
        document.body.style.overflow = '';
      }
    };
  }, [disableBodyScroll, opened]);

  // pushHistoryState
  (0, _hooks.useEffect)(function () {
    var handlePopState = function handlePopState() {
      if (opened) {
        setOpened === null || setOpened === void 0 || setOpened(false);
      }
    };
    if (pushHistoryState) {
      (0, _utils.on)(window, 'popstate', handlePopState);
      if (opened) {
        window.history.pushState({}, '');
      }
    }
    return function () {
      (0, _utils.off)(window, 'popstate', handlePopState);
    };
  }, [pushHistoryState, opened, setOpened]);

  // opening/closing
  (0, _hooks.useEffect)(function () {
    if (opened && !visible) {
      // Animate in and/or set visible to true
      if (position !== null && position !== void 0 && position.positionTarget || position !== null && position !== void 0 && position.positionEvent) {
        overlayRef.current.style.inset = (0, _getOverlayPosition.getOverlayPosition)(overlayRef, position);
      }
      if (animation) {
        overlayRef.current.classList.add('animate-in');
      } else {
        overlayRef.current.style.opacity = '1';
      }
      setVisible(true);
    } else if (!opened && visible) {
      // Animate out and/or set visible to false
      if (animation) {
        overlayRef.current.addEventListener('transitionend', function () {
          return setVisible(false);
        }, {
          once: true
        });
        overlayRef.current.classList.remove('animate-in');
      } else {
        setVisible(false);
      }
    }
  }, [animation, opened, position, visible]);

  /* overlay-opened event */
  (0, _hooks.useEffect)(function () {
    var dispatchOverlayOpenedEvent = function dispatchOverlayOpenedEvent() {
      window.dispatchEvent(new CustomEvent('overlay-opened', {
        detail: {
          overlay: overlayRef.current
        }
      }));
    };
    if (opened) {
      (0, _utils.afterNextRender)(dispatchOverlayOpenedEvent);
    }
  }, [opened]);

  // show backdrop (this ensures animation happens)
  (0, _hooks.useEffect)(function () {
    if (withBackdrop) {
      if (opened && !visible) {
        setShowBackdrop(true);
      } else if (!opened && visible) {
        setShowBackdrop(false);
      }
    }
  }, [opened, visible, withBackdrop]);
  if (opened || visible) {
    return (0, _compat.createPortal)((0, _jsxRuntime.jsxs)(StyledRoot, _objectSpread(_objectSpread({
      ref: rootRef,
      "data-overlay": true
    }, disableBodyScroll && {
      'data-disabled-body-scroll': true
    }), {}, {
      $mode: position === null || position === void 0 ? void 0 : position.mode,
      $rootCss: rootCss,
      children: [(0, _jsxRuntime.jsx)(StyledOverlay, _objectSpread(_objectSpread({
        ref: function ref(el) {
          if (typeof _ref2 === 'function') {
            _ref2(el);
          } else if (_ref2) {
            _ref2.current = el;
          }
          if (el) {
            overlayRef.current = el;
          }
        },
        tabIndex: 1,
        $animation: animation,
        $mode: position === null || position === void 0 ? void 0 : position.mode
      }, restProps), {}, {
        children: children
      })), withBackdrop && (0, _jsxRuntime.jsx)(StyledBackdrop, {
        $bg: backdropColor,
        $showBackdrop: showBackdrop
      })]
    })), document.body);
  } else {
    return null;
  }
});
var getOpenedOverlays = function getOpenedOverlays() {
  return Array.from(document.body.querySelectorAll('div[data-overlay]'));
};
var StyledRoot = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-1lmylqr-0"
})(["inset:0;pointer-events:none;z-index:999990;", " ", ""], function (p) {
  return p.$mode === 'centered' ? (0, _styledComponents.css)(["align-items:center;display:flex;justify-content:center;position:fixed;"]) : (0, _styledComponents.css)(["margin:var(--gap-1-5);position:", ";"], p.$mode === 'fixed' ? 'fixed' : 'absolute');
}, function (p) {
  return p.$rootCss;
});
var StyledOverlay = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-1lmylqr-1"
})(["max-height:100%;opacity:0;outline:0;pointer-events:all;position:", ";z-index:999992;", ""], function (p) {
  return p.$mode === 'centered' ? 'relative' : 'absolute';
}, function (p) {
  return (0, _animations.getAnimationCss)(p.$animation);
});
var StyledBackdrop = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-1lmylqr-2"
})(["background:", ";inset:0;opacity:", ";pointer-events:", ";position:fixed;transition:opacity 0.25s;z-index:999991;"], function (p) {
  return p.$bg;
}, function (p) {
  return p.$showBackdrop ? 1 : 0;
}, function (p) {
  return p.$showBackdrop ? 'all' : 'none';
});