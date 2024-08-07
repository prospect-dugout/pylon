"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPanelLayout = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _ = require(".");
var _jsxRuntime = require("preact/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/** @recursive */
var renderPanelLayout = exports.renderPanelLayout = function renderPanelLayout(config) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    localStorageId = _ref.localStorageId,
    path = _ref.path;
  var id = path || '0';
  if (config.panels) {
    return (0, _jsxRuntime.jsx)(_.PanelGroup, _objectSpread(_objectSpread(_objectSpread({
      id: id,
      tabName: config.tabName,
      direction: config.direction,
      useTabs: config.useTabs
    }, config.tabsCustomRender ? {
      tabsCustomRender: config.tabsCustomRender
    } : {}), localStorageId ? {
      key: localStorageId,
      localStorageId: localStorageId
    } : {}), {}, {
      children: config.panels.map(function (c, idx) {
        return renderPanelLayout(c, {
          path: "".concat(id ? "".concat(id, "-") : '').concat(idx)
        });
      })
    }));
  } else {
    return (0, _jsxRuntime.jsx)(_.Panel, {
      tabName: config.tabName,
      children: config.component
    });
  }
};