"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = variants;
/* prettier-ignore */
function variants(_ref) {
  var disabled = _ref.disabled,
    size = _ref.size,
    focused = _ref.focused,
    invalid = _ref.invalid;
  return {
    "default": {
      background: "var(--input-bg)",
      border: "".concat(focused ? invalid ? "".concat(size === 'sm' ? '1px' : '2px', " solid var(--input-outline-error-color)") : "".concat(size === 'sm' ? '1px' : '2px', " solid var(--input-outline-color)") : invalid ? '1px solid var(--input-outline-error-color)' : '1px solid var(--input-border-color)'),
      borderRadius: "var(--input-radius-".concat(size, ")"),
      color: "".concat(disabled ? 'var(--fg-disabled)' : 'var(--fg-default)'),
      placeholderColor: "".concat(disabled ? 'var(--fg-disabled)' : 'var(--fg-placeholder)')
    },
    search: {
      background: 'var(--bg-minimal)',
      border: 'none',
      borderRadius: 'var(--radius-round)',
      color: "".concat(disabled ? 'var(--fg-disabled)' : 'var(--fg-default)'),
      placeholderColor: "".concat(disabled ? 'var(--fg-disabled)' : 'var(--fg-placeholder)')
    }
  };
}