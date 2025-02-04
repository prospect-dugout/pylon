"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Card = require("./Card");
Object.keys(_Card).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Card[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Card[key];
    }
  });
});