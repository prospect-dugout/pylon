"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table_Body = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _jsxRuntime = require("preact/jsx-runtime");
var Table_Body = exports.Table_Body = function Table_Body(_ref) {
  var columns = _ref.columns,
    currentPageData = _ref.currentPageData,
    onClickRow = _ref.onClickRow,
    propertyForKey = _ref.propertyForKey,
    rowCssFn = _ref.rowCssFn;
  return (0, _jsxRuntime.jsx)("tbody", {
    children: currentPageData.map(function (d) {
      return (0, _jsxRuntime.jsx)(TableBodyRow, {
        d: d,
        columns: columns,
        onClickRow: onClickRow,
        propertyForKey: propertyForKey,
        rowCssFn: rowCssFn
      }, "row:".concat(d[propertyForKey]));
    })
  });
};
var TableBodyRow = function TableBodyRow(_ref2) {
  var _rowCssFn;
  var columns = _ref2.columns,
    d = _ref2.d,
    onClickRow = _ref2.onClickRow,
    propertyForKey = _ref2.propertyForKey,
    rowCssFn = _ref2.rowCssFn;
  var _onClick = function onClick(evt) {
    onClickRow === null || onClickRow === void 0 || onClickRow(d, evt);
  };
  return (0, _jsxRuntime.jsx)(_StyledTr, {
    onClick: function onClick(e) {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);
    },
    $_css: onClickRow ? "\n            cursor: pointer;\n            &:hover {\n              background: var(--bg-muted);\n              td:first-child {\n                background: var(--bg-muted);\n              }\n            }\n        " : '',
    $_css2: (_rowCssFn = rowCssFn === null || rowCssFn === void 0 ? void 0 : rowCssFn({
      d: d
    })) !== null && _rowCssFn !== void 0 ? _rowCssFn : '',
    children: columns.map(function (column) {
      var _cellCssFn;
      var accessor = column.accessor,
        alignRight = column.alignRight,
        type = column.type,
        width = column.width,
        formatter = column.formatter,
        cellCssFn = column.cellCssFn,
        renderContent = column.renderContent;
      var _alignRight = alignRight || type === 'number';
      var value = d[accessor];
      var content = null;
      if (renderContent) {
        content = renderContent({
          d: d,
          value: value
        });
      } else {
        content = formatter ? formatter(value) : value;
      }
      return (0, _jsxRuntime.jsx)(_StyledTd, {
        width: width,
        $_css3: _alignRight ? 'right' : 'initial',
        $_css4: _alignRight || type === 'date' ? 'nowrap' : 'initial',
        $_css5: (_cellCssFn = cellCssFn === null || cellCssFn === void 0 ? void 0 : cellCssFn(d)) !== null && _cellCssFn !== void 0 ? _cellCssFn : '',
        children: content
      }, "cell:".concat(accessor, ":").concat(d[propertyForKey]));
    })
  });
};
var _StyledTr = /*#__PURE__*/(0, _styledComponents["default"])("tr").withConfig({
  componentId: "sc-w7xwks-0"
})(["", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledTd = /*#__PURE__*/(0, _styledComponents["default"])("td").withConfig({
  componentId: "sc-w7xwks-1"
})(["border-bottom:0.0625rem solid var(--border-muted);color:inherit;padding:var(--gap-3) var(--gap-3);text-align:", ";white-space:", ";", ""], function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
}, function (p) {
  return p.$_css5;
});