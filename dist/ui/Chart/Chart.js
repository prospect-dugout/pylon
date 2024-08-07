"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _auto = require("chart.js/auto");
require("chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["config"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Chart = exports.Chart = function Chart(_ref) {
  var config = _ref.config,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var canvasRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    chart = _useState2[0],
    setChart = _useState2[1];
  (0, _hooks.useEffect)(function () {
    if (chart) {
      chart.destroy();
    }
    if (canvasRef.current) {
      setChart(new _auto.Chart(canvasRef.current, config));
    }
  }, []);
  (0, _hooks.useEffect)(function () {
    if (chart) {
      chart.data = config === null || config === void 0 ? void 0 : config.data;
      chart.update();
    }
  }, [config.data]);
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _jsxRuntime.jsx)(_StyledCanvas, {
      ref: canvasRef
    })
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1gawb1r-0"
})(["width:100%;"]);
var _StyledCanvas = /*#__PURE__*/(0, _styledComponents["default"])("canvas").withConfig({
  componentId: "sc-1gawb1r-1"
})(["height:100%;width:100%;"]);