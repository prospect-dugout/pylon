"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelGroup_Tabs = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Button = require("../Button");
var _jsxRuntime = require("preact/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PanelGroup_Tabs = exports.PanelGroup_Tabs = function PanelGroup_Tabs(_ref) {
  var selectedTab = _ref.selectedTab,
    setSelectedTab = _ref.setSelectedTab,
    childrenList = _ref.childrenList;
  return (0, _jsxRuntime.jsx)(_StyledDiv, {
    children: childrenList.map(function (child, idx) {
      var isActive = selectedTab === idx;
      return (0, _jsxRuntime.jsx)(_StyledButton, {
        variant: "unstyled",
        onClick: function onClick() {
          setSelectedTab(idx);
        },
        $_css: isActive ? 'var(--panel-group-bg ,var(--bg-minimal))' : 'none',
        $_css2: isActive && (0, _styledComponents.css)(["&:before{background:var(--primary50);content:'';height:2px;left:0;position:absolute;right:0;top:-1px;z-index:1;}"]),
        children: child.props.tabName
      }, child.props.tabName);
    })
  });
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-1lwdmo7-0"
})(["height:2.5rem;display:flex;flex-wrap:nowrap;"]);
var _StyledButton = /*#__PURE__*/(0, _styledComponents["default"])(_Button.Button).withConfig({
  componentId: "sc-1lwdmo7-1"
})(["align-items:center;background:", ";color:var(--fg-default);display:inline-flex;height:100%;padding:0 1rem;position:relative;", " &:hover{background:var(--panel-group-bg-hover,var(--bg-subtle));}"], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});