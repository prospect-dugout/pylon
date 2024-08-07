"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectList = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _hooks = require("preact/hooks");
require("element.scrollintoviewifneeded-polyfill");
var _lib = require("../../lib");
var _mixins = require("../../style/mixins");
var _Button = require("../Button");
var _Icon = require("../Icon");
var _Tooltip = require("../Tooltip");
var _Typography = require("../Typography");
var _jsxRuntime = require("preact/jsx-runtime");
var SelectList = exports.SelectList = function SelectList(_ref) {
  var _ref$autoFocusSearchR = _ref.autoFocusSearchResult,
    autoFocusSearchResult = _ref$autoFocusSearchR === void 0 ? true : _ref$autoFocusSearchR,
    _ref$filterMode = _ref.filterMode,
    filterMode = _ref$filterMode === void 0 ? 'includes' : _ref$filterMode,
    items = _ref.items,
    onSelect = _ref.onSelect,
    _ref$propertyForLabel = _ref.propertyForLabel,
    propertyForLabel = _ref$propertyForLabel === void 0 ? 'label' : _ref$propertyForLabel,
    _ref$propertyForToolt = _ref.propertyForTooltipText,
    propertyForTooltipText = _ref$propertyForToolt === void 0 ? 'tooltipText' : _ref$propertyForToolt,
    _ref$propertyForValue = _ref.propertyForValue,
    propertyForValue = _ref$propertyForValue === void 0 ? 'value' : _ref$propertyForValue,
    searchValue = _ref.searchValue,
    _ref$selectBy = _ref.selectBy,
    selectBy = _ref$selectBy === void 0 ? 'clickOrEnterOrTab' : _ref$selectBy,
    _ref$weights = _ref.weights,
    weights = _ref$weights === void 0 ? {} : _ref$weights;
  var ref = (0, _hooks.useRef)(null);
  var _useState = (0, _hooks.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    focusedIdx = _useState2[0],
    setFocusedIdx = _useState2[1];
  var filteredItems = (0, _hooks.useMemo)(function () {
    return searchValue ? items.filter(function (item) {
      var label = getPropertyByPath(item, propertyForLabel).toString();
      return filterMode === 'startsWith' ? label.toLowerCase().startsWith((searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()) || '') : label.toLowerCase().includes((searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()) || '');
    }) : items;
  }, [items, propertyForLabel, filterMode, searchValue]);
  var handleItemFocus = (0, _hooks.useCallback)(function (item) {
    var idx = filteredItems.findIndex(function (_item) {
      return getPropertyByPath(_item, propertyForValue) === getPropertyByPath(item, propertyForValue);
    });
    setFocusedIdx(idx);
  }, [filteredItems, propertyForValue]);
  var handleItemClick = (0, _hooks.useCallback)(function (item) {
    onSelect === null || onSelect === void 0 || onSelect(item);
    handleItemFocus(item);
  }, [onSelect, handleItemFocus]);
  (0, _hooks.useEffect)(function () {
    if (autoFocusSearchResult && searchValue) {
      var weightedItems = filteredItems.map(function (item, index) {
        return {
          index: index,
          weight: weights[getPropertyByPath(item, propertyForValue)] || 0
        };
      }).sort(function (a, b) {
        return b.weight - a.weight;
      });
      var indexToFocus = weightedItems.length > 0 ? weightedItems[0].index : null;
      setFocusedIdx(indexToFocus);
      if (indexToFocus !== null) {
        (0, _lib.afterNextRender)(function () {
          var _ref$current;
          var focusedEl = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelector("[role=\"option\"]:nth-child(".concat(indexToFocus + 1, ")"));
          if (focusedEl) {
            focusedEl.scrollIntoViewIfNeeded(true);
          }
        });
      }
    }
  }, [autoFocusSearchResult, weights, propertyForValue, searchValue, filteredItems]);

  /* handle arrow keys */
  (0, _hooks.useEffect)(function () {
    var handleKeydown = function handleKeydown(evt) {
      if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
        var _ref$current2;
        evt.preventDefault();
        evt.stopPropagation();
        var max = items.length - 1;
        var next = focusedIdx === null ? 0 : evt.key === 'ArrowDown' ? Math.min(focusedIdx + 1, max) : Math.max(focusedIdx - 1, 0);
        setFocusedIdx(next);
        var focusedEl = (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.querySelector("[role=\"option\"]:nth-child(".concat(next + 1, ")"));
        if (focusedEl) {
          focusedEl.scrollIntoViewIfNeeded(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return function () {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [focusedIdx, items.length]);

  // handle selectOnTab
  (0, _hooks.useEffect)(function () {
    var handleKeydown = function handleKeydown(evt) {
      if (selectBy !== 'click' && evt.key === 'Enter' || selectBy === 'clickOrEnterOrTab' && evt.key === 'Tab') {
        evt.preventDefault();
        evt.stopPropagation();
        if (focusedIdx !== null) {
          handleItemClick(filteredItems[focusedIdx]);
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return function () {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [filteredItems, focusedIdx, handleItemClick, selectBy]);
  return (0, _jsxRuntime.jsxs)(_StyledDiv, {
    ref: ref,
    children: [filteredItems.length > 0 && filteredItems.map(function (item, idx) {
      var tooltipText = getPropertyByPath(item, propertyForTooltipText);
      var label = getPropertyByPath(item, propertyForLabel);
      return (0, _jsxRuntime.jsxs)(StyledOptionBtn, {
        role: "option",
        customVariant: _Button.menuItemVariant,
        onFocus: function onFocus() {
          return handleItemFocus(item);
        },
        onClick: function onClick() {
          return handleItemClick(item);
        },
        $isFocused: focusedIdx === idx,
        children: [highlightSearchValue(label, searchValue), !!tooltipText && (0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
          text: getPropertyByPath(item, propertyForTooltipText),
          overlayPosition: {
            verticalOffset: -8
          },
          children: (0, _jsxRuntime.jsx)(_StyledIcon, {
            icon: "help-circle-outline",
            size: 16,
            className: "help-icon"
          })
        })]
      }, getPropertyByPath(item, propertyForValue));
    }), !filteredItems.length && !!searchValue && (0, _jsxRuntime.jsx)(_StyledTypography, {
      variant: "body3",
      children: "No search results"
    })]
  });
};
function getPropertyByPath(obj, path) {
  return path.split('.').reduce(function (acc, key) {
    return acc[key];
  }, obj);
}
function highlightSearchValue(label, searchValue) {
  if (!searchValue) return label;
  var parts = label.split(new RegExp("(".concat(searchValue, ")"), 'gi'));
  return (0, _jsxRuntime.jsx)("span", {
    children: parts.map(function (part, index) {
      return part.toLowerCase() === searchValue.toLowerCase() ? (0, _jsxRuntime.jsx)("b", {
        children: part
      }, index) : part;
    })
  });
}
var StyledOptionBtn = /*#__PURE__*/(0, _styledComponents["default"])(_Button.Button).withConfig({
  componentId: "sc-1w12ljw-0"
})(["align-items:center;display:flex;justify-content:space-between;background:", ";&:hover{.help-icon{opacity:1;}}&:focus-visible{outline:none;}"], function (p) {
  return p.$isFocused ? 'var(--bg-subtle) !important' : 'transparent';
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1w12ljw-1"
})(["display:flex;flex-direction:column;max-height:15rem;overflow-y:auto;", ""], _mixins.scrollBarMixin);
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-1w12ljw-2"
})(["color:var(--fg-muted);opacity:0;"]);
var _StyledTypography = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  componentId: "sc-1w12ljw-3"
})(["color:var(--fg-muted);padding:var(--gap-2) 0;text-align:center;"]);