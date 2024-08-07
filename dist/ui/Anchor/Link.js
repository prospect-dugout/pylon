"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _preactIso = require("preact-iso");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["class", "className", "activeClass", "activeClassName"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Link = exports.Link = function Link(_ref) {
  var c = _ref["class"],
    className = _ref.className,
    activeClass = _ref.activeClass,
    activeClassName = _ref.activeClassName,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var inactive = [c, className].filter(Boolean).join(' ');
  var active = [c, className, activeClass, activeClassName].filter(Boolean).join(' ');
  var matches = (0, _preactIso.useLocation)().url === props.href;
  return (0, _jsxRuntime.jsx)("a", _objectSpread(_objectSpread({}, props), {}, {
    "class": matches ? active : inactive
  }));
};