"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThemeContext = exports.ThemeProvider = exports.ThemeEnum = exports.ThemeContext = exports.DEFAULT_THEME = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _jsxRuntime = require("preact/jsx-runtime");
var ThemeEnum = exports.ThemeEnum = /*#__PURE__*/function (ThemeEnum) {
  ThemeEnum["LIGHT"] = "light";
  ThemeEnum["DARK"] = "dark";
  return ThemeEnum;
}({});
var DEFAULT_THEME = exports.DEFAULT_THEME = ThemeEnum.LIGHT;
var ThemeContext = exports.ThemeContext = (0, _preact.createContext)({
  theme: DEFAULT_THEME,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: function toggleTheme() {}
});
var useThemeContext = exports.useThemeContext = function useThemeContext() {
  return (0, _hooks.useContext)(ThemeContext);
};
var ThemeProvider = exports.ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    defaultTheme = _ref.defaultTheme;
  var _useState = (0, _hooks.useState)(defaultTheme !== null && defaultTheme !== void 0 ? defaultTheme : DEFAULT_THEME),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    activeTheme = _useState2[0],
    setActiveTheme = _useState2[1];
  var toggleTheme = function toggleTheme(themeParam) {
    var newTheme = themeParam && validateTheme(themeParam) ? themeParam : activeTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    localStorage.setItem('theme', newTheme);
    setActiveTheme(newTheme);
  };
  (0, _hooks.useEffect)(function () {
    var storedTheme = localStorage.getItem('theme');
    if (validateTheme(storedTheme)) {
      setActiveTheme(storedTheme);
    }
  }, []);
  (0, _hooks.useEffect)(function () {
    var _document$firstElemen;
    (_document$firstElemen = document.firstElementChild) === null || _document$firstElemen === void 0 || _document$firstElemen.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);
  return (0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: {
      theme: activeTheme,
      toggleTheme: toggleTheme
    },
    children: children
  });
};
function validateTheme(theme) {
  return Object.values(ThemeEnum).includes(theme);
}