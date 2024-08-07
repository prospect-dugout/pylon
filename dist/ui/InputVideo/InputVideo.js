"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputVideo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _hooks = require("preact/hooks");
var _ffmpeg = require("@ffmpeg/ffmpeg");
var _react = require("react");
var _Button = require("../Button");
var _Form = require("../Form");
var _Grid = require("../Grid");
var _InputRange = require("../InputRange");
var _Stack = require("../Stack");
var _VideoPlayer = require("../VideoPlayer");
var _InputArea = require("./_InputArea");
var _helpers = require("./helpers");
var _jsxRuntime = require("preact/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var InputVideo = exports.InputVideo = function InputVideo(_ref) {
  var _ref$allowedRatios = _ref.allowedRatios,
    allowedRatios = _ref$allowedRatios === void 0 ? '16:9,9:16,1:1' : _ref$allowedRatios,
    _ref$hideRatioSelecto = _ref.hideRatioSelector,
    hideRatioSelector = _ref$hideRatioSelecto === void 0 ? false : _ref$hideRatioSelecto,
    onClear = _ref.onClear,
    onFinish = _ref.onFinish,
    _ref$submitText = _ref.submitText,
    submitText = _ref$submitText === void 0 ? 'Next' : _ref$submitText;
  var ratios = allowedRatios.split(',').map(function (str) {
    var _str$split$map = str.split(':').map(Number),
      _str$split$map2 = (0, _slicedToArray2["default"])(_str$split$map, 2),
      aspectWidth = _str$split$map2[0],
      aspectHeight = _str$split$map2[1];
    return {
      label: str,
      value: str,
      aspectWidth: aspectWidth,
      aspectHeight: aspectHeight
    };
  });
  var ffmpegRef = (0, _hooks.useRef)(new _ffmpeg.FFmpeg());
  var videoRef = (0, _hooks.useRef)(null);
  var rangeRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    trimming = _useState2[0],
    setTrimming = _useState2[1];
  var _useState3 = (0, _hooks.useState)(ratios[0]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    ratio = _useState4[0],
    setRatio = _useState4[1];
  var _useState5 = (0, _hooks.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    inputVideo = _useState6[0],
    setInputVideo = _useState6[1];
  var _useState7 = (0, _hooks.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    inputVideoUrl = _useState8[0],
    setInputVideoUrl = _useState8[1];
  var _useState9 = (0, _hooks.useState)(null),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    inputVideoMeta = _useState10[0],
    setInputVideoMeta = _useState10[1];
  var clear = function clear() {
    setInputVideo(null);
    setInputVideoUrl(null);
    setInputVideoMeta(null);
    setTrimming(false);
    setRatio(ratios[0]);
    onClear === null || onClear === void 0 || onClear();
  };
  var handleInputRangeChange = function handleInputRangeChange(range) {
    if (!videoRef.current) return;
    rangeRef.current = range;
    videoRef.current.currentTime = range[0];
  };
  var startTrimming = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _yield$trimVideo, outputVideo, outputVideoUrl;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!rangeRef.current || !inputVideo)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setTrimming(true);
            _context.next = 5;
            return (0, _helpers.trimVideo)({
              ffmpeg: ffmpegRef.current,
              start: rangeRef.current[0],
              end: rangeRef.current[1],
              videoFile: inputVideo
            });
          case 5:
            _yield$trimVideo = _context.sent;
            outputVideo = _yield$trimVideo.outputVideo;
            outputVideoUrl = _yield$trimVideo.outputVideoUrl;
            onFinish === null || onFinish === void 0 || onFinish({
              outputVideo: outputVideo,
              outputVideoUrl: outputVideoUrl,
              ratio: ratio.value
            });
            console.log('outputVideo', outputVideo, outputVideoUrl);
            setTrimming(false);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function startTrimming() {
      return _ref2.apply(this, arguments);
    };
  }();
  var onTimeUpdate = function onTimeUpdate() {
    if (!videoRef.current || !rangeRef.current) return;
    var video = videoRef.current;
    var range = rangeRef.current;
    if (video.currentTime >= range[1] || video.currentTime < range[0]) {
      video.currentTime = range[0];
    }
  };
  var handleInputFileChange = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(file) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setInputVideoMeta(null);
            if (file) {
              setInputVideo(file);
              setInputVideoUrl(URL.createObjectURL(file));
            } else {
              clear();
            }
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleInputFileChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var onLoadedMetadata = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(evt) {
      var el, videoWidth, videoHeight, duration, videoAspectRatio, closestRatio, minDifference, i, currentRatio, difference;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            el = evt.currentTarget;
            if (!(el.src !== inputVideoUrl)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            videoWidth = el.videoWidth;
            videoHeight = el.videoHeight;
            duration = el.duration; // Calculate the aspect ratio of the loaded video
            videoAspectRatio = videoWidth / videoHeight; // Find the closest matching predefined ratio
            closestRatio = ratios[0];
            minDifference = Math.abs(videoAspectRatio - ratios[0].aspectWidth / ratios[0].aspectHeight);
            for (i = 1; i < ratios.length; i++) {
              currentRatio = ratios[i].aspectWidth / ratios[i].aspectHeight;
              difference = Math.abs(videoAspectRatio - currentRatio);
              if (difference < minDifference) {
                closestRatio = ratios[i];
                minDifference = difference;
              }
            }

            // Set the state with the closest ratio and video metadata
            setRatio(closestRatio);
            rangeRef.current = [0, duration];
            setInputVideoMeta({
              duration: duration,
              videoWidth: videoWidth,
              videoHeight: videoHeight
            });
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onLoadedMetadata(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!ffmpegRef.current.loaded) {
      console.log('loading ffmpeg');
      (0, _helpers.loadFFmpeg)(ffmpegRef.current);
    }
  }, []);
  if (inputVideoUrl) {
    var paddingTopPercentage = ratio.aspectHeight / ratio.aspectWidth * 100;
    return (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsxs)(_Grid.Grid, {
        cols: "1fr 1fr",
        gap: 6,
        alignItems: "flex-start",
        children: [(0, _jsxRuntime.jsx)(_StyledVideoPlayer, {
          ref: videoRef,
          src: inputVideoUrl,
          onLoadedMetadata: onLoadedMetadata,
          onTimeUpdate: onTimeUpdate,
          containerCss: (0, _styledComponents.css)(["background:var(--black);border-radius:var(--radius-3);cursor:pointer;margin:0 auto;overflow:hidden;padding-top:", "%;position:relative;width:100%;"], paddingTopPercentage)
        }, inputVideoUrl), (0, _jsxRuntime.jsx)(_StyledDiv, {
          children: !!inputVideoMeta && (0, _jsxRuntime.jsxs)(_Stack.Stack, {
            direction: "column",
            alignItems: "stretch",
            gap: 6,
            children: [(0, _jsxRuntime.jsx)(_Form.Fieldset, {
              label: "Trim",
              fullWidth: true,
              children: (0, _jsxRuntime.jsx)(_InputRange.InputRange, {
                onChange: handleInputRangeChange,
                deferOnChange: true,
                min: 0,
                max: (inputVideoMeta === null || inputVideoMeta === void 0 ? void 0 : inputVideoMeta.duration) || 0,
                step: 0.01,
                minLength: 1
              }, inputVideoMeta === null || inputVideoMeta === void 0 ? void 0 : inputVideoMeta.duration)
            }), !hideRatioSelector && (0, _jsxRuntime.jsx)(_Form.FormSelect, {
              label: "Crop",
              fullWidth: true,
              defaultValue: ratio.label,
              options: ratios,
              onChange: function onChange(evt) {
                var selected = ratios.find(function (r) {
                  return r.label === evt.currentTarget.value;
                });
                setRatio(selected);
              }
            })]
          })
        })]
      }), (0, _jsxRuntime.jsxs)(_Stack.Stack, {
        justifyContent: "space-between",
        "css-mt": 6,
        children: [(0, _jsxRuntime.jsx)(_Button.Button, {
          variant: "muted",
          disabled: trimming,
          onClick: clear,
          children: "Back"
        }), (0, _jsxRuntime.jsx)(_Form.FormSubmit, {
          variant: "primary",
          submitting: trimming,
          onClick: startTrimming,
          children: submitText
        })]
      })]
    });
  } else {
    return (0, _jsxRuntime.jsx)(_InputArea.InputVideo_InputArea, {
      onChange: handleInputFileChange
    });
  }
};
var _StyledVideoPlayer = /*#__PURE__*/(0, _styledComponents["default"])(_VideoPlayer.VideoPlayer).withConfig({
  componentId: "sc-1gm4ed7-0"
})(["height:100%;left:0;object-fit:cover;position:absolute;top:0;width:100%;"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1gm4ed7-1"
})(["min-width:0;"]);