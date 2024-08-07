"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTextareaHistory = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _hooks = require("preact/hooks");
var _selection = require("../../lib/selection");
var useTextareaHistory = exports.useTextareaHistory = function useTextareaHistory(defaultValue, inputRef) {
  var historyStack = (0, _hooks.useRef)([{
    content: defaultValue,
    selection: null
  }]);
  var historyIndex = (0, _hooks.useRef)(0);
  var updateHistory = function updateHistory(newContent) {
    var currentSelection = (0, _selection.saveSelection)(inputRef.current);
    historyStack.current = [].concat((0, _toConsumableArray2["default"])(historyStack.current.slice(0, historyIndex.current + 1)), [{
      content: newContent,
      selection: currentSelection
    }]);
    historyIndex.current++;
  };
  var applyContentAndSelection = function applyContentAndSelection(content, selection) {
    if (inputRef.current) {
      inputRef.current.innerHTML = content;
      if (selection) {
        (0, _selection.restoreSelection)(inputRef.current, selection);
      }
    }
  };
  var undo = function undo() {
    if (historyIndex.current > 0) {
      historyIndex.current--;
      var previousState = historyStack.current[historyIndex.current];
      applyContentAndSelection(previousState.content, previousState.selection);
      return true;
    }
    return false;
  };
  var redo = function redo() {
    if (historyIndex.current < historyStack.current.length - 1) {
      historyIndex.current++;
      var nextState = historyStack.current[historyIndex.current];
      applyContentAndSelection(nextState.content, nextState.selection);
      return true;
    }
    return false;
  };
  return {
    updateHistory: updateHistory,
    undo: undo,
    redo: redo
  };
};