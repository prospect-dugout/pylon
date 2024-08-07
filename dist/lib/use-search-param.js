"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSearchParams = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _hooks = require("preact/hooks");
var _utils = require("./utils");
var replaceHistory = function replaceHistory(queryParams) {
  var queryString = queryParams.toString();
  window.history.pushState('', '', '?' + queryString);
};
var getSearchParams = function getSearchParams() {
  return new URLSearchParams(window.location.search);
};
var useSearchParams = exports.useSearchParams = function useSearchParams(keys, defaultValues) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    validators = _ref.validators;
  var _useState = (0, _hooks.useState)(getSearchParams()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    queryParams = _useState2[0],
    setQueryParams = _useState2[1];
  var setQP = function setQP(key, value) {
    queryParams.set(key, value);
    replaceHistory(queryParams);
    setQueryParams(getSearchParams());
  };
  var removeQP = function removeQP(key) {
    queryParams["delete"](key);
    replaceHistory(queryParams);
    setQueryParams(getSearchParams());
  };
  (0, _hooks.useEffect)(function () {
    if (defaultValues) {
      keys.forEach(function (key) {
        if (!queryParams.has(key) && defaultValues[key]) {
          setQP(key, defaultValues[key]);
        }
      });
    }
  }, [defaultValues]);
  (0, _hooks.useEffect)(function () {
    var onChange = function onChange() {
      setQueryParams(getSearchParams());
    };
    (0, _utils.on)(window, 'popstate', onChange);
    (0, _utils.on)(window, 'pushstate', onChange);
    (0, _utils.on)(window, 'replacestate', onChange);
    return function () {
      (0, _utils.off)(window, 'popstate', onChange);
      (0, _utils.off)(window, 'pushstate', onChange);
      (0, _utils.off)(window, 'replacestate', onChange);
    };
  }, []);
  return {
    queryParams: keys.reduce(function (acc, key) {
      var value = (queryParams.has(key) ? queryParams.get(key) : defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues[key]) || '';
      if (validators && validators[key] && !validators[key](value)) {
        value = (defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues[key]) || '';
        setQP(key, value);
      }
      acc[key] = value;
      return acc;
    }, {}),
    setQP: setQP,
    removeQP: removeQP
  };
};