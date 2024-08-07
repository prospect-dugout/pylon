"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageInput_Overlay = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
var _reactEasyCrop = _interopRequireDefault(require("react-easy-crop"));
var _lib = require("../../lib");
var _Form = require("../Form");
var _IconButton = require("../IconButton");
var _InputRange = require("../InputRange");
var _Overlay = require("../Overlay");
var _Stack = require("../Stack");
var _Typography = require("../Typography");
var _cropImage = require("./cropImage");
var _jsxRuntime = require("preact/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ImageInput_Overlay = exports.ImageInput_Overlay = function ImageInput_Overlay(_ref) {
  var opened = _ref.opened,
    setOpened = _ref.setOpened,
    aspectFn = _ref.aspectFn,
    imageSrc = _ref.imageSrc,
    onSubmit = _ref.onSubmit;
  var _useState = (0, _hooks.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0, _hooks.useState)('landscape'),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    aspectRatio = _useState4[0],
    setAspectRatio = _useState4[1];
  var _useState5 = (0, _hooks.useState)({
      x: 0,
      y: 0
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    crop = _useState6[0],
    setCrop = _useState6[1];
  var _useState7 = (0, _hooks.useState)(),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    croppedAreaPixels = _useState8[0],
    setCroppedAreaPixels = _useState8[1];
  var _useState9 = (0, _hooks.useState)(1),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    zoom = _useState10[0],
    setZoom = _useState10[1];
  var _useState11 = (0, _hooks.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    ready = _useState12[0],
    setReady = _useState12[1];
  var onCropComplete = (0, _hooks.useCallback)(function (_croppedArea, croppedAreaPixels) {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var croppedImage;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(onSubmit && croppedAreaPixels)) {
              _context.next = 7;
              break;
            }
            setLoading(true);
            _context.next = 4;
            return (0, _cropImage.cropImage)(imageSrc, croppedAreaPixels, 0);
          case 4:
            croppedImage = _context.sent;
            croppedImage && onSubmit(_objectSpread(_objectSpread({}, croppedImage), {}, {
              aspectRatio: aspectRatio
            }));
            setOpened(false);
          case 7:
            setLoading(false);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _hooks.useEffect)(function () {
    if (opened) {
      (0, _lib.afterNextRender)(function () {
        setReady(true);
      });
    }
  }, [opened]);
  return (0, _jsxRuntime.jsxs)(_StyledOverlay, {
    opened: opened,
    setOpened: setOpened,
    cancelOnEscKey: true,
    position: {
      mode: 'fixed'
    },
    children: [(0, _jsxRuntime.jsxs)(_Stack.Stack, {
      alignItems: "center",
      gap: 3,
      children: [(0, _jsxRuntime.jsx)(_StyledIconButton, {
        icon: "arrow-back",
        onClick: function onClick() {
          return setOpened(false);
        },
        variant: "muted"
      }), (0, _jsxRuntime.jsx)(_Typography.Typography, {
        variant: "h6",
        "css-color": "var(--gray10)",
        children: "Drag the image to adjust it"
      }), (0, _jsxRuntime.jsx)(_StyledFormSubmit, {
        submitting: loading,
        variant: "primary",
        onClick: handleSubmit,
        children: "Done"
      })]
    }), (0, _jsxRuntime.jsx)(_StyledDiv, {
      children: (0, _jsxRuntime.jsx)(_StyledDiv2, {
        children: (0, _jsxRuntime.jsx)(_reactEasyCrop["default"], {
          image: ready ? imageSrc : '' // NOTE: Quick fix for the image not being loaded on first render
          ,
          crop: crop,
          zoom: zoom,
          maxZoom: 3,
          aspect: aspectFn ? aspectFn(aspectRatio) : 19 / 9,
          onCropChange: setCrop,
          onCropComplete: onCropComplete,
          onZoomChange: setZoom,
          showGrid: false,
          onMediaLoaded: function onMediaLoaded(mediaSize) {
            if (mediaSize.naturalHeight > mediaSize.naturalWidth) {
              setAspectRatio('portrait');
            }
          }
        })
      })
    }), (0, _jsxRuntime.jsxs)(_StyledStack, {
      gap: 3,
      alignItems: "center",
      children: [(0, _jsxRuntime.jsx)(_Typography.Typography, {
        variant: "body2",
        weight: "medium",
        "css-color": "var(--gray40)",
        children: "1x"
      }), (0, _jsxRuntime.jsx)(_StyledNativeInputRange, {
        value: zoom,
        min: 1,
        max: 3,
        step: 0.01,
        "aria-labelledby": "Zoom",
        onChange: function onChange(evt) {
          console.log(evt.currentTarget.value);
          setZoom(Number(evt.currentTarget.value));
        }
      }), (0, _jsxRuntime.jsx)(_Typography.Typography, {
        variant: "body2",
        weight: "medium",
        "css-color": "var(--gray40)",
        children: "3x"
      })]
    })]
  });
};
var _StyledOverlay = /*#__PURE__*/(0, _styledComponents["default"])(_Overlay.Overlay).withConfig({
  componentId: "sc-1x44eml-0"
})(["background:rgb(var(--gray-rgb));display:grid;grid-template-rows:max-content 1fr max-content;inset:0;padding:var(--gap-6);"]);
var _StyledIconButton = /*#__PURE__*/(0, _styledComponents["default"])(_IconButton.IconButton).withConfig({
  componentId: "sc-1x44eml-1"
})(["margin-left:calc(-1 * var(--gap-2));"]);
var _StyledFormSubmit = /*#__PURE__*/(0, _styledComponents["default"])(_Form.FormSubmit).withConfig({
  componentId: "sc-1x44eml-2"
})(["margin-left:auto;"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1x44eml-3"
})(["min-height:0;padding:var(--gap-12);"]);
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1x44eml-4"
})(["height:100%;position:relative;.reactEasyCrop_CropArea{color:rgba(var(--gray-rgb),0.5) !important;}"]);
var _StyledStack = /*#__PURE__*/(0, _styledComponents["default"])(_Stack.Stack).withConfig({
  componentId: "sc-1x44eml-5"
})(["min-height:0;margin:0 auto var(--gap-6);max-width:18.5rem;width:100%;"]);
var _StyledNativeInputRange = /*#__PURE__*/(0, _styledComponents["default"])(_InputRange.NativeInputRange).withConfig({
  componentId: "sc-1x44eml-6"
})(["width:100%;"]);