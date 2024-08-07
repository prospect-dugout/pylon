"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStoredLayout = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _lib = require("../../lib");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useStoredLayout = exports.useStoredLayout = function useStoredLayout(_ref) {
  var childsRef = _ref.childsRef,
    localStorageId = _ref.localStorageId,
    panelGroupId = _ref.panelGroupId;
  var _useLocalStorage = (0, _lib.useLocalStorage)(localStorageId, null),
    _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
    storedLayout = _useLocalStorage2[0],
    setStoredLayout = _useLocalStorage2[1];
  var updateLocalStorage = function updateLocalStorage() {
    if (!localStorageId || !childsRef.current) return;
    var sizes = [];
    for (var panelId = 0; panelId < childsRef.current.length; panelId++) {
      var child = childsRef.current[panelId];
      if (!child) return;
      sizes.push(window.getComputedStyle(child).flexGrow);
    }
    setStoredLayout(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2["default"])({}, panelGroupId, sizes));
    });
  };
  return [storedLayout === null || storedLayout === void 0 ? void 0 : storedLayout[panelGroupId], updateLocalStorage];
};