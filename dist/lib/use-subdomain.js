"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSubdomain = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _hooks = require("preact/hooks");
var useSubdomain = exports.useSubdomain = function useSubdomain() {
  var _useState = (0, _hooks.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    subdomain = _useState2[0],
    setSubdomain = _useState2[1];
  (0, _hooks.useEffect)(function () {
    if (typeof window === 'undefined') {
      return;
    }
    var hostname = window.location.hostname;
    var search = window.location.search;
    var currentSubdomain = null;
    var urlParams = new URLSearchParams(search);
    var subdomainParam = urlParams.get('subdomain');
    if (subdomainParam) {
      currentSubdomain = subdomainParam;
    } else if (hostname) {
      var parts = hostname.split('.');
      if (parts.length === 3) {
        var _parts = (0, _slicedToArray2["default"])(parts, 1);
        currentSubdomain = _parts[0];
      }
    }
    setSubdomain(currentSubdomain);
  }, []);
  return subdomain;
};