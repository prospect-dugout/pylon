"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicHead = void 0;
var _hooks = require("preact/hooks");
var DynamicHead = exports.DynamicHead = function DynamicHead(props) {
  (0, _hooks.useLayoutEffect)(function () {
    var _props$meta, _props$link;
    var head = document.head;
    var html = head.querySelector('html');
    var titleElement = document.createElement('title');
    titleElement.innerText = props.title;
    head.appendChild(titleElement);
    if (html && props.htmlAttributes) {
      Object.keys(props.htmlAttributes).forEach(function (key) {
        if (props.htmlAttributes) {
          html.setAttribute(key, props.htmlAttributes[key]);
        }
      });
    }
    (_props$meta = props.meta) === null || _props$meta === void 0 || _props$meta.forEach(function (metaTag) {
      var metaElement = document.createElement('meta');
      Object.keys(metaTag).forEach(function (key) {
        metaElement.setAttribute(key, metaTag[key]);
      });
      head.appendChild(metaElement);
    });
    (_props$link = props.link) === null || _props$link === void 0 || _props$link.forEach(function (linkTag) {
      var linkElement = document.createElement('link');
      Object.keys(linkTag).forEach(function (key) {
        linkElement.setAttribute(key, linkTag[key]);
      });
      head.appendChild(linkElement);
    });
  }, []);
  return null;
};