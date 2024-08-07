"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseFirestoreMutation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _hooks = require("preact/hooks");
var _firestore = require("@firebase/firestore");
var _swr = require("swr");
var createUseFirestoreMutation = exports.createUseFirestoreMutation = function createUseFirestoreMutation(useFirebase) {
  var useFirestoreMutation = function useFirestoreMutation(urlFn) {
    var _useSWRConfig = (0, _swr.useSWRConfig)(),
      mutate = _useSWRConfig.mutate;
    var _useState = (0, _hooks.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];
    var _useState3 = (0, _hooks.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];
    var _useFirebase = useFirebase(),
      user = _useFirebase.user,
      db = _useFirebase.db;
    var mutationFn = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
        var body, _ref2$dontMutate, dontMutate, params, _ref, _data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              body = _ref2.body, _ref2$dontMutate = _ref2.dontMutate, dontMutate = _ref2$dontMutate === void 0 ? false : _ref2$dontMutate, params = _ref2.params;
              setError(null);
              _context.prev = 2;
              if (user) {
                _context.next = 5;
                break;
              }
              throw new Error('Not logged in');
            case 5:
              _ref = (0, _firestore.doc)(db, urlFn(params));
              (0, _firestore.setDoc)(_ref, body, {
                merge: true
              });
              _context.next = 9;
              return (0, _firestore.getDoc)(_ref);
            case 9:
              _context.next = 11;
              return _context.sent.data();
            case 11:
              _data = _context.sent;
              setData(_data);
              _context.next = 19;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              setError(_context.t0);
              throw _context.t0;
            case 19:
              if (!dontMutate) {
                mutate(urlFn(params));
              }
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 15]]);
      }));
      return function mutationFn(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    return {
      mutationFn: mutationFn,
      data: data,
      loading: !error && !data,
      error: error
    };
  };
  return useFirestoreMutation;
};