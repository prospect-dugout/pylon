"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _selection = require("../../lib/selection");
var _useTextareaHistory2 = require("./use-textarea-history");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultValue", "highlightLinks", "invalid"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Textarea = exports.Textarea = (0, _compat.forwardRef)(function (_ref, _ref2) {
  var defaultValue = _ref.defaultValue,
    _ref$highlightLinks = _ref.highlightLinks,
    highlightLinks = _ref$highlightLinks === void 0 ? false : _ref$highlightLinks,
    _ref$invalid = _ref.invalid,
    invalid = _ref$invalid === void 0 ? false : _ref$invalid,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _defaultValue = (0, _hooks.useMemo)(function () {
    return defaultValue;
  }, []);
  var innerRef = (0, _hooks.useRef)(null);
  var _useTextareaHistory = (0, _useTextareaHistory2.useTextareaHistory)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', innerRef),
    updateHistory = _useTextareaHistory.updateHistory,
    undo = _useTextareaHistory.undo,
    redo = _useTextareaHistory.redo;
  var appleHighlightLinks = function appleHighlightLinks() {
    var input = innerRef.current;
    var currentText = input.innerText;
    var updatedHtml = convertUrlsToLinks(currentText);
    if (currentText !== updatedHtml) {
      // TODO: Highlight links + enter breaks restores selection incorrecttly
      var savedSelection = (0, _selection.saveSelection)(input);
      input.innerHTML = updatedHtml;
      if (savedSelection) {
        (0, _selection.restoreSelection)(input, savedSelection);
      }
    }
  };
  var onInput = function onInput(evt) {
    var _props$onInput, _props$onChange;
    var shouldUpdateHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (highlightLinks) {
      appleHighlightLinks();
    }
    var currentText = evt.target.innerText;
    var modifiedEvt = Object.assign({}, evt, {
      target: {
        name: props.name,
        value: currentText
      }
    });
    shouldUpdateHistory && updateHistory(currentText);
    (_props$onInput = props.onInput) === null || _props$onInput === void 0 || _props$onInput.call(props, modifiedEvt);
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, modifiedEvt);
  };
  var handlePaste = function handlePaste(evt) {
    evt.preventDefault();
    var text = evt.clipboardData.getData('text/plain');
    var selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    var range = selection.getRangeAt(0);
    range.deleteContents();
    var textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    // Trigger input event after pasting
    onInput({
      target: evt.target
    });
  };
  var handleBlur = function handleBlur(evt) {
    var _props$onBlur;
    var modifiedEvt = Object.assign({}, evt, {
      target: {
        name: props.name,
        value: evt.target.innerText
      }
    });
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, modifiedEvt);
  };
  var handleKeyDown = function handleKeyDown(evt) {
    if (evt.ctrlKey && evt.key === 'z') {
      evt.preventDefault();
      var changed = undo();
      if (changed) {
        onInput({
          target: evt.target
        }, false);
      }
    } else if (evt.ctrlKey && (evt.key === 'y' || evt.key === 'Z' || evt.shiftKey && evt.key === 'z')) {
      evt.preventDefault();
      var _changed = redo();
      if (_changed) {
        onInput({
          target: evt.target
        }, false);
      }
    }
  };
  return (0, _jsxRuntime.jsx)(StyledInput, _objectSpread(_objectSpread({
    ref: function ref(e) {
      if (typeof _ref2 === 'function') {
        _ref2(e);
      } else if (_ref2) {
        _ref2.current = e;
      }
      innerRef.current = e;
    },
    onPaste: handlePaste,
    contentEditable: true,
    onInput: onInput,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    "aria-invalid": invalid,
    $invalid: invalid
  }, props), {}, {
    children: _defaultValue
  }));
});
var StyledInput = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-1bpqtzl-0"
})(["background-color:var(--bg-default);border-radius:var(--input-radius-md);display:block;height:auto;max-height:25rem;overflow-wrap:break-word;overflow-y:auto;padding:11px var(--gap-4);white-space:pre-wrap;width:100%;border:1px solid ", ";outline:0;&:focus-visible{border-color:", ";box-shadow:inset 0 0 0 1px ", ";}& .highlighted-link{color:var(--primary50);}"], function (p) {
  return p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-border-color)';
}, function (p) {
  return p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)';
}, function (p) {
  return p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)';
});
function convertUrlsToLinks(text) {
  var urlRegex = /https?:\/\/[^\s]+/g;
  // Convert URLs to links
  var newText = text.replace(urlRegex, function (url) {
    return "<span class=\"highlighted-link\">".concat(url, "</span>");
  });

  // Remove <a> tags from non-URLs
  var dummyDiv = document.createElement('div');
  dummyDiv.innerHTML = newText;
  dummyDiv.querySelectorAll('a').forEach(function (a) {
    if (!urlRegex.test(a.href)) {
      a.replaceWith.apply(a, (0, _toConsumableArray2["default"])(a.childNodes));
    }
  });
  return dummyDiv.innerHTML;
}