"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseMutation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _swr = require("swr");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createUseMutation = exports.createUseMutation = function createUseMutation(fetcher, useFirebase) {
  return function useMutation(urlFn) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      method: 'POST'
    };
    var _useSWRConfig = (0, _swr.useSWRConfig)(),
      mutate = _useSWRConfig.mutate;
    var _useFirebase = useFirebase(),
      user = _useFirebase.user;
    var fetchFn = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(requestData) {
        var _ref2, body, response, keys, promises;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _ref2 = requestData, body = _ref2.body;
              _context.next = 4;
              return fetcher(urlFn(requestData), _objectSpread({
                method: options.method || 'POST',
                user: user
              }, !!body && {
                body: JSON.stringify(body)
              }));
            case 4:
              response = _context.sent;
              if (!options.getCacheUpdateKeys) {
                _context.next = 11;
                break;
              }
              keys = options.getCacheUpdateKeys(requestData);
              promises = keys.map(function (key) {
                return mutate(key);
              });
              if (!options.waitForCacheRefresh) {
                _context.next = 11;
                break;
              }
              _context.next = 11;
              return Promise.all(promises);
            case 11:
              return _context.abrupt("return", response);
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 14]]);
      }));
      return function fetchFn(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    return [fetchFn];
  };
};