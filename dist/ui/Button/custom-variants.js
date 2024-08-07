"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItemVariant = void 0;
var _styledComponents = require("styled-components");
var menuItemVariant = exports.menuItemVariant = function menuItemVariant(_ref) {
  var buttonSize = _ref.buttonSize,
    iconTrailing = _ref.iconTrailing;
  return (0, _styledComponents.css)(["align-items:center;border-radius:var(--radius-1-5);color:var(--fg-default);flex-shrink:0;font-size:var(--button-font-size-", ");height:var(--button-height-", ");padding:var(--button-padding-", ");", ";& svg{color:var(--fg-muted);height:1.25rem;width:1.25rem;}&:hover{background:var(--bg-minimal);}"], buttonSize, buttonSize, buttonSize, iconTrailing && (0, _styledComponents.css)(["justify-content:space-between;"]));
};