"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructUrlWithParams = constructUrlWithParams;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
function constructUrlWithParams(path) {
  var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var queryString = Object.entries(queryParams).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      value = _ref2[1];
    return value !== undefined;
  }).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
  }).join('&');
  return "".concat(path).concat(queryString ? '?' + queryString : '');
}