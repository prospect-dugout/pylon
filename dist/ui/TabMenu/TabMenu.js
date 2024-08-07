"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabMenu = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _hooks = require("preact/hooks");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _lib = require("../../lib");
var _Anchor = require("../Anchor");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultValue", "direction", "items", "noAnimation", "onChange", "tabsWithErrors"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TabMenu = exports.TabMenu = function TabMenu(_ref) {
  var _items$find;
  var defaultValue = _ref.defaultValue,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'row' : _ref$direction,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$noAnimation = _ref.noAnimation,
    noAnimation = _ref$noAnimation === void 0 ? false : _ref$noAnimation,
    onChange = _ref.onChange,
    tabsWithErrors = _ref.tabsWithErrors,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var stackRef = (0, _hooks.useRef)(null);
  var indicatorRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(typeof defaultValue !== 'undefined' ? (_items$find = items.find(function (i) {
      return i.value === defaultValue;
    })) !== null && _items$find !== void 0 ? _items$find : null : null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    activeItem = _useState2[0],
    setActiveItem = _useState2[1];
  var handleTabClick = function handleTabClick(evt, item) {
    if ((0, _typeof2["default"])(item.value) !== undefined) {
      evt.preventDefault();
      setActiveItem(item);
      onChange === null || onChange === void 0 || onChange(item);
    }
  };
  (0, _hooks.useEffect)(function () {
    var _stackEl$querySelecto;
    var indicatorEl = indicatorRef.current;
    var stackEl = stackRef.current;
    if (!stackEl || !indicatorEl) return;
    var activeElement = (_stackEl$querySelecto = stackEl.querySelector('.tab-active')) !== null && _stackEl$querySelecto !== void 0 ? _stackEl$querySelecto : null;
    if (!activeElement) return;
    var stackRect = stackEl.getBoundingClientRect();
    var _activeElement$getBou = activeElement.getBoundingClientRect(),
      left = _activeElement$getBou.left,
      top = _activeElement$getBou.top,
      width = _activeElement$getBou.width,
      height = _activeElement$getBou.height;
    indicatorEl.style.width = "".concat(width, "px");
    indicatorEl.style.height = "".concat(height, "px");
    if (direction === 'row') {
      indicatorEl.style.transform = "translate(".concat(left - stackRect.left, "px, 0)");
    } else {
      indicatorEl.style.transform = "translate(0, ".concat(top - stackRect.top, "px)");
    }
  }, [activeItem, direction]);
  return (0, _jsxRuntime.jsxs)(StyledRoot, _objectSpread(_objectSpread({
    ref: stackRef,
    $direction: direction,
    $extraCss: (0, _lib.customCSSPropertiesRule)(props),
    role: "tablist"
  }, (0, _lib.nonCustomCSSProps)(props)), {}, {
    children: [(0, _jsxRuntime.jsx)(StyledIndicator, {
      ref: indicatorRef,
      $noAnimation: noAnimation
    }), items.map(function (item, idx) {
      var _tabsWithErrors$inclu, _item$value, _item$href;
      var hasErrors = (_tabsWithErrors$inclu = tabsWithErrors === null || tabsWithErrors === void 0 ? void 0 : tabsWithErrors.includes((_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : '')) !== null && _tabsWithErrors$inclu !== void 0 ? _tabsWithErrors$inclu : false;
      var isActive = activeItem === item || item.href && window.location.pathname === item.href;
      return (0, _jsxRuntime.jsxs)(StyledNavAnchor, {
        role: "tab",
        href: (_item$href = item.href) !== null && _item$href !== void 0 ? _item$href : '#',
        className: isActive ? 'tab-active' : '',
        onClick: function onClick(evt) {
          return handleTabClick(evt, item);
        },
        variant: "unstyled",
        $hasErrors: hasErrors,
        children: [item.content, hasErrors]
      }, idx);
    })]
  }));
};
var StyledRoot = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-1i1xx1g-0"
})(["align-items:", ";display:flex;flex-direction:", ";gap:", "px;position:relative;user-select:none;", ""], function (p) {
  return p.$direction === 'row' ? 'center' : 'stretch';
}, function (p) {
  return p.$direction;
}, function (p) {
  return p.$direction === 'row' ? 5 : 0;
}, function (p) {
  return p.$extraCss;
});
var StyledIndicator = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-1i1xx1g-1"
})(["background:var(--bg-minimal);border-radius:var(--radius-4);position:absolute;z-index:0;", ""], function (p) {
  return !p.$noAnimation && (0, _styledComponents.css)(["transition:transform 0.25s ease,width 0.25s ease,height 0.25s ease;"]);
});
var StyledNavAnchor = /*#__PURE__*/(0, _styledComponents["default"])(_Anchor.Anchor).withConfig({
  componentId: "sc-1i1xx1g-2"
})(["border-radius:var(--radius-4);color:", ";cursor:pointer;font-weight:var(--font-weight-medium);padding:var(--gap-1-5) var(--gap-4);position:relative;z-index:1;display:flex;align-items:center;"], function (p) {
  return p.$hasErrors ? 'var(--error-dark)' : 'var(--fg-default)';
});