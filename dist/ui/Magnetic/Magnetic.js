"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Magnetic = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _useMousePosition2 = _interopRequireDefault(require("../../lib/use-mouse-position"));
var _utils = require("../../lib/utils");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "distanceMultiplier"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Magnetic = exports.Magnetic = function Magnetic(_ref) {
  var children = _ref.children,
    _ref$distanceMultipli = _ref.distanceMultiplier,
    distanceMultiplier = _ref$distanceMultipli === void 0 ? 1.125 : _ref$distanceMultipli,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var ref = (0, _hooks.useRef)(null);
  var draggingRef = (0, _hooks.useRef)(false);
  var _useMousePosition = (0, _useMousePosition2["default"])(),
    mouseX = _useMousePosition.mouseX,
    mouseY = _useMousePosition.mouseY;
  (0, _hooks.useEffect)(function () {
    if (ref.current && mouseX !== null && mouseY !== null) {
      var node = ref.current;
      var rect = node.getBoundingClientRect();
      var distanceToTrigger = rect.width * distanceMultiplier;
      var distanceMouseButton = (0, _utils.distance)(mouseX + window.scrollX, mouseY + window.scrollY, rect.left + rect.width / 2, rect.top + rect.height / 2);
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        var x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.25;
        var y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.25;
        node.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
        draggingRef.current = true;
      } else {
        // Restore initial position
        draggingRef.current = false;
        // trasnform to 0,0,0
        node.style.transform = "translate3d(0, 0, 0)";
      }
    }
  }, [mouseX, mouseY, ref]);
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    children: children
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1c93vln-0"
})(["display:inline-flex;transition:transform 0.5s cubic-bezier(0.33,1,0.68,1);will-change:transform;"]);