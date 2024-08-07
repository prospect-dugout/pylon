"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Panel: true,
  PanelGroup: true
};
Object.defineProperty(exports, "Panel", {
  enumerable: true,
  get: function get() {
    return _Panel.Panel;
  }
});
Object.defineProperty(exports, "PanelGroup", {
  enumerable: true,
  get: function get() {
    return _PanelGroup.PanelGroup;
  }
});
var _Panel = require("./Panel");
var _PanelGroup = require("./PanelGroup");
var _renderPanelLayout = require("./render-panel-layout");
Object.keys(_renderPanelLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _renderPanelLayout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderPanelLayout[key];
    }
  });
});