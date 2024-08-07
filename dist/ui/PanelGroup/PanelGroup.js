"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelGroup = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _ResizeHandle = require("./_ResizeHandle");
var _Tabs = require("./_Tabs");
var _useStoredLayout3 = require("./use-stored-layout");
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["children", "direction", "id", "localStorageId", "tabsCustomRender", "useTabs"];
var PanelGroup = exports.PanelGroup = function PanelGroup(_ref) {
  var children = _ref.children,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'row' : _ref$direction,
    id = _ref.id,
    localStorageId = _ref.localStorageId,
    tabsCustomRender = _ref.tabsCustomRender,
    useTabs = _ref.useTabs,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var initialSize = (0, _hooks.useRef)(null);
  var childrenList = Array.isArray(children) ? children : [children];
  var _ref2 = restProps,
    _panelSize = _ref2._panelSize;
  var childsRef = (0, _hooks.useRef)([]);
  var _useStoredLayout = (0, _useStoredLayout3.useStoredLayout)({
      localStorageId: localStorageId,
      childsRef: childsRef,
      panelGroupId: id
    }),
    _useStoredLayout2 = (0, _slicedToArray2["default"])(_useStoredLayout, 2),
    storedLayout = _useStoredLayout2[0],
    updateLocalStorage = _useStoredLayout2[1];
  var _useState = (0, _hooks.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var handleTrack = (0, _hooks.useCallback)(function (idx, data) {
    var prevChild = childsRef.current[idx];
    var nextChild = childsRef.current[idx + 1];
    if (!prevChild || !nextChild) return;
    if (!initialSize.current) {
      initialSize.current = {
        prev: prevChild[direction === 'row' ? 'offsetWidth' : 'offsetHeight'],
        next: nextChild[direction === 'row' ? 'offsetWidth' : 'offsetHeight']
      };
    }
    var totalContainerSize = 0;
    for (var i = 0; i < childsRef.current.length; i++) {
      var child = childsRef.current[i];
      if (child) {
        totalContainerSize += child[direction === 'row' ? 'offsetWidth' : 'offsetHeight'];
      }
    }
    var _initialSize$current = initialSize.current,
      prev = _initialSize$current.prev,
      next = _initialSize$current.next;
    var deltaSize = direction === 'row' ? data.dx : data.dy;
    var newSizePrev = prev + deltaSize;
    var newSizeNext = next - deltaSize;
    if (newSizePrev >= 100 && newSizeNext >= 100) {
      var prevChildNewPct = newSizePrev / totalContainerSize * 100;
      var nextChildNewPct = newSizeNext / totalContainerSize * 100;
      prevChild.style.flex = "".concat(prevChildNewPct, " 0 0%");
      nextChild.style.flex = "".concat(nextChildNewPct, " 0 0%");
      prevChild.style.pointerEvents = 'none';
      nextChild.style.pointerEvents = 'none';
    }
  }, [childsRef, direction, initialSize]);
  var handleTrackEnd = function handleTrackEnd() {
    initialSize.current = null;
    updateLocalStorage();
    childsRef.current.forEach(function (child) {
      if (!child) return;
      child.style.pointerEvents = '';
    });
  };
  var handleDblClick = function handleDblClick() {
    childsRef.current.forEach(function (child) {
      if (!child) return;
      child.style.flex = "".concat(100 / childrenList.length, " 0 0%");
    });
    updateLocalStorage();
  };
  var content;
  if (useTabs) {
    var child = childrenList[selectedTab];
    var tabsContent = (0, _jsxRuntime.jsx)(_Tabs.PanelGroup_Tabs, {
      childrenList: childrenList,
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab
    });
    content = (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [tabsCustomRender ? tabsCustomRender(tabsContent) : tabsContent, (0, _preact.cloneElement)(child, {
        _panelSize: 100,
        localStorageId: localStorageId
      })]
    });
  } else {
    content = childrenList.map(function (child, idx) {
      var storedSize = storedLayout === null || storedLayout === void 0 ? void 0 : storedLayout[idx];
      var childPanelSize = parseFloat(storedSize !== null && storedSize !== void 0 ? storedSize : 100 / childrenList.length);
      return (0, _jsxRuntime.jsxs)(_preact.Fragment, {
        children: [(0, _preact.cloneElement)(child, {
          ref: function ref(el) {
            if (el) {
              childsRef.current[idx] = el.base;
            }
          },
          _panelSize: childPanelSize,
          localStorageId: localStorageId
        }), idx < childrenList.length - 1 && (0, _jsxRuntime.jsx)(_ResizeHandle.PanelGroup_ResizeHandle, {
          direction: direction,
          onTrack: function onTrack(d) {
            return handleTrack(idx, d);
          },
          onTrackEnd: handleTrackEnd,
          ondblclick: handleDblClick
        })]
      }, "".concat(id, ":").concat(idx));
    });
  }
  return (0, _jsxRuntime.jsx)(_StyledDiv, {
    $_css: useTabs ? 'column' : direction,
    $_css2: typeof _panelSize === 'number' ? "flex: ".concat(_panelSize, " 0;") : '',
    children: content
  });
};
var _StyledDiv = /*#__PURE__*/(0, _styledComponents["default"])("div").withConfig({
  componentId: "sc-86w00k-0"
})(["display:flex;flex-direction:", ";height:100%;width:100%;min-height:0;min-width:0;overflow:hidden;", ""], function (p) {
  return p.$_css;
}, function (p) {
  return p.$_css2;
});