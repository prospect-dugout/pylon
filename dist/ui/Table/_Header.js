"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table_Header = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = require("../Icon");
var _helpers = require("./helpers");
var _jsxRuntime = require("preact/jsx-runtime");
var Table_Header = exports.Table_Header = function Table_Header(_ref) {
  var columns = _ref.columns,
    onUpdateSortBy = _ref.onUpdateSortBy,
    sortBy = _ref.sortBy;
  return (0, _jsxRuntime.jsx)("thead", {
    children: (0, _jsxRuntime.jsx)("tr", {
      children: columns === null || columns === void 0 ? void 0 : columns.map(function (column) {
        return (0, _jsxRuntime.jsx)(TableHeaderCell, {
          column: column,
          sortBy: sortBy,
          onUpdateSortBy: onUpdateSortBy
        }, column.accessor);
      })
    })
  });
};
var TableHeaderCell = function TableHeaderCell(_ref2) {
  var column = _ref2.column,
    onUpdateSortBy = _ref2.onUpdateSortBy,
    sortBy = _ref2.sortBy;
  var accessor = column.accessor,
    _column$alignRight = column.alignRight,
    alignRight = _column$alignRight === void 0 ? false : _column$alignRight,
    _column$noSortable = column.noSortable,
    noSortable = _column$noSortable === void 0 ? false : _column$noSortable,
    title = column.title,
    type = column.type,
    _column$width = column.width,
    width = _column$width === void 0 ? 0 : _column$width;
  var sortable = title && !noSortable;
  var activeSort = sortable && (0, _helpers.getSortKey)(sortBy) === accessor;
  var direction = activeSort ? (0, _helpers.getSortDirection)(sortBy) : 0;
  var shouldAlignRight = type === 'number' || alignRight;
  var _onClick = function onClick() {
    var newSortBy = !activeSort || direction > 0 ? "-".concat(accessor) : accessor;
    onUpdateSortBy === null || onUpdateSortBy === void 0 || onUpdateSortBy(newSortBy);
  };
  return (0, _jsxRuntime.jsx)(_StyledTh, {
    onClick: function onClick() {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick();
    },
    style: {
      minWidth: width
    },
    children: (0, _jsxRuntime.jsxs)(_StyledDiv, {
      $_css: sortable ? 'pointer' : 'default',
      $_css2: shouldAlignRight ? 'row-reverse' : 'unset',
      children: [title, sortable && (0, _jsxRuntime.jsx)(_StyledIcon, {
        icon: "arrow-up",
        $_css3: shouldAlignRight ? '0.25rem' : 'unset',
        $_css4: !shouldAlignRight ? '0.25rem' : 'unset',
        $_css5: activeSort ? 'var(--icon-1)' : 'inherit',
        $_css6: activeSort ? 1 : 0.3,
        $_css7: direction <= 0 ? 'rotate(180deg)' : 'unset'
      })]
    })
  });
};
var _StyledTh = /*#__PURE__*/(0, _styledComponents["default"])("th").withConfig({
  componentId: "sc-1c332yb-0"
})(["border-bottom:0.0625rem solid var(--border-muted);font-weight:var(--font-weight-medium);padding:var(--gap-3);"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1c332yb-1"
})(["align-items:center;cursor:", ";display:flex;flex-direction:", ";justify-content:flex-start;&:hover > div{opacity:1;}"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-1c332yb-2"
})(["margin-right:", ";margin-left:", ";color:", ";display:flex;opacity:", ";transform:", ";transition:transform 0.2s linear,opacity 0.1s linear;> svg{width:1rem;height:1rem;}"], function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
}, function (p) {
  return p.$_css6;
}, function (p) {
  return p.$_css7;
});