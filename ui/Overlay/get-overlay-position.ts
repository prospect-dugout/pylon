import {RefObject} from 'preact';
import {OverlayPosition} from './Overlay';

export const getOverlayPosition = (
  overlayRef: RefObject<HTMLDivElement>,
  {
    horizontalAlign = 'center',
    horizontalOffset = 0,
    mode = 'absolute',
    noHorizontalOverlap = false,
    noVerticalOverlap = true,
    positionEvent,
    positionTarget,
    verticalAlign = 'bottom',
    verticalOffset = 0,
  }: OverlayPosition,
): string => {
  const _overlayElement = overlayRef.current;
  if (!(positionTarget || positionEvent) || !_overlayElement) return '';
  // Target RectS
  const _tr = getPositionTargetRect({
    positionEvent,
    positionTarget,
  });
  // Overlay Rect
  const _or = _overlayElement.getBoundingClientRect();
  let _top: string | number = 'auto';
  let _right: string | number = 'auto';
  let _bottom: string | number = 'auto';
  let _left: string | number = 'auto';

  {
    // Horizontal Position
    const _offset = toNumber(horizontalOffset);
    const _windowWidth = window.innerWidth;
    const _rectWidth = _or.width + _offset;
    const _leftEmptyWidth = noHorizontalOverlap ? _tr.left : _tr.right;
    const _rightEmptyWidth =
      _windowWidth - (noHorizontalOverlap ? _tr.right : _tr.left);
    const _targetLeftFromCenter = _tr.left + _tr.width / 2;
    const _targetRightromCenter = _windowWidth - _tr.right + _tr.width / 2;
    const _fitsLeft = _leftEmptyWidth >= _rectWidth;
    const _fitsRight = _rightEmptyWidth >= _rectWidth;
    const _fitsCenter =
      _targetLeftFromCenter >= _rectWidth / 2 &&
      _targetRightromCenter >= _rectWidth / 2;

    switch (horizontalAlign) {
      case 'left':
        if (_fitsLeft) {
          _right =
            _windowWidth -
            (noHorizontalOverlap ? _tr.left : _tr.right) -
            _offset;
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
    const _offset = toNumber(verticalOffset);
    const _windowHeight = window.innerHeight;
    const _rectHeight = _or.height + _offset;
    const _topEmptyHeight = noVerticalOverlap ? _tr.top : _tr.bottom;
    const _bottomEmptyHeight =
      _windowHeight - (noVerticalOverlap ? _tr.bottom : _tr.top);
    const _targetTopFromMiddle = _tr.top + _tr.height / 2;
    const _targetBottomFromMiddle = _windowHeight - _tr.bottom + _tr.height / 2;
    const _fitsTop = _topEmptyHeight >= _rectHeight;
    const _fitsBottom = _bottomEmptyHeight >= _rectHeight;
    const _fitsMiddle =
      _targetTopFromMiddle >= _rectHeight / 2 &&
      _targetBottomFromMiddle >= _rectHeight / 2;

    switch (verticalAlign) {
      case 'top':
        if (_fitsTop) {
          _bottom =
            _windowHeight -
            (noVerticalOverlap ? _tr.top : _tr.bottom) +
            _offset;
        } else {
          _top = 0;
        }
        break;
      case 'middle':
        if (_fitsMiddle) {
          _top = _tr.top + _tr.height / 2 - _or.height / 2 + _offset;
        } else if (_bottomEmptyHeight >= _topEmptyHeight) {
          _top = 0;
        } else {
          _bottom = 0;
        }
        break;
      default:
        // 'Bottom'
        if (_fitsBottom) {
          _top = (noVerticalOverlap ? _tr.bottom : _tr.top) + _offset;
        } else {
          _bottom = 0;
        }
        break;
    }
  }

  const isFixed = mode === 'fixed';

  return [
    toSizeValue(_top, isFixed ? 0 : window.scrollY),
    toSizeValue(_right, isFixed ? 0 : -window.scrollX),
    toSizeValue(_bottom, isFixed ? 0 : -window.scrollY),
    toSizeValue(_left, isFixed ? 0 : window.scrollX),
  ].join(' ');
};

function toSizeValue(val: string | number, sum = 0): string {
  if (typeof val === 'number') {
    return `${val + sum}px`;
  }
  return 'auto';
}

function toNumber(val: string | number): number {
  if (typeof val === 'number') {
    return val;
  }
  return 0;
}

function getPositionTargetRect({
  positionEvent,
  positionTarget,
}: Pick<OverlayPosition, 'positionEvent' | 'positionTarget'>) {
  if (positionEvent) {
    return {
      left: positionEvent.clientX,
      top: positionEvent.clientY,
      width: 0,
      height: 0,
      right: positionEvent.clientX,
      bottom: positionEvent.clientY,
    };
  }
  return positionTarget!.getBoundingClientRect();
}
