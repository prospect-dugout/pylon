"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variantsStyles = void 0;
var _styledComponents = require("styled-components");
var variantsStyles = exports.variantsStyles = {
  unstyled: (0, _styledComponents.css)([""]),
  "default": (0, _styledComponents.css)(["color:var(--fg-default);&:hover{background-color:var(--bg-subtle);color:var(--fg-default);}"]),
  muted: (0, _styledComponents.css)(["color:var(--fg-muted);&:hover{background-color:var(--bg-subtle);color:var(--fg-default);}"]),
  primary: (0, _styledComponents.css)(["color:var(--primary50);&:hover{background-color:var(--primary5);color:var(--primary70);}"]),
  secondary: (0, _styledComponents.css)(["color:var(--secondary50);&:hover{background-color:var(--secondary5);color:var(--secondary70);}"]),
  error: (0, _styledComponents.css)(["color:var(--red50);&:hover{background:var(--red5);}"]),
  'error-soft': (0, _styledComponents.css)(["color:var(--red50);background:var(--red5);&:hover{background:var(--red10);}"]),
  'primary-soft': (0, _styledComponents.css)(["color:var(--primary80);background:var(--primary5);&:hover{background:var(--primary10);}"]),
  'secondary-soft': (0, _styledComponents.css)(["color:var(--secondary80);background:var(--secondary5);&:hover{background:var(--secondary10);}"]),
  outline: (0, _styledComponents.css)(["border:1px solid var(--border-subtle);color:var(--fg-default);&:hover{background:var(--bg-subtle);}"]),
  'outline-muted': (0, _styledComponents.css)(["border:1px solid var(--border-subtle);color:var(--fg-muted);&:hover{background:var(--bg-subtle);color:var(--fg-default);}"]),
  'outline-primary': (0, _styledComponents.css)(["border:1px solid var(--primary50);color:var(--primary50);&:hover{background:var(--primary5);}"])
};