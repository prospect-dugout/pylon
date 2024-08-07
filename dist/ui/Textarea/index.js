"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Textarea = require("./Textarea");
Object.keys(_Textarea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Textarea[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Textarea[key];
    }
  });
});