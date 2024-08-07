"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = useLocalStorage;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _hooks = require("preact/hooks");
var _makeId = require("./make-id");
function useLocalStorage(key, initialValue) {
  var instanceId = (0, _hooks.useRef)((0, _makeId.makeid)(10));
  var _useState = (0, _hooks.useState)(initialValue),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  var setValue = function setValue(valueOrFn) {
    if (!key) return;
    try {
      var _prev = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue;
      var newValue = valueOrFn instanceof Function ? valueOrFn(_prev) : valueOrFn;
      setStoredValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
      window.dispatchEvent(new CustomEvent('storage-change', {
        detail: {
          key: key,
          newValue: newValue,
          instanceId: instanceId.current
        }
      }));
    } catch (error) {
      console.log(error);
    }
  };
  (0, _hooks.useEffect)(function () {
    if (key) {
      setStoredValue(function () {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
    }
    var handleStorageChange = function handleStorageChange(e) {
      var _ref = e,
        detail = _ref.detail;
      if (detail.key === key && detail.instanceId !== instanceId.current) {
        setStoredValue(detail.newValue);
      }
    };
    window.addEventListener('storage-change', handleStorageChange);
    return function () {
      window.removeEventListener('storage-change', handleStorageChange);
    };
  }, [key]);
  return [storedValue, setValue];
}