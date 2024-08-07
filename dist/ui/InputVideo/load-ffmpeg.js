"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFFmpeg = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var baseURLFFMPEG = 'https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/umd';
var baseURLCore = 'https://unpkg.com/@ffmpeg/core@0.12.3/dist/umd';
var baseURLCoreMT = 'https://unpkg.com/@ffmpeg/core-mt@0.12.3/dist/umd';
var toBlobURLPatched = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, mimeType, patcher) {
    var resp, body, blob;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(url);
        case 2:
          resp = _context.sent;
          _context.next = 5;
          return resp.text();
        case 5:
          body = _context.sent;
          if (patcher) {
            body = patcher(body);
          }
          blob = new Blob([body], {
            type: mimeType
          });
          return _context.abrupt("return", URL.createObjectURL(blob));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function toBlobURLPatched(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var toBlobURL = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url, mimeType) {
    var resp, body, blob;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(url);
        case 2:
          resp = _context2.sent;
          _context2.next = 5;
          return resp.blob();
        case 5:
          body = _context2.sent;
          blob = new Blob([body], {
            type: mimeType
          });
          return _context2.abrupt("return", URL.createObjectURL(blob));
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function toBlobURL(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var loaded = false;
var loadFFmpeg = exports.loadFFmpeg = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var ffmpegBlobURL, ffmpeg;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!loaded) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", new window.FFmpegWASM.FFmpeg());
        case 2:
          _context3.next = 4;
          return toBlobURLPatched("".concat(baseURLFFMPEG, "/ffmpeg.js"), 'text/javascript', function (js) {
            return js.replace('new URL(e.p+e.u(814),e.b)', 'r.workerLoadURL');
          });
        case 4:
          ffmpegBlobURL = _context3.sent;
          _context3.next = 7;
          return function (specifier) {
            return new Promise(function (r) {
              return r("".concat(specifier));
            }).then(function (s) {
              return _interopRequireWildcard(require(s));
            });
          }(ffmpegBlobURL);
        case 7:
          ffmpeg = new window.FFmpegWASM.FFmpeg();
          loaded = true;

          // check if SharedArrayBuffer is supported via crossOriginIsolated global var
          // https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated
          if (!window.crossOriginIsolated) {
            _context3.next = 28;
            break;
          }
          _context3.t0 = ffmpeg;
          _context3.next = 13;
          return toBlobURL("".concat(baseURLFFMPEG, "/814.ffmpeg.js"), 'text/javascript');
        case 13:
          _context3.t1 = _context3.sent;
          _context3.next = 16;
          return toBlobURL("".concat(baseURLCoreMT, "/ffmpeg-core.js"), 'text/javascript');
        case 16:
          _context3.t2 = _context3.sent;
          _context3.next = 19;
          return toBlobURL("".concat(baseURLCoreMT, "/ffmpeg-core.wasm"), 'application/wasm');
        case 19:
          _context3.t3 = _context3.sent;
          _context3.next = 22;
          return toBlobURL("".concat(baseURLCoreMT, "/ffmpeg-core.worker.js"), 'application/javascript');
        case 22:
          _context3.t4 = _context3.sent;
          _context3.t5 = {
            workerLoadURL: _context3.t1,
            coreURL: _context3.t2,
            wasmURL: _context3.t3,
            workerURL: _context3.t4
          };
          _context3.next = 26;
          return _context3.t0.load.call(_context3.t0, _context3.t5);
        case 26:
          _context3.next = 41;
          break;
        case 28:
          _context3.t6 = ffmpeg;
          _context3.next = 31;
          return toBlobURL("".concat(baseURLFFMPEG, "/814.ffmpeg.js"), 'text/javascript');
        case 31:
          _context3.t7 = _context3.sent;
          _context3.next = 34;
          return toBlobURL("".concat(baseURLCore, "/ffmpeg-core.js"), 'text/javascript');
        case 34:
          _context3.t8 = _context3.sent;
          _context3.next = 37;
          return toBlobURL("".concat(baseURLCore, "/ffmpeg-core.wasm"), 'application/wasm');
        case 37:
          _context3.t9 = _context3.sent;
          _context3.t10 = {
            workerLoadURL: _context3.t7,
            coreURL: _context3.t8,
            wasmURL: _context3.t9
          };
          _context3.next = 41;
          return _context3.t6.load.call(_context3.t6, _context3.t10);
        case 41:
          return _context3.abrupt("return", ffmpeg);
        case 42:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function loadFFmpeg() {
    return _ref3.apply(this, arguments);
  };
}();