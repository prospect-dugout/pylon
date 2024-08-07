"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownToHtml = void 0;
var markdownToHtml = exports.markdownToHtml = function markdownToHtml(input) {
  var patterns = {
    bold: /\*\*(.+?)\*\*/g,
    italic: /(^|\W)\*(.+?)\*(\W|$)/g,
    italicAlt: /(^|\W)_(.+?)_(\W|$)/g,
    boldItalic: /\*\*\*(.+?)\*\*\*/g,
    underline: /__(.+?)__/g,
    link: /\[(.+?)\]\((.+?)\)/g,
    strike: /\~\~(.+?)\~\~/g,
    cleanLines: /\n\s*\n\s*\n/g
  };
  var output = input.replace(patterns.cleanLines, '\n\n').replace(patterns.boldItalic, '<strong><em>$1</em></strong>').replace(patterns.bold, '<strong>$1</strong>').replace(patterns.underline, '<u>$1</u>').replace(patterns.italic, '$1<em>$2</em>$3').replace(patterns.italicAlt, '$1<em>$2</em>$3').replace(patterns.link, '<a href="$2" target="_blank" rel="noopener">$1</a>').replace(patterns.strike, '<del>$1</del>');
  return output;
};