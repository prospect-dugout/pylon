"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.ICONS = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compat = require("preact/compat");
var _customCssPropertiesRule = require("../../lib/custom-css-properties-rule");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["icon", "size"];
/* eslint-disable quote-props */
// prettier-ignore
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ICONS = exports.ICONS = {
  "alert-outline": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 512 512",
    children: [(0, _jsxRuntime.jsx)("path", {
      d: "M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), (0, _jsxRuntime.jsx)("path", {
      d: "M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"
    })]
  }),
  "arrow-back": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M244 400L100 256l144-144M120 256h292"
    })
  }),
  "arrow-down": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "m112 268 144 144 144-144M256 392V100"
    })
  }),
  "arrow-forward": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "m268 112 144 144-144 144m124-144H100"
    })
  }),
  "arrow-up": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "m112 244 144-144 144 144M256 120v292"
    })
  }),
  "check-circle-outline": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [(0, _jsxRuntime.jsx)("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), (0, _jsxRuntime.jsx)("polyline", {
      points: "22 4 12 14.01 9 11.01"
    })]
  }),
  "chevron-down": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: (0, _jsxRuntime.jsx)("polyline", {
      points: "6 9 12 15 18 9"
    })
  }),
  "chevron-forward": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "m184 112 144 144-144 144"
    })
  }),
  "close": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z",
      fill: "currentColor"
    })
  }),
  "ellipsis-horizontal": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M165 256c0 21.539-17.461 39-39 39s-39-17.461-39-39 17.461-39 39-39 39 17.461 39 39Zm91 39c21.539 0 39-17.461 39-39s-17.461-39-39-39-39 17.461-39 39 17.461 39 39 39Zm130 0c21.539 0 39-17.461 39-39s-17.461-39-39-39-39 17.461-39 39 17.461 39 39 39Z",
      fill: "currentColor"
    })
  }),
  "help-circle-outline": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [(0, _jsxRuntime.jsx)("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), (0, _jsxRuntime.jsx)("path", {
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z",
      fill: "currentColor"
    })]
  }),
  "info-circle-outline": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: [(0, _jsxRuntime.jsx)("path", {
      d: "M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }), (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32",
      d: "M220 220h32v116"
    }), (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "32",
      d: "M208 340h88"
    }), (0, _jsxRuntime.jsx)("path", {
      d: "M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26z",
      fill: "currentColor"
    })]
  }),
  "menu": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "32",
      d: "M80 160h352M80 256h352M80 352h352"
    })
  }),
  "play": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440z"
    })
  }),
  "plus": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [" ", (0, _jsxRuntime.jsx)("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), " ", (0, _jsxRuntime.jsx)("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })]
  }),
  "search": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"
    })
  }),
  "share": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: (0, _jsxRuntime.jsx)("path", {
      d: "M13.7 4.74a.825.825 0 0 0-.761 1.143.825.825 0 0 0 .76.511h3.592l-6.619 6.659a.83.83 0 0 0 .267 1.35.82.82 0 0 0 .896-.18l6.62-6.658v3.612a.826.826 0 0 0 .822.829.824.824 0 0 0 .822-.829v-5.61a.825.825 0 0 0-.822-.827H13.7ZM7.943 6.868A2.104 2.104 0 0 0 5.84 8.973v7.91c0 1.162.941 2.104 2.104 2.104h7.85a2.104 2.104 0 0 0 2.104-2.104v-2.57a.825.825 0 1 0-1.65 0v2.57a.454.454 0 0 1-.454.454h-7.85a.454.454 0 0 1-.454-.454v-7.91c0-.251.203-.455.454-.455h3.245a.825.825 0 1 0 0-1.65H7.944Z",
      fill: "currentColor"
    })
  }),
  "trash": (0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    children: (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
    })
  }),
  "volume-mute": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512",
    children: [(0, _jsxRuntime.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-miterlimit": "10",
      "stroke-width": "32",
      d: "M416 432 64 80"
    }), (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71zm8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256zm64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256z"
    }), (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256z"
    })]
  }),
  "volume": (0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 512 512",
    children: [(0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M264 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75 .66-.51A24 24 0 0 1 288 119.83v272.34a24 24 0 0 1-24 24zM352 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 352 336z"
    }), (0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M400 384a16 16 0 0 1-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 0 1 413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 0 1-13.88 8z"
    })]
  })
};
var Icon = exports.Icon = (0, _compat.forwardRef)(function (_ref, ref) {
  var icon = _ref.icon,
    size = _ref.size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _size = typeof size === 'number' ? "".concat(size, "px") : size;
  return (0, _jsxRuntime.jsx)(_StyledDiv, _objectSpread(_objectSpread({
    ref: ref
  }, (0, _customCssPropertiesRule.nonCustomCSSProps)(props)), {}, {
    $_css: _size && "\n            & svg {\n              height: ".concat(_size, ";\n              width: ").concat(_size, ";\n            }\n          "),
    $_css2: (0, _customCssPropertiesRule.customCSSPropertiesRule)(props),
    children: ICONS[icon]
  }));
});
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-d0f2ka-0"
})(["display:inline-flex;", " ", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});