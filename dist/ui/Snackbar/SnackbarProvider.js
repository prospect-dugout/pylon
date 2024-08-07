"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnackbarProvider = exports.SnackbarContext = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _Snackbar = require("./Snackbar");
var _jsxRuntime = require("preact/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SnackbarContext = exports.SnackbarContext = (0, _preact.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openSnackbar: function openSnackbar() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeSnackbar: function closeSnackbar() {}
});
var DEFAULT_SNACKBAR_PROPS = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  severity: 'success',
  autoHideDuration: null,
  noIcon: false,
  noCloseButton: false
};
var SnackbarProvider = exports.SnackbarProvider = function SnackbarProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _hooks.useState)({
      opened: false,
      content: null,
      snackbarProps: undefined
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    snackbarState = _useState2[0],
    setSnackbarState = _useState2[1];
  var openSnackbar = function openSnackbar(_ref2) {
    var content = _ref2.content,
      snackbarProps = _ref2.snackbarProps;
    setSnackbarState({
      opened: true,
      content: content,
      snackbarProps: snackbarProps
    });
  };
  var closeSnackbar = function closeSnackbar() {
    setSnackbarState({
      opened: false,
      content: undefined,
      snackbarProps: undefined
    });
  };
  return (0, _jsxRuntime.jsxs)(SnackbarContext.Provider, {
    value: {
      openSnackbar: openSnackbar,
      closeSnackbar: closeSnackbar
    },
    children: [children, snackbarState.opened && (0, _jsxRuntime.jsx)(_Snackbar.Snackbar, _objectSpread(_objectSpread({
      opened: snackbarState.opened,
      setOpened: closeSnackbar
    }, _objectSpread(_objectSpread({}, DEFAULT_SNACKBAR_PROPS), snackbarState.snackbarProps)), {}, {
      children: snackbarState.content
    }))]
  });
};