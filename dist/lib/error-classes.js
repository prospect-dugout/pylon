"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unauthorized = exports.NotFound = exports.InternalServerError = exports.Forbidden = exports.CustomError = exports.COMMON_ERRORS = exports.BadRequest = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/wrapNativeSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var COMMON_ERRORS = exports.COMMON_ERRORS = {
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  MISSING_REQUIRED_FIELDS: 'MISSING_REQUIRED_FIELDS',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  SOMETHING_WENT_WRONG: 'SOMETHING_WENT_WRONG',
  UNAUTHORIZED: 'UNAUTHORIZED'
};

/* eslint-disable max-len */
var CustomError = exports.CustomError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(CustomError, _Error);
  function CustomError() {
    var _this;
    (0, _classCallCheck2["default"])(this, CustomError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CustomError, [].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "message", COMMON_ERRORS.SOMETHING_WENT_WRONG);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "code", 500);
    return _this;
  }
  return (0, _createClass2["default"])(CustomError);
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
/**
 * This error response is a generic "catch-all" response. Usually, this
 * indicates the server cannot find a better 5xx error code to response.
 */
var InternalServerError = exports.InternalServerError = /*#__PURE__*/function (_CustomError2) {
  (0, _inherits2["default"])(InternalServerError, _CustomError2);
  function InternalServerError() {
    (0, _classCallCheck2["default"])(this, InternalServerError);
    return _callSuper(this, InternalServerError, arguments);
  }
  return (0, _createClass2["default"])(InternalServerError);
}(CustomError);
/**
 * 400 Bad Request response status code indicates that the server cannot or
 * will not process the request due to something that is perceived to be a
 * client error (for example, malformed request syntax, invalid request
 * message framing, or deceptive request routing).
 */
var BadRequest = exports.BadRequest = /*#__PURE__*/function (_CustomError3) {
  (0, _inherits2["default"])(BadRequest, _CustomError3);
  function BadRequest(message) {
    var _this2;
    (0, _classCallCheck2["default"])(this, BadRequest);
    _this2 = _callSuper(this, BadRequest);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "code", 400);
    _this2.message = message;
    return _this2;
  }
  return (0, _createClass2["default"])(BadRequest);
}(CustomError);
/**
 * The HTTP 404 Not Found response status code indicates that the server cannot
 * find the requested resource.
 */
var NotFound = exports.NotFound = /*#__PURE__*/function (_CustomError4) {
  (0, _inherits2["default"])(NotFound, _CustomError4);
  function NotFound() {
    var _this3;
    (0, _classCallCheck2["default"])(this, NotFound);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this3 = _callSuper(this, NotFound, [].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "message", COMMON_ERRORS.RESOURCE_NOT_FOUND);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "code", 404);
    return _this3;
  }
  return (0, _createClass2["default"])(NotFound);
}(CustomError);
/**
 * This error happens when a website visitor tries to access a restricted web
 * page but isn’t authorized to do so.
 */
var Unauthorized = exports.Unauthorized = /*#__PURE__*/function (_CustomError5) {
  (0, _inherits2["default"])(Unauthorized, _CustomError5);
  function Unauthorized(message) {
    var _this4;
    (0, _classCallCheck2["default"])(this, Unauthorized);
    _this4 = _callSuper(this, Unauthorized);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "code", 401);
    _this4.message = message || COMMON_ERRORS.UNAUTHORIZED;
    return _this4;
  }
  return (0, _createClass2["default"])(Unauthorized);
}(CustomError);
/**
 * This error is similar to the 401 error, but note the difference between
 * unauthorized and forbidden. In this case no login opportunity was available.
 * This can happen, for example, if you try to access a (forbidden) directory
 * on a website.
 */
var Forbidden = exports.Forbidden = /*#__PURE__*/function (_CustomError6) {
  (0, _inherits2["default"])(Forbidden, _CustomError6);
  function Forbidden() {
    var _this5;
    (0, _classCallCheck2["default"])(this, Forbidden);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this5 = _callSuper(this, Forbidden, [].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "message", COMMON_ERRORS.FORBIDDEN);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "code", 403);
    return _this5;
  }
  return (0, _createClass2["default"])(Forbidden);
}(CustomError);