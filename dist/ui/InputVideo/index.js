"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _InputVideo = require("./InputVideo");
Object.keys(_InputVideo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputVideo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputVideo[key];
    }
  });
});