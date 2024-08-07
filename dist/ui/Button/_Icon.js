"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button_Icon = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Icon = require("../Icon");
var _jsxRuntime = require("preact/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Button_Icon = exports.Button_Icon = function Button_Icon(_ref) {
  var buttonSize = _ref.buttonSize,
    direction = _ref.direction,
    icon = _ref.icon,
    iconCss = _ref.iconCss,
    iconSize = _ref.iconSize;
  if (!icon) return null;
  var size = typeof iconSize === 'number' ? "".concat(iconSize, "px") : sizeMap[buttonSize];
  var commonStyles = /*#__PURE__*/(0, _styledComponents.css)(["", " & svg{height:", ";width:", ";}"], direction === 'leading' ? "margin-right: ".concat(marginMap[buttonSize], ";") : "margin-left: ".concat(marginMap[buttonSize], ";"), size, size);
  if (typeof icon === 'string') {
    return (0, _jsxRuntime.jsx)(_StyledIcon, {
      icon: icon,
      $_css: commonStyles,
      $_css2: iconCss
    });
  } else {
    return (0, _jsxRuntime.jsx)(_StyledDiv, {
      $_css3: commonStyles,
      children: icon
    });
  }
};
var marginMap = {
  sm: 'var(--gap-1-5)',
  md: 'var(--gap-2)',
  lg: 'var(--gap-2)'
};
var sizeMap = {
  sm: '1.125rem',
  md: '1.25rem',
  lg: '1.5rem'
};
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-t8sguf-0"
})(["", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-t8sguf-1"
})(["display:inline-flex;", ""], function (p) {
  return p.$_css3;
});