"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFetcher = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _utils = require("../utils");
var _excluded = ["user", "method"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createFetcher = exports.createFetcher = function createFetcher(functionsUrl) {
  return /*#__PURE__*/function () {
    var _fetcher = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, _ref) {
      var user, _ref$method, method, props, res, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            user = _ref.user, _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
            _context.t0 = fetch;
            _context.t1 = "".concat(functionsUrl).concat((0, _utils.ensureLeadingSlash)(url));
            _context.t2 = _objectSpread;
            _context.t3 = _objectSpread({
              method: method
            }, props);
            _context.t4 = {};
            _context.t5 = _objectSpread;
            _context.t6 = _objectSpread;
            _context.t7 = {
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            };
            if (!user) {
              _context.next = 18;
              break;
            }
            _context.t9 = "Bearer ";
            _context.next = 13;
            return user.getIdToken();
          case 13:
            _context.t10 = _context.sent;
            _context.t11 = _context.t9.concat.call(_context.t9, _context.t10);
            _context.t8 = {
              Authorization: _context.t11
            };
            _context.next = 19;
            break;
          case 18:
            _context.t8 = {};
          case 19:
            _context.t12 = _context.t8;
            _context.t13 = (0, _context.t6)(_context.t7, _context.t12);
            _context.t14 = props.headers || null;
            _context.t15 = (0, _context.t5)(_context.t13, _context.t14);
            _context.t16 = {
              headers: _context.t15
            };
            _context.t17 = (0, _context.t2)(_context.t3, _context.t4, _context.t16);
            _context.next = 27;
            return (0, _context.t0)(_context.t1, _context.t17);
          case 27:
            res = _context.sent;
            if (!res.ok) {
              _context.next = 34;
              break;
            }
            _context.next = 31;
            return res.json();
          case 31:
            return _context.abrupt("return", _context.sent);
          case 34:
            _context.next = 36;
            return res.json();
          case 36:
            data = _context.sent;
            throw new Error((data === null || data === void 0 ? void 0 : data.message) || 'Something went wrong');
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function fetcher(_x, _x2) {
      return _fetcher.apply(this, arguments);
    }
    return fetcher;
  }();
};