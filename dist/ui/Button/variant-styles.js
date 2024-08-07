"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variantsStyles = void 0;
var _styledComponents = require("styled-components");
var variantsStyles = exports.variantsStyles = {
  unstyled: (0, _styledComponents.css)([""]),
  "default": (0, _styledComponents.css)(["background:var(--bg-subtle);color:var(--fg-default);&:hover{background:var(--bg-minimal);}"]),
  muted: (0, _styledComponents.css)(["color:var(--fg-muted);&:hover{color:var(--fg-default);}"]),
  primary: (0, _styledComponents.css)(["background:var(--primary50);color:var(--white);&:focus-visible{outline:2px solid var(--primary50);}&:hover{background:var(--primary70);}"]),
  'primary-with-shadow': (0, _styledComponents.css)(["background:var(--primary50);color:var(--white);box-shadow:rgba(var(--primary-rgb),0.45) 0 0.1875rem 0.5rem 0;transition:box-shadow 0.3s cubic-bezier(0.4,0.3,0.8,0.6);&:active{box-shadow:none;}&:hover{background:var(--primary70);}"]),
  'primary-soft': (0, _styledComponents.css)(["background:var(--primary5);color:var(--primary80);&:hover{background:var(--primary10);}"]),
  secondary: (0, _styledComponents.css)(["background:var(--secondary50);color:var(--white);&:hover{background:var(--secondary70);}"]),
  'secondary-soft': (0, _styledComponents.css)(["background:var(--secondary5);color:var(--secondary80);&:hover{background:var(--secondary10);}"]),
  outline: (0, _styledComponents.css)(["border:1px solid var(--border-default);color:var(--fg-default);&:hover{background:var(--bg-minimal);}"]),
  'outline-primary': (0, _styledComponents.css)(["border:1px solid var(--primary50);color:var(--primary50);&:hover{background:var(--primary5);}"]),
  'outline-muted': (0, _styledComponents.css)(["border:1px solid var(--border-subtle);color:var(--fg-muted);&:hover{background:var(--bg-minimal);color:var(--fg-default);}"]),
  error: (0, _styledComponents.css)(["background:var(--red50);color:var(--white);&:hover{background:var(--red70);}"]),
  'error-soft': (0, _styledComponents.css)(["background:var(--error);color:var(--error-contrast-text);&:hover{background:var(--red10);}"])
};