"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseQuery = void 0;
var _swr = _interopRequireDefault(require("swr"));
var createUseQuery = exports.createUseQuery = function createUseQuery(fetcher, useFirebase) {
  var useQuery = function useQuery(key) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      skip: false
    };
    var _useFirebase = useFirebase(),
      user = _useFirebase.user;
    var _useSWR = (0, _swr["default"])( /* !!user &&  */!opts.skip ? key : null, function (url) {
        return fetcher(url, {
          user: user || null
        });
      }),
      data = _useSWR.data,
      error = _useSWR.error,
      isLoading = _useSWR.isLoading;
    return {
      data: data || (opts === null || opts === void 0 ? void 0 : opts.defaultData),
      loading: isLoading,
      error: error
    };
  };
  return useQuery;
};