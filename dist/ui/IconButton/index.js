"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _IconButton = require("./IconButton");
Object.keys(_IconButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IconButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IconButton[key];
    }
  });
});