"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _hooks = require("preact/hooks");
var _Input = require("../Input");
var _Body = require("./_Body");
var _Header = require("./_Header");
var _Pagination = require("./_Pagination");
var _helpers = require("./helpers");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["columns", "data", "noHeader", "onClickRow", "pagination", "paginationRowsPerPage", "paginationRowsPerPageOptions", "propertyForKey", "rowCssFn", "searchKeys", "searchMinItems", "searchPlaceholder", "sortBy", "tableCss"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Table = exports.Table = function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    _ref$noHeader = _ref.noHeader,
    noHeader = _ref$noHeader === void 0 ? false : _ref$noHeader,
    onClickRow = _ref.onClickRow,
    _ref$pagination = _ref.pagination,
    pagination = _ref$pagination === void 0 ? true : _ref$pagination,
    _ref$paginationRowsPe = _ref.paginationRowsPerPage,
    paginationRowsPerPage = _ref$paginationRowsPe === void 0 ? 20 : _ref$paginationRowsPe,
    _ref$paginationRowsPe2 = _ref.paginationRowsPerPageOptions,
    paginationRowsPerPageOptions = _ref$paginationRowsPe2 === void 0 ? [20, 50, 100] : _ref$paginationRowsPe2,
    _ref$propertyForKey = _ref.propertyForKey,
    propertyForKey = _ref$propertyForKey === void 0 ? 'id' : _ref$propertyForKey,
    rowCssFn = _ref.rowCssFn,
    _ref$searchKeys = _ref.searchKeys,
    searchKeys = _ref$searchKeys === void 0 ? [] : _ref$searchKeys,
    _ref$searchMinItems = _ref.searchMinItems,
    searchMinItems = _ref$searchMinItems === void 0 ? 6 : _ref$searchMinItems,
    _ref$searchPlaceholde = _ref.searchPlaceholder,
    searchPlaceholder = _ref$searchPlaceholde === void 0 ? 'Search' : _ref$searchPlaceholde,
    _ref$sortBy = _ref.sortBy,
    sortBy = _ref$sortBy === void 0 ? '' : _ref$sortBy,
    tableCss = _ref.tableCss,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _hooks.useState)(sortBy),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    _sortBy = _useState2[0],
    _setSortBy = _useState2[1];
  var _useState3 = (0, _hooks.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var _useState5 = (0, _hooks.useState)(pagination ? paginationRowsPerPage : Infinity),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    rowsPerPage = _useState6[0],
    setRowsPerPage = _useState6[1];
  var _useState7 = (0, _hooks.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    rowStart = _useState8[0],
    setRowStart = _useState8[1];
  var onSearchInputChange = function onSearchInputChange(evt) {
    var value = evt.currentTarget.value.trim();
    setQuery(value);
  };
  var filteredData = (0, _helpers.sortData)({
    data: (0, _helpers.applySearch)({
      data: data,
      query: query,
      columns: searchKeys.map(function (key) {
        return columns.find(function (c) {
          return c.accessor === key;
        });
      }).filter(Boolean)
    }),
    sortBy: _sortBy,
    columns: columns
  });
  var currentPageData = filteredData.slice(rowStart, rowsPerPage + rowStart);
  var searchable = searchKeys.length > 0 && searchMinItems <= data.length;
  return (0, _jsxRuntime.jsxs)(_StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
    $_css: [searchable ? 'max-content' : '', '1fr', pagination ? 'max-content' : ''].join(''),
    children: [searchable && (0, _jsxRuntime.jsx)(_StyledInput, {
      type: "search",
      onChange: onSearchInputChange,
      placeholder: searchPlaceholder,
      containerCss: (0, _styledComponents.css)(["height:var(--input-height-sm);margin:", ";"], noHeader ? 0 : 'var(--gap-3) 0')
    }), (0, _jsxRuntime.jsx)(_StyledDiv2, {
      children: (0, _jsxRuntime.jsxs)(_StyledTable, {
        $_css2: tableCss,
        children: [!noHeader && (0, _jsxRuntime.jsx)(_Header.Table_Header, {
          columns: columns,
          onUpdateSortBy: _setSortBy,
          sortBy: _sortBy
        }), (0, _jsxRuntime.jsx)(_Body.Table_Body, {
          propertyForKey: propertyForKey,
          columns: columns,
          currentPageData: currentPageData,
          onClickRow: onClickRow,
          rowCssFn: rowCssFn
        })]
      })
    }), pagination && (0, _jsxRuntime.jsx)(_Pagination.Table_Pagination, {
      count: filteredData.length,
      paginationRowsPerPage: paginationRowsPerPage,
      paginationRowsPerPageOptions: paginationRowsPerPageOptions,
      rowsPerPage: rowsPerPage,
      rowStart: rowStart,
      onRowStartChange: setRowStart,
      onRowsPerPageChange: setRowsPerPage
    })]
  }));
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1hxhpgu-0"
})(["color:var(--fg-default);display:grid;height:100%;grid-template-rows:", ";"], function (p) {
  return p.$_css;
});
var _StyledInput = /*#__PURE__*/(0, _styledComponents["default"])(_Input.Input).withConfig({
  componentId: "sc-1hxhpgu-1"
})(["font-size:var(--font-size-body-2);"]);
var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1hxhpgu-2"
})(["min-height:0;overflow-y:auto;"]);
var _StyledTable = /*#__PURE__*/(0, _styledComponents["default"])("table").withConfig({
  componentId: "sc-1hxhpgu-3"
})(["border-collapse:collapse;border-spacing:0;font-size:var(--font-size-body-2);margin:0;text-align:left;width:100%;", ""], function (p) {
  return p.$_css2;
});