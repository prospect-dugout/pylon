"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _hooks = require("preact/hooks");
var _ToastMessage = require("../ToastMessage");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "onSubmit"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Form = exports.Form = function Form(_ref) {
  var children = _ref.children,
    _onSubmit = _ref.onSubmit,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    networkError = _useState2[0],
    setNetworkError = _useState2[1];
  return (0, _jsxRuntime.jsxs)("form", _objectSpread(_objectSpread({
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
      try {
        _onSubmit();
      } catch (error) {
        setNetworkError(error);
      }
    }
  }, props), {}, {
    children: [!!(networkError !== null && networkError !== void 0 && networkError.message) && (0, _jsxRuntime.jsx)(_ToastMessage.ToastMessage, {
      severity: "error",
      "css-mb": 6,
      children: networkError.message
    }), children]
  }));
};