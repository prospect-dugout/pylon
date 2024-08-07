"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFFmpeg = loadFFmpeg;
exports.toTimeString = void 0;
exports.trimVideo = trimVideo;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _util = require("@ffmpeg/util");
var _lib = require("../../lib");
var toTimeString = exports.toTimeString = function toTimeString(sec) {
  var showMilliSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hours = Math.floor(sec / 3600);
  var minutes = Math.floor((sec - hours * 3600) / 60);
  var seconds = sec - hours * 3600 - minutes * 60;
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  // matches the decimal point and the digits after it e.g if the number is 4.567 it matches .567
  var maltissaRegex = /\..*$/;
  var millisec = String(seconds).match(maltissaRegex);
  return hours + ':' + minutes + ':' + String(seconds).replace(maltissaRegex, '') + (showMilliSeconds ? millisec ? millisec[0] : '.000' : '');
};
function trimVideo(_x) {
  return _trimVideo.apply(this, arguments);
}
function _trimVideo() {
  _trimVideo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var end, ffmpeg, start, videoFile, outputTempName, data, outputVideoUrl, outputVideo;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          end = _ref.end, ffmpeg = _ref.ffmpeg, start = _ref.start, videoFile = _ref.videoFile;
          _context.t0 = ffmpeg;
          _context.t1 = videoFile.name;
          _context.next = 5;
          return (0, _util.fetchFile)(videoFile);
        case 5:
          _context.t2 = _context.sent;
          _context.next = 8;
          return _context.t0.writeFile.call(_context.t0, _context.t1, _context.t2);
        case 8:
          outputTempName = "".concat((0, _lib.makeid)(8), ".mp4"); // FFmpeg command to trim the video
          // This uses the `-ss` parameter for the start time, `-to` for the end time,
          // and `-c copy` to avoid re-encoding the video which makes the command run faster.
          _context.next = 11;
          return ffmpeg.exec(['-ss', toTimeString(start), '-i', videoFile.name, '-t', toTimeString(end - start), '-c', 'copy', outputTempName]);
        case 11:
          _context.next = 13;
          return ffmpeg.readFile(outputTempName);
        case 13:
          data = _context.sent;
          // Create a Blob URL for the output video to be used in the <video> element
          outputVideoUrl = URL.createObjectURL(new Blob([data.buffer], {
            type: 'video/mp4'
          })); // Optionally, if you want to make the trimmed video file available for download or further processing:
          outputVideo = new File([data.buffer], outputTempName, {
            type: 'video/mp4'
          });
          return _context.abrupt("return", {
            outputVideo: outputVideo,
            outputVideoUrl: outputVideoUrl
          });
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _trimVideo.apply(this, arguments);
}
function loadFFmpeg(_x2) {
  return _loadFFmpeg.apply(this, arguments);
}
function _loadFFmpeg() {
  _loadFFmpeg = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ffmpeg) {
    var baseURL;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'; // toBlobURL is used to bypass CORS issue, urls with the same domain can be used directly.
          _context2.t0 = ffmpeg;
          _context2.next = 4;
          return (0, _util.toBlobURL)("".concat(baseURL, "/ffmpeg-core.js"), 'text/javascript');
        case 4:
          _context2.t1 = _context2.sent;
          _context2.next = 7;
          return (0, _util.toBlobURL)("".concat(baseURL, "/ffmpeg-core.wasm"), 'application/wasm');
        case 7:
          _context2.t2 = _context2.sent;
          _context2.t3 = {
            coreURL: _context2.t1,
            wasmURL: _context2.t2
          };
          _context2.next = 11;
          return _context2.t0.load.call(_context2.t0, _context2.t3);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loadFFmpeg.apply(this, arguments);
}