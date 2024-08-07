"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPausableTimeOut = void 0;
// https://stackoverflow.com/questions/3969475/javascript-pause-settimeout

var setPausableTimeOut = exports.setPausableTimeOut = function setPausableTimeOut(callback, delay) {
  var timerId;
  var start;
  var remaining = delay;
  var pause = function pause() {
    window.clearTimeout(timerId);
    timerId = undefined;
    remaining -= Date.now() - start;
  };
  var resume = function resume() {
    if (timerId) {
      return;
    }
    start = Date.now();
    timerId = window.setTimeout(callback, remaining);
  };
  resume();
  return {
    pause: pause,
    resume: resume
  };
};