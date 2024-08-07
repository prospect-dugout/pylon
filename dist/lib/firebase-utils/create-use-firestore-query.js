"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseFirestoreQuery = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _firestore = require("@firebase/firestore");
var _swr = _interopRequireDefault(require("swr"));
var createUseFirestoreQuery = exports.createUseFirestoreQuery = function createUseFirestoreQuery(useFirebase) {
  var useFirestoreQuery = function useFirestoreQuery(key) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      skip: false
    };
    var _useFirebase = useFirebase(),
      user = _useFirebase.user,
      db = _useFirebase.db;
    var _useSWR = (0, _swr["default"])(!!user && !opts.skip ? key : null, function (url) {
        return firestoreFetcher({
          db: db,
          path: url
        });
      }),
      data = _useSWR.data,
      error = _useSWR.error;
    return {
      data: data,
      loading: !opts.skip && !error && data === undefined,
      error: error
    };
  };
  return useFirestoreQuery;
};
function firestoreFetcher(_x) {
  return _firestoreFetcher.apply(this, arguments);
}
function _firestoreFetcher() {
  _firestoreFetcher = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
    var db, path, _ref, _data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          db = _ref2.db, path = _ref2.path;
          _ref = (0, _firestore.doc)(db, path);
          _context.next = 4;
          return (0, _firestore.getDoc)(_ref);
        case 4:
          _context.next = 6;
          return _context.sent.data();
        case 6:
          _data = _context.sent;
          return _context.abrupt("return", _data || null);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _firestoreFetcher.apply(this, arguments);
}