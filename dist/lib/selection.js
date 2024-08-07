"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreSelection = restoreSelection;
exports.saveSelection = saveSelection;
function saveSelection(el) {
  var selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    // Handle the case where there is no selection.
    // This could be returning a default value or throwing an error.
    return null;
  }
  var range = selection.getRangeAt(0);
  var preSelectionRange = range.cloneRange();
  preSelectionRange.selectNodeContents(el);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);
  var start = preSelectionRange.toString().length;
  return {
    start: start,
    end: start + range.toString().length
  };
}
function restoreSelection(el, selection) {
  var charIndex = 0;
  var range = document.createRange();
  range.setStart(el, 0);
  range.collapse(true);
  var nodeStack = [el];
  var node;
  var foundStart = false;
  var stop = false;
  while (!stop && (node = nodeStack.pop())) {
    if (node.nodeType === Node.TEXT_NODE) {
      var nextCharIndex = charIndex + node.length;
      if (!foundStart && selection.start >= charIndex && selection.start <= nextCharIndex) {
        range.setStart(node, selection.start - charIndex);
        foundStart = true;
      }
      if (foundStart && selection.end >= charIndex && selection.end <= nextCharIndex) {
        range.setEnd(node, selection.end - charIndex);
        stop = true;
      }
      charIndex = nextCharIndex;
    } else {
      var i = node.childNodes.length;
      while (i--) {
        nodeStack.push(node.childNodes[i]);
      }
    }
  }
  var sel = window.getSelection();
  if (sel) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
}