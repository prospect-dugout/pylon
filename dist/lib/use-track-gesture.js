"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTrackGesture = exports.TrackGesture = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _hooks = require("preact/hooks");
var _utils = require("./utils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TrackGesture = exports.TrackGesture = /*#__PURE__*/function () {
  function TrackGesture(_ref) {
    var _this = this;
    var onTrack = _ref.onTrack,
      onTrackEnd = _ref.onTrackEnd,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
      target = _ref.target,
      _ref$trackOnPointerDo = _ref.trackOnPointerDown,
      trackOnPointerDown = _ref$trackOnPointerDo === void 0 ? true : _ref$trackOnPointerDo;
    (0, _classCallCheck2["default"])(this, TrackGesture);
    (0, _defineProperty2["default"])(this, "trackThreshold", 4);
    (0, _defineProperty2["default"])(this, "trackStarted", false);
    (0, _defineProperty2["default"])(this, "targetRect", null);
    (0, _defineProperty2["default"])(this, "clientStartX", 0);
    (0, _defineProperty2["default"])(this, "clientStartY", 0);
    (0, _defineProperty2["default"])(this, "disposal", function () {
      (0, _utils.off)(_this.target, 'pointerdown', _this.onPointerDown);
      _this.stopTrack();
    });
    (0, _defineProperty2["default"])(this, "onPointerDown", function (evt) {
      var _ref2 = evt,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;
      _this.setupTrackStyles();
      _this.targetRect = _this.target.getBoundingClientRect();
      _this.clientStartX = clientX;
      _this.clientStartY = clientY;
      _this.addTrackListeners();
      if (_this.trackOnPointerDown) {
        _this.dispatchTrackEvent(clientX, clientY);
      }
    });
    (0, _defineProperty2["default"])(this, "onPointerMove", function (evt) {
      var _ref3 = evt,
        clientX = _ref3.clientX,
        clientY = _ref3.clientY;
      if (_this.trackStarted) {
        evt.stopPropagation();
        evt.preventDefault();
        _this.dispatchTrackEvent(clientX, clientY);
      } else if ((!_this.orientation || _this.orientation === 'horizontal') && Math.abs(_this.clientStartX - clientX) > _this.trackThreshold || (!_this.orientation || _this.orientation === 'vertical') && Math.abs(_this.clientStartY - clientY) > _this.trackThreshold) {
        _this.trackStarted = true;
      }
    });
    (0, _defineProperty2["default"])(this, "onPointerUp", function () {
      var _this$onTrackEnd;
      _this.stopTrack();
      (_this$onTrackEnd = _this.onTrackEnd) === null || _this$onTrackEnd === void 0 || _this$onTrackEnd.call(_this);
    });
    (0, _defineProperty2["default"])(this, "dispatchTrackEvent", function (clientX, clientY) {
      var _this$onTrack;
      if (!_this.targetRect) return;
      (_this$onTrack = _this.onTrack) === null || _this$onTrack === void 0 || _this$onTrack.call(_this, {
        dx: clientX - _this.clientStartX,
        dy: clientY - _this.clientStartY,
        startX: _this.clientStartX - _this.targetRect.left,
        startY: _this.clientStartY - _this.targetRect.top,
        targetRect: _this.targetRect
      });
    });
    (0, _defineProperty2["default"])(this, "stopTrack", function () {
      _this.removeTrackListeners();
      _this.resetTrackStyles();
      _this.clientStartX = 0;
      _this.clientStartY = 0;
      _this.trackStarted = false;
      _this.targetRect = null;
    });
    (0, _defineProperty2["default"])(this, "addTrackListeners", function () {
      (0, _utils.on)(document, 'pointermove', _this.onPointerMove);
      (0, _utils.on)(document, 'pointerup', _this.onPointerUp);
      (0, _utils.on)(document, 'contextmenu', _this.onPointerUp);
    });
    (0, _defineProperty2["default"])(this, "removeTrackListeners", function () {
      (0, _utils.off)(document, 'pointermove', _this.onPointerMove);
      (0, _utils.off)(document, 'pointerup', _this.onPointerUp);
      (0, _utils.off)(document, 'contextmenu', _this.onPointerUp);
    });
    if (!target || !(target instanceof Element)) {
      throw new Error('TrackGesture needs a valid DOM Element as a target');
    }
    this.onTrack = onTrack;
    this.onTrackEnd = onTrackEnd;
    this.orientation = orientation;
    this.target = target;
    this.trackOnPointerDown = trackOnPointerDown;
    (0, _utils.on)(this.target, 'pointerdown', this.onPointerDown);
  }
  (0, _createClass2["default"])(TrackGesture, [{
    key: "setupTrackStyles",
    value: function setupTrackStyles() {
      document.body.setAttribute('draggable', 'false');
      document.body.style.userSelect = 'none';
      document.body.style.touchAction = 'none';
    }
  }, {
    key: "resetTrackStyles",
    value: function resetTrackStyles() {
      document.body.removeAttribute('draggable');
      document.body.style.userSelect = '';
      document.body.style.touchAction = '';
    }
  }]);
  return TrackGesture;
}();
var initialState = {
  dx: 0,
  dy: 0,
  startX: 0,
  startY: 0,
  targetRect: null,
  dragging: false
};
var useTrackGesture = exports.useTrackGesture = function useTrackGesture(targetRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _useState = (0, _hooks.useState)(initialState),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0, _hooks.useEffect)(function () {
    var disposal = null;
    if (targetRef.current) {
      disposal = new TrackGesture(_objectSpread({
        onTrack: function onTrack(_ref4) {
          var dx = _ref4.dx,
            dy = _ref4.dy,
            startX = _ref4.startX,
            startY = _ref4.startY,
            targetRect = _ref4.targetRect;
          setState({
            dx: dx,
            dy: dy,
            startX: startX,
            startY: startY,
            targetRect: targetRect,
            dragging: true
          });
        },
        onTrackEnd: function onTrackEnd() {
          setState(_objectSpread({}, initialState));
        },
        target: targetRef.current
      }, options)).disposal;
    }
    return function () {
      var _disposal;
      (_disposal = disposal) === null || _disposal === void 0 || _disposal();
      setState(_objectSpread({}, initialState));
    };
  }, [options, targetRef]);
  return state;
};