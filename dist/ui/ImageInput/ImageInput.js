"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageInput = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
var _InputFile = require("../InputFile");
var _Overlay = require("./_Overlay");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["onSubmit", "aspectFn", "renderCustomButton", "buttonCss", "buttonProps", "showSelectedFileNames", "placeholder"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var readFile = function readFile(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      return resolve(reader.result);
    }, false);
    reader.readAsDataURL(file);
  });
};
var ImageInput = exports.ImageInput = (0, _compat.forwardRef)(function (_ref, ref) {
  var _onSubmit = _ref.onSubmit,
    aspectFn = _ref.aspectFn,
    renderCustomButton = _ref.renderCustomButton,
    buttonCss = _ref.buttonCss,
    buttonProps = _ref.buttonProps,
    _ref$showSelectedFile = _ref.showSelectedFileNames,
    showSelectedFileNames = _ref$showSelectedFile === void 0 ? false : _ref$showSelectedFile,
    placeholder = _ref.placeholder,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    base64 = _useState2[0],
    setBase64 = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    opened = _useState4[0],
    setOpened = _useState4[1];
  var onInputFileChange = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(evt) {
      var files, file, imageDataUrl;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            files = evt.target.files;
            if (!((files === null || files === void 0 ? void 0 : files.length) > 0)) {
              _context.next = 8;
              break;
            }
            file = files[0];
            _context.next = 5;
            return readFile(file);
          case 5:
            imageDataUrl = _context.sent;
            setBase64(imageDataUrl);
            setOpened(true);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onInputFileChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
    children: [(0, _jsxRuntime.jsx)(_InputFile.InputFile, {
      ref: ref,
      onChange: onInputFileChange,
      onClick: function onClick(evt) {
        evt.currentTarget.value = '';
      },
      renderCustomButton: renderCustomButton,
      buttonCss: buttonCss,
      buttonProps: buttonProps,
      showSelectedFileNames: showSelectedFileNames,
      placeholder: placeholder
    }), opened && !!base64 && (0, _jsxRuntime.jsx)(_Overlay.ImageInput_Overlay, {
      opened: opened,
      aspectFn: aspectFn,
      setOpened: setOpened,
      imageSrc: base64,
      onSubmit: function onSubmit(resp) {
        if (_onSubmit) {
          _onSubmit(resp);
        }
      }
    })]
  }));
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1l4n1if-0"
})(["min-width:0;"]);