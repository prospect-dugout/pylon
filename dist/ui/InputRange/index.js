"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _InputRange = require("./InputRange");
Object.keys(_InputRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputRange[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputRange[key];
    }
  });
});
var _NativeInputRange = require("./NativeInputRange");
Object.keys(_NativeInputRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NativeInputRange[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NativeInputRange[key];
    }
  });
});