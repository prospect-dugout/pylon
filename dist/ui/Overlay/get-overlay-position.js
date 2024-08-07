"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverlayPosition = void 0;
var getOverlayPosition = exports.getOverlayPosition = function getOverlayPosition(overlayRef, _ref) {
  var _ref$horizontalAlign = _ref.horizontalAlign,
    horizontalAlign = _ref$horizontalAlign === void 0 ? 'center' : _ref$horizontalAlign,
    _ref$horizontalOffset = _ref.horizontalOffset,
    horizontalOffset = _ref$horizontalOffset === void 0 ? 0 : _ref$horizontalOffset,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'absolute' : _ref$mode,
    _ref$noHorizontalOver = _ref.noHorizontalOverlap,
    noHorizontalOverlap = _ref$noHorizontalOver === void 0 ? false : _ref$noHorizontalOver,
    _ref$noVerticalOverla = _ref.noVerticalOverlap,
    noVerticalOverlap = _ref$noVerticalOverla === void 0 ? true : _ref$noVerticalOverla,
    positionEvent = _ref.positionEvent,
    positionTarget = _ref.positionTarget,
    _ref$verticalAlign = _ref.verticalAlign,
    verticalAlign = _ref$verticalAlign === void 0 ? 'bottom' : _ref$verticalAlign,
    _ref$verticalOffset = _ref.verticalOffset,
    verticalOffset = _ref$verticalOffset === void 0 ? 0 : _ref$verticalOffset;
  var _overlayElement = overlayRef.current;
  if (!(positionTarget || positionEvent) || !_overlayElement) return '';
  // Target RectS
  var _tr = getPositionTargetRect({
    positionEvent: positionEvent,
    positionTarget: positionTarget
  });
  // Overlay Rect
  var _or = _overlayElement.getBoundingClientRect();
  var _top = 'auto';
  var _right = 'auto';
  var _bottom = 'auto';
  var _left = 'auto';
  {
    // Horizontal Position
    var _offset = toNumber(horizontalOffset);
    var _windowWidth = window.innerWidth;
    var _rectWidth = _or.width + _offset;
    var _leftEmptyWidth = noHorizontalOverlap ? _tr.left : _tr.right;
    var _rightEmptyWidth = _windowWidth - (noHorizontalOverlap ? _tr.right : _tr.left);
    var _targetLeftFromCenter = _tr.left + _tr.width / 2;
    var _targetRightromCenter = _windowWidth - _tr.right + _tr.width / 2;
    var _fitsLeft = _leftEmptyWidth >= _rectWidth;
    var _fitsRight = _rightEmptyWidth >= _rectWidth;
    var _fitsCenter = _targetLeftFromCenter >= _rectWidth / 2 && _targetRightromCenter >= _rectWidth / 2;
    switch (horizontalAlign) {
      case 'left':
        if (_fitsLeft) {
          _right = _windowWidth - (noHorizontalOverlap ? _tr.left : _tr.right) - _offset;
        } else {
          _left = 0;
        }
        break;
      case 'center':
        if (_fitsCenter) {
          _left = _tr.left + _tr.width / 2 - _or.width / 2 + _offset;
        } else if (_rightEmptyWidth >= _leftEmptyWidth) {
          _left = 0;
        } else {
          _right = 0;
        }
        break;
      default:
        // 'right'
        if (_fitsRight) {
          _left = (noHorizontalOverlap ? _tr.right : _tr.left) + _offset;
        } else {
          _right = 0;
        }
        break;
    }
  }
  {
    // Vertical Position
    var _offset2 = toNumber(verticalOffset);
    var _windowHeight = window.innerHeight;
    var _rectHeight = _or.height + _offset2;
    var _topEmptyHeight = noVerticalOverlap ? _tr.top : _tr.bottom;
    var _bottomEmptyHeight = _windowHeight - (noVerticalOverlap ? _tr.bottom : _tr.top);
    var _targetTopFromMiddle = _tr.top + _tr.height / 2;
    var _targetBottomFromMiddle = _windowHeight - _tr.bottom + _tr.height / 2;
    var _fitsTop = _topEmptyHeight >= _rectHeight;
    var _fitsBottom = _bottomEmptyHeight >= _rectHeight;
    var _fitsMiddle = _targetTopFromMiddle >= _rectHeight / 2 && _targetBottomFromMiddle >= _rectHeight / 2;
    switch (verticalAlign) {
      case 'top':
        if (_fitsTop) {
          _bottom = _windowHeight - (noVerticalOverlap ? _tr.top : _tr.bottom) + _offset2;
        } else {
          _top = 0;
        }
        break;
      case 'middle':
        if (_fitsMiddle) {
          _top = _tr.top + _tr.height / 2 - _or.height / 2 + _offset2;
        } else if (_bottomEmptyHeight >= _topEmptyHeight) {
          _top = 0;
        } else {
          _bottom = 0;
        }
        break;
      default:
        // 'Bottom'
        if (_fitsBottom) {
          _top = (noVerticalOverlap ? _tr.bottom : _tr.top) + _offset2;
        } else {
          _bottom = 0;
        }
        break;
    }
  }
  var isFixed = mode === 'fixed';
  return [toSizeValue(_top, isFixed ? 0 : window.scrollY), toSizeValue(_right, isFixed ? 0 : -window.scrollX), toSizeValue(_bottom, isFixed ? 0 : -window.scrollY), toSizeValue(_left, isFixed ? 0 : window.scrollX)].join(' ');
};
function toSizeValue(val) {
  var sum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (typeof val === 'number') {
    return "".concat(val + sum, "px");
  }
  return 'auto';
}
function toNumber(val) {
  if (typeof val === 'number') {
    return val;
  }
  return 0;
}
function getPositionTargetRect(_ref2) {
  var positionEvent = _ref2.positionEvent,
    positionTarget = _ref2.positionTarget;
  if (positionEvent) {
    return {
      left: positionEvent.clientX,
      top: positionEvent.clientY,
      width: 0,
      height: 0,
      right: positionEvent.clientX,
      bottom: positionEvent.clientY
    };
  }
  return positionTarget.getBoundingClientRect();
}