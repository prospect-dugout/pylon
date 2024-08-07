"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _compat = require("preact/compat");
var _hooks = require("preact/hooks");
require("element.scrollintoviewifneeded-polyfill");
var _react = require("react");
var _lib = require("../../lib");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _mixins = require("../../style/mixins");
var _Checkbox = require("../Checkbox");
var _Icon = require("../Icon");
var _Input = require("../Input");
var _Overlay = require("../Overlay");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["defaultValue", "disabled", "id", "invalid", "multiple", "onBlur", "onChange", "options", "overlayPosition", "placeholder", "searchable", "size", "value"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Select = exports.Select = (0, _compat.forwardRef)(function (_ref, _ref4) {
  var defaultValue = _ref.defaultValue,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    id = _ref.id,
    _ref$invalid = _ref.invalid,
    invalid = _ref$invalid === void 0 ? false : _ref$invalid,
    multiple = _ref.multiple,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    options = _ref.options,
    overlayPosition = _ref.overlayPosition,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Select an option' : _ref$placeholder,
    _ref$searchable = _ref.searchable,
    searchable = _ref$searchable === void 0 ? false : _ref$searchable,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    value = _ref.value,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var innerRef = (0, _hooks.useRef)(null);
  var overlayRef = (0, _hooks.useRef)(null);
  var searchInputRef = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _hooks.useState)(optionsFromValue({
      options: options,
      value: value || defaultValue,
      multiple: multiple
    })),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    selectedOptions = _useState4[0],
    setSelectedOptions = _useState4[1];
  var _useState5 = (0, _hooks.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    focusedIdx = _useState6[0],
    setFocusedIdx = _useState6[1];
  var _useState7 = (0, _hooks.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    opened = _useState8[0],
    setOpened = _useState8[1];
  var selectedValues = selectedOptions.map(function (option) {
    return option.value;
  });
  var filteredOptions = searchable && searchValue ? options.filter(function (option) {
    return option.label.toLowerCase().includes(searchValue.toLowerCase());
  }) : options;
  var handleSelectOption = function handleSelectOption(option) {
    setSelectedOptions(function (prev) {
      var result;
      if (multiple) {
        if (selectedValues.includes(option.value)) {
          result = prev.filter(function (item) {
            return item.value !== option.value;
          });
        } else {
          result = [].concat((0, _toConsumableArray2["default"])(prev), [option]).sort(function (a, b) {
            return options.findIndex(function (item) {
              return item.value === a.value;
            }) - options.findIndex(function (item) {
              return item.value === b.value;
            });
          });
        }
      } else {
        result = [option];
      }
      var modifiedTarget = {
        name: props.name,
        value: multiple ? result.map(function (item) {
          return item.value;
        }) : result[0].value
      };
      var modifiedEvt = Object.assign({}, new Event('change'), {
        currentTarget: modifiedTarget,
        target: modifiedTarget
      });
      onChange === null || onChange === void 0 || onChange(modifiedEvt);
      if (!multiple) {
        setOpened(false);
        (0, _lib.afterNextRender)(function () {
          var _innerRef$current;
          (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.focus();
        });
      }

      // Update state only if uncontrolled
      return value !== undefined ? prev : result;
    });
  };
  var onOverlayKeydown = function onOverlayKeydown(evt) {
    if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
      var _overlayRef$current;
      evt.preventDefault();
      evt.stopPropagation();
      // Use filteredOptions here instead of options
      var maxIndex = filteredOptions.length - 1;
      var nextIdx = focusedIdx === null ? 0 : evt.key === 'ArrowDown' ? Math.min(focusedIdx + 1, maxIndex) : Math.max(focusedIdx - 1, 0);
      setFocusedIdx(nextIdx);
      var focusedEl = (_overlayRef$current = overlayRef.current) === null || _overlayRef$current === void 0 ? void 0 : _overlayRef$current.querySelector("[role=\"option\"]:nth-child(".concat(nextIdx + 1, ")"));
      if (focusedEl) {
        focusedEl.scrollIntoViewIfNeeded(true);
      }
    }
    if (evt.key === 'Enter' && focusedIdx !== null) {
      evt.preventDefault();
      evt.stopPropagation();
      // Use filteredOptions for selection as well
      var selectedOption = filteredOptions[focusedIdx];
      if (selectedOption) {
        handleSelectOption(selectedOption);
      }
    }
    if (evt.key === 'Escape') {
      setOpened(false);
      (0, _lib.afterNextRender)(function () {
        var _innerRef$current2;
        (_innerRef$current2 = innerRef.current) === null || _innerRef$current2 === void 0 || _innerRef$current2.focus();
      });
    }
  };
  var handleOptionClick = function handleOptionClick(option) {
    handleSelectOption(option);
    if (multiple) {
      var _focusedIdx = options.findIndex(function (item) {
        return item.value === option.value;
      });
      setFocusedIdx(_focusedIdx);
    }
  };
  var onInputKeydown = function onInputKeydown(evt) {
    if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
      evt.preventDefault();
      evt.stopPropagation();
      setOpened(true);
      if (focusedIdx === null && evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
        setFocusedIdx(0);
      }
    }
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      evt.stopPropagation();
      if (!disabled) {
        setOpened(!opened);
      }
    }
  };
  var onInputMouseDown = function onInputMouseDown() {
    setOpened(function (prev) {
      if (prev) {
        var _innerRef$current3;
        (_innerRef$current3 = innerRef.current) === null || _innerRef$current3 === void 0 || _innerRef$current3.focus();
      }
      return !prev;
    });
  };
  var onInputBlur = function onInputBlur(evt) {
    var modifiedEvt = Object.assign({}, evt, {
      target: {
        name: props.name,
        value: multiple ? selectedValues : selectedValues[0]
      }
    });
    onBlur === null || onBlur === void 0 || onBlur(modifiedEvt);
  };
  var onSearchInputChange = (0, _react.useCallback)(function (evt) {
    setSearchValue(evt.target.value);
  }, [setSearchValue]);
  var handleOptionFocus = function handleOptionFocus(option) {
    var idx = options.findIndex(function (_ref2) {
      var value = _ref2.value;
      return value === option.value;
    });
    setFocusedIdx(idx);
  };
  var scrollIntoOption = function scrollIntoOption(option) {
    if (!option) return;
    var idx = options.findIndex(function (_ref3) {
      var value = _ref3.value;
      return value === option.value;
    });
    if (idx < 0) return;
    (0, _lib.afterNextRender)(function () {
      var _overlayRef$current2;
      var el = (_overlayRef$current2 = overlayRef.current) === null || _overlayRef$current2 === void 0 ? void 0 : _overlayRef$current2.querySelector("[role=\"option\"]:nth-child(".concat(idx + 1, ")"));
      if (el) {
        el.scrollIntoViewIfNeeded(true);
      }
    });
  };
  (0, _hooks.useEffect)(function () {
    if (opened) {
      if (searchable) {
        setSearchValue('');
        (0, _lib.afterNextRender)(function () {
          var _searchInputRef$curre;
          (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 || _searchInputRef$curre.focus();
        });
      }
      if (selectedOptions.length > 0) {
        scrollIntoOption(selectedOptions[0]);
        setFocusedIdx(options.findIndex(function (item) {
          return item.value === selectedOptions[0].value;
        }));
      }
    } else {
      // Reset state when closed
      setFocusedIdx(null);
    }
  }, [opened]);
  (0, _hooks.useEffect)(function () {
    // If controlled, select the options from the value
    if (value !== undefined) {
      setSelectedOptions(optionsFromValue({
        options: options,
        multiple: multiple,
        value: value
      }));
    }
  }, [options, multiple, value]);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)(StyledInput, _objectSpread(_objectSpread({
      id: id,
      ref: function ref(el) {
        if (typeof _ref4 === 'function') {
          _ref4(el);
        } else if (_ref4) {
          _ref4.current = el;
        }
        innerRef.current = el;
      },
      tabIndex: disabled ? -1 : 0,
      role: "button",
      "aria-expanded": opened,
      "aria-haspopup": "listbox",
      onKeyDown: onInputKeydown,
      onMouseDown: onInputMouseDown,
      onBlur: onInputBlur,
      $disabled: disabled,
      $size: size,
      $invalid: invalid,
      $opened: opened,
      $css: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props)
    }, props), {}, {
      children: [(0, _jsxRuntime.jsx)(StyledLabel, {
        $isPlaceholder: !(selectedOptions !== null && selectedOptions !== void 0 && selectedOptions.length),
        $disabled: disabled,
        children: selectedOptions !== null && selectedOptions !== void 0 && selectedOptions.length ? selectedOptions.map(function (option) {
          return option.label;
        }).join(', ') : placeholder
      }), (0, _jsxRuntime.jsx)(_StyledIcon, {
        icon: "chevron-down",
        size: 14
      })]
    })), (0, _jsxRuntime.jsxs)(_StyledOverlay, {
      ref: overlayRef,
      "data-select-overlay": true,
      opened: opened,
      setOpened: setOpened,
      onKeyDown: onOverlayKeydown,
      cancelOnEscKey: true,
      cancelOnOutsideClick: true,
      closeOthers: "[data-select-overlay=true]",
      noAutoFocus: searchable,
      position: _objectSpread({
        positionTarget: innerRef.current,
        horizontalAlign: 'right'
      }, overlayPosition),
      $_css: searchable && (0, _styledComponents.css)(["display:grid;grid-template-rows:auto 1fr;"]),
      children: [searchable && (0, _jsxRuntime.jsx)(_Input.Input, {
        ref: searchInputRef,
        size: "sm",
        placeholder: "Seach",
        onChange: onSearchInputChange,
        variant: "search",
        type: "search",
        startAdornment: (0, _jsxRuntime.jsx)(_Icon.Icon, {
          icon: "search",
          size: 16
        }),
        containerCss: (0, _styledComponents.css)(["flex-shrink:0;", ";"], filteredOptions.length > 0 && (0, _styledComponents.css)(["margin:var(--gap-1) 0 var(--gap-2);"]))
      }), (0, _jsxRuntime.jsx)(StyledOptionsContainer, {
        children: filteredOptions.map(function (option, idx) {
          return (0, _jsxRuntime.jsxs)(StyledOption, {
            role: "option",
            onMouseDown: function onMouseDown(evt) {
              return evt.preventDefault();
            },
            onFocus: function onFocus() {
              return handleOptionFocus(option);
            },
            onClick: function onClick() {
              return handleOptionClick(option);
            },
            $multiple: !!multiple,
            $isSelected: selectedValues.includes(option.value),
            $isFocused: focusedIdx !== null && focusedIdx === idx,
            children: [multiple && (0, _jsxRuntime.jsx)(_Checkbox.Checkbox, {
              checked: selectedValues.includes(option.value),
              tabIndex: -1
            }), option.label]
          }, option.value);
        })
      })]
    })]
  });
});

/* prettier-ignore */
var StyledInput = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-17mumb0-0"
})(["align-items:center;background:var(--input-bg);border-radius:", ";border:", ";color:", ";cursor:", ";display:inline-flex;font-size:var(--input-font-size-", ");gap:var(--gap-3);height:", ";justify-content:space-between;outline:0;padding:", ";pointer-events:", ";user-select:none;width:100%;", " ", ""], function (p) {
  return "var(--input-radius-".concat(p.$size, ")");
}, function (p) {
  return p.$invalid ? '1px solid var(--input-outline-error-color)' : '1px solid var(--input-border-color)';
}, function (p) {
  return p.$disabled ? 'var(--fg-disabled)' : 'var(--fg-default)';
}, function (p) {
  return p.$disabled ? 'not-allowed' : 'pointer';
}, function (p) {
  return p.$size;
}, function (p) {
  return "var(--input-height-".concat(p.$size, ")");
}, function (p) {
  return "var(--input-padding-".concat(p.$size, ")");
}, function (p) {
  return p.$disabled ? 'none' : 'auto';
}, function (p) {
  return p.$opened && (0, _styledComponents.css)(["border-color:", ";box-shadow:inset 0 0 0 1px ", ";"], p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)', p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)');
}, function (p) {
  return !p.$opened && (0, _styledComponents.css)(["&:focus{border-color:", ";box-shadow:inset 0 0 0 1px ", ";}"], p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)', p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)');
});
var StyledLabel = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-17mumb0-1"
})(["line-height:1.3;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ""], function (p) {
  return p.$isPlaceholder && (0, _styledComponents.css)(["color:", ";"], p.$disabled ? 'var(--fg-disabled)' : 'var(--fg-placeholder)');
});

// prettier-ignore
var StyledOption = /*#__PURE__*/_styledComponents["default"].button.withConfig({
  componentId: "sc-17mumb0-2"
})(["align-items:center;background:", ";border-radius:var(--radius-1);color:", ";cursor:pointer;display:flex;flex-shrink:0;gap:var(--gap-2);height:var(--button-height-md);padding:var(--button-padding-md);&:focus{outline:none;}&:hover{background:", ";}"], function (p) {
  return p.$isSelected && !p.$multiple ? 'var(--primary50)' : p.$isFocused ? 'var(--bg-subtle)' : 'transparent';
}, function (p) {
  return p.$isSelected && !p.$multiple ? 'var(--white)' : 'inherit';
}, function (p) {
  return !p.$isSelected || p.$multiple ? 'var(--bg-minimal)' : '';
});
var StyledOptionsContainer = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  componentId: "sc-17mumb0-3"
})(["display:flex;flex-direction:column;max-height:22rem;min-width:0;overflow-y:auto;", ""], _mixins.scrollBarMixin);
function optionsFromValue(_ref5) {
  var options = _ref5.options,
    value = _ref5.value,
    multiple = _ref5.multiple;
  if (multiple) {
    var valueArray = Array.isArray(value) ? value : value ? [value] : [];
    return options.filter(function (option) {
      return valueArray.includes(option.value);
    });
  } else {
    return options.filter(function (option) {
      return option.value === value;
    });
  }
}
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-17mumb0-4"
})(["color:var(--fg-inherit);flex-shrink:0;"]);
var _StyledOverlay = /*#__PURE__*/(0, _styledComponents["default"])(_Overlay.Overlay).withConfig({
  componentId: "sc-17mumb0-5"
})(["", ";", ""], _Overlay.dropdownOverlayCss, function (p) {
  return p.$_css;
});