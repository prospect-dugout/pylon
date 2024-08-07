"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonCustomCSSProps = exports.gapMap = exports.customCSSPropertiesRule = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var gapMap = exports.gapMap = {
  0: '',
  0.5: 'var(--gap-0-5)',
  1: 'var(--gap-1)',
  1.5: 'var(--gap-1-5)',
  2: 'var(--gap-2)',
  2.5: 'var(--gap-2-5)',
  3: 'var(--gap-3)',
  4: 'var(--gap-4)',
  5: 'var(--gap-5)',
  6: 'var(--gap-6)',
  7: 'var(--gap-7)',
  8: 'var(--gap-8)',
  9: 'var(--gap-9)',
  10: 'var(--gap-10)',
  11: 'var(--gap-11)',
  12: 'var(--gap-12)',
  13: 'var(--gap-13)',
  14: 'var(--gap-14)',
  15: 'var(--gap-15)',
  16: 'var(--gap-16)',
  17: 'var(--gap-17)',
  18: 'var(--gap-18)',
  19: 'var(--gap-19)',
  20: 'var(--gap-20)',
  21: 'var(--gap-21)',
  22: 'var(--gap-22)',
  23: 'var(--gap-23)',
  24: 'var(--gap-24)',
  25: 'var(--gap-25)',
  26: 'var(--gap-26)',
  27: 'var(--gap-27)',
  28: 'var(--gap-28)',
  29: 'var(--gap-29)',
  30: 'var(--gap-30)',
  31: 'var(--gap-31)',
  32: 'var(--gap-32)',
  auto: 'auto'
};
var customCSSPropertiesRule = exports.customCSSPropertiesRule = function customCSSPropertiesRule(props) {
  var styles = '';

  // margin
  if (props['css-mb']) styles += "margin-bottom: ".concat(gapMap[props['css-mb']] || props['css-mb'], ";");
  if (props['css-ml']) styles += "margin-left: ".concat(gapMap[props['css-ml']] || props['css-ml'], ";");
  if (props['css-mr']) styles += "margin-right: ".concat(gapMap[props['css-mr']] || props['css-mr'], ";");
  if (props['css-mt']) styles += "margin-top: ".concat(gapMap[props['css-mt']] || props['css-mt'], ";");
  if (props['css-m']) {
    var margin = Array.isArray(props['css-m']) ? props['css-m'].map(function (gap) {
      return gapMap[gap] || gap;
    }).join(' ') : gapMap[props['css-m']] || props['css-m'];
    styles += "margin: ".concat(margin, ";");
  }

  // padding
  if (props['css-pb']) styles += "padding-bottom: ".concat(gapMap[props['css-pb']] || props['css-pb'], ";");
  if (props['css-pl']) styles += "padding-left: ".concat(gapMap[props['css-pl']] || props['css-pl'], ";");
  if (props['css-pr']) styles += "padding-right: ".concat(gapMap[props['css-pr']] || props['css-pr'], ";");
  if (props['css-pt']) styles += "padding-top: ".concat(gapMap[props['css-pt']] || props['css-pt'], ";");
  if (props['css-p']) {
    var padding = Array.isArray(props['css-p']) ? props['css-p'].map(function (gap) {
      return gapMap[gap] || gap;
    }).join(' ') : gapMap[props['css-p']] || props['css-p'];
    styles += "padding: ".concat(padding, ";");
  }

  // color
  if (props['css-color']) styles += "color: ".concat(props['css-color'], ";");
  // text-align
  if (props['css-textAlign']) styles += "text-align: ".concat(props['css-textAlign'], ";");
  return styles;
};
var nonCustomCSSProps = exports.nonCustomCSSProps = function nonCustomCSSProps(props) {
  var nonCustomProps = {};
  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      _key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (!_key.startsWith('css-')) {
      nonCustomProps[_key] = value;
    }
  }
  return nonCustomProps;
};