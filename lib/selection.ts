type SelectionRange = {
  start: number;
  end: number;
};
export function saveSelection(el: any): SelectionRange | null {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    // Handle the case where there is no selection.
    // This could be returning a default value or throwing an error.
    return null;
  }

  const range = selection.getRangeAt(0);
  const preSelectionRange = range.cloneRange();
  preSelectionRange.selectNodeContents(el);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);
  const start = preSelectionRange.toString().length;

  return {
    start: start,
    end: start + range.toString().length,
  };
}

export function restoreSelection(el: Element, selection: SelectionRange) {
  let charIndex = 0;
  const range = document.createRange();
  range.setStart(el, 0);
  range.collapse(true);
  const nodeStack = [el];
  let node;
  let foundStart = false;
  let stop = false;

  while (!stop && (node = nodeStack.pop())) {
    if (node.nodeType === Node.TEXT_NODE) {
      const nextCharIndex = charIndex + (node as any).length;
      if (
        !foundStart &&
        selection.start >= charIndex &&
        selection.start <= nextCharIndex
      ) {
        range.setStart(node, selection.start - charIndex);
        foundStart = true;
      }
      if (
        foundStart &&
        selection.end >= charIndex &&
        selection.end <= nextCharIndex
      ) {
        range.setEnd(node, selection.end - charIndex);
        stop = true;
      }
      charIndex = nextCharIndex;
    } else {
      let i = node.childNodes.length;
      while (i--) {
        nodeStack.push((node as any).childNodes[i]);
      }
    }
  }

  const sel = window.getSelection();
  if (sel) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
