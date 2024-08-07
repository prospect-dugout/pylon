"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationCss = void 0;
var _styledComponents = require("styled-components");
var moveDown = /*#__PURE__*/(0, _styledComponents.css)(["transform:translateY(-10px);transition:transform 0.5s cubic-bezier(0.16,1,0.3,1),opacity 0.25s ease,visibility 0s 0s;&.animate-in{opacity:1;transform:translateY(0);}"]);
var moveRight = /*#__PURE__*/(0, _styledComponents.css)(["transform:translateX(-10px);transition:transform 0.5s cubic-bezier(0.16,1,0.3,1),opacity 0.25s ease,visibility 0s 0s;&.animate-in{opacity:1;transform:translateX(0);}"]);
var scaleIn = /*#__PURE__*/(0, _styledComponents.css)(["opacity:0;transform:scale(0.9);transition:opacity 300ms,transform 300ms;&.animate-in{opacity:1;transform:translateX(0);}"]);
var opacity = /*#__PURE__*/(0, _styledComponents.css)(["opacity:0;transition:opacity 300ms;&.animate-in{opacity:1;transform:translateX(0);}"]);
var pop = /*#__PURE__*/(0, _styledComponents.css)(["opacity:0;transform:rotateX(-30deg);transition:transform 0.25s ease 0s,opacity 0.25s ease 0s;&.animate-in{opacity:1;transform:rotateX(0);}"]);
var getAnimationCss = exports.getAnimationCss = function getAnimationCss(animation) {
  switch (animation) {
    case 'move-down':
      return moveDown;
    case 'move-right':
      return moveRight;
    case 'scale-in':
      return scaleIn;
    case 'opacity':
      return opacity;
    case 'pop':
      return pop;
    default:
      return null;
  }
};