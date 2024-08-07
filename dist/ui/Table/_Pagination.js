"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table_Pagination = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = require("../Icon");
var _Stack = require("../Stack");
var _jsxRuntime = require("preact/jsx-runtime");
var Table_Pagination = exports.Table_Pagination = function Table_Pagination(_ref) {
  var count = _ref.count,
    onRowsPerPageChange = _ref.onRowsPerPageChange,
    onRowStartChange = _ref.onRowStartChange,
    paginationRowsPerPage = _ref.paginationRowsPerPage,
    paginationRowsPerPageOptions = _ref.paginationRowsPerPageOptions,
    rowsPerPage = _ref.rowsPerPage,
    rowStart = _ref.rowStart;
  if (rowsPerPage > count && rowsPerPage === paginationRowsPerPage) {
    return null;
  }
  var rightDisabled = rowStart + rowsPerPage >= count;
  var leftDisabled = rowStart === 0;
  var to = rowStart + rowsPerPage > count ? count : rowStart + rowsPerPage;
  var onArrowClick = function onArrowClick(direction) {
    if (direction === 'left') {
      onRowStartChange(Math.max(0, rowStart - rowsPerPage));
    } else if (direction === 'right') {
      var newRowStart = rowStart + rowsPerPage;
      onRowStartChange(newRowStart > count ? rowsPerPage : newRowStart);
    }
  };
  return (0, _jsxRuntime.jsxs)(_StyledStack, {
    alignItems: "center",
    justifyContent: "flex-end",
    children: [(0, _jsxRuntime.jsxs)(_Stack.Stack, {
      alignItems: "center",
      "css-mr": 12,
      children: ["Rows per page:", ' ', (0, _jsxRuntime.jsx)(_StyledSelect, {
        value: rowsPerPage,
        onChange: function onChange(evt) {
          onRowStartChange(0);
          onRowsPerPageChange(parseInt(evt.target.value));
        },
        children: paginationRowsPerPageOptions.map(function (value) {
          return (0, _jsxRuntime.jsx)("option", {
            value: value,
            children: value
          }, value);
        })
      })]
    }), (0, _jsxRuntime.jsxs)(_StyledDiv, {
      children: [to > 0 ? rowStart + 1 : 0, " to ", to, " of ", count]
    }), (0, _jsxRuntime.jsxs)(_StyledStack2, {
      alignItems: "center",
      gap: 4,
      children: [(0, _jsxRuntime.jsx)(_StyledIcon, {
        icon: "chevron-forward",
        onClick: function onClick() {
          return onArrowClick('left');
        },
        $_css: leftDisabled ? 0.2 : 'unset',
        $_css2: leftDisabled ? 'none' : 'unset'
      }), (0, _jsxRuntime.jsx)(_StyledIcon2, {
        icon: "chevron-forward",
        onClick: function onClick() {
          return onArrowClick('right');
        },
        $_css3: rightDisabled ? 0.2 : 'unset',
        $_css4: rightDisabled ? 'none' : 'unset'
      })]
    })]
  });
};
var _StyledStack = /*#__PURE__*/(0, _styledComponents["default"])(_Stack.Stack).withConfig({
  componentId: "sc-15sqdj0-0"
})(["color:var(--fg-muted);font-size:var(--font-size-body-4);padding:var(--gap-4) var(--gap-3);user-select:none;"]);
var _StyledSelect = /*#__PURE__*/(0, _styledComponents["default"])("select").withConfig({
  componentId: "sc-15sqdj0-1"
})(["-webkit-appearance:menulist;appearance:menulist;border-radius:var(--radius-2);color:inherit;font-family:inherit;padding:0 var(--gap-1);"]);
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-15sqdj0-2"
})(["margin-right:1.5rem;"]);
var _StyledStack2 = /*#__PURE__*/(0, _styledComponents["default"])(_Stack.Stack).withConfig({
  componentId: "sc-15sqdj0-3"
})(["> div{color:var(--fg-muted);cursor:pointer;&:hover{color:var(--primary50);}}& svg{height:1.125rem;width:1.125rem;}"]);
var _StyledIcon = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-15sqdj0-4"
})(["opacity:", ";pointer-events:", ";transform:rotate(180deg);"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});
var _StyledIcon2 = /*#__PURE__*/(0, _styledComponents["default"])(_Icon.Icon).withConfig({
  componentId: "sc-15sqdj0-5"
})(["opacity:", ";pointer-events:", ";"], function (p) {
  return p.$_css3;
}, function (p) {
  return p.$_css4;
});