"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortStringFn = exports.sortNumberFn = exports.sortDateFn = exports.sortData = exports.sortBooleanFn = exports.getSortKey = exports.getSortFunction = exports.getSortDirection = exports.applySearch = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
var SEARCH_FILTER_REGEX = /[^\w\s]/gi;
var applySearch = exports.applySearch = function applySearch(_ref) {
  var data = _ref.data,
    query = _ref.query,
    columns = _ref.columns;
  if (data) {
    var _columns = columns ? columns.filter(Boolean) : [];
    if (query && _columns.length > 0) {
      var queryRegex = new RegExp(query.replace(SEARCH_FILTER_REGEX, ''), 'i');
      if (/\w+:\w+$/.test(query)) {
        // when query is in the form of "key:value"
        // we want to search for the value of the key
        var arr = query.split(':');
        var col = _columns.find(function (c) {
          return c.accessor === arr[0];
        });
        if (col) {
          _columns = [col];
        }
      }
      return data.filter(function (d) {
        if (d) {
          return !!_columns.find(function (c) {
            var value = d[c.accessor];
            return queryRegex.test(value.replace(SEARCH_FILTER_REGEX, ''));
          });
        }
        return false;
      });
    }
    return data.filter(Boolean);
  }
  return [];
};
var sortStringFn = exports.sortStringFn = function sortStringFn(direction, a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b) * direction;
  }
  return 0;
};
var sortNumberFn = exports.sortNumberFn = function sortNumberFn(direction, a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a - b) * direction;
  }
  return a;
};
var sortDateFn = exports.sortDateFn = function sortDateFn(direction, a, b) {
  var dateA = a instanceof _dayjs["default"] ? a : (0, _dayjs["default"])(a);
  var dateB = b instanceof _dayjs["default"] ? b : (0, _dayjs["default"])(b);
  return (dateA.valueOf() - dateB.valueOf()) * direction;
};
var sortBooleanFn = exports.sortBooleanFn = function sortBooleanFn(direction, a, b) {
  return a === b ? 0 : a ? -1 * direction : direction;
};
var getSortDirection = exports.getSortDirection = function getSortDirection(sortBy) {
  return /^-/.test(sortBy) ? -1 : 1;
};
var getSortKey = exports.getSortKey = function getSortKey(sortBy) {
  return sortBy ? sortBy.replace(/^-/, '') : '';
};
var sortData = exports.sortData = function sortData(_ref2) {
  var columns = _ref2.columns,
    data = _ref2.data,
    sortBy = _ref2.sortBy;
  var sortKey = getSortKey(sortBy);
  var column = sortKey ? columns.find(function (col) {
    return col.accessor === sortKey;
  }) : null;
  if (column && column.accessor) {
    var direction = getSortDirection(sortBy);
    return data.sort(getSortFunction(column, direction));
  }
  return data;
};
var getSortFunction = exports.getSortFunction = function getSortFunction(column, direction) {
  switch (column.type) {
    case 'number':
      return function (a, b) {
        return sortNumberFn(direction, a[column.accessor], b[column.accessor]);
      };
    case 'date':
      return function (a, b) {
        return sortDateFn(direction, a[column.accessor], b[column.accessor]);
      };
    case 'boolean':
      return function (a, b) {
        return sortBooleanFn(direction, a[column.accessor], b[column.accessor]);
      };
    case 'string':
      return function (a, b) {
        return sortStringFn(direction, a[column.accessor], b[column.accessor]);
      };
    default:
      return function () {
        return 0;
      };
  }
};