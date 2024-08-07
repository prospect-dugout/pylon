import {useRef} from 'preact/hooks';
import {restoreSelection, saveSelection} from '../../lib/selection';

export const useTextareaHistory = (defaultValue: string, inputRef: any) => {
  const historyStack = useRef<any>([{content: defaultValue, selection: null}]);
  const historyIndex = useRef(0);

  const updateHistory = (newContent: string) => {
    const currentSelection = saveSelection(inputRef.current);
    historyStack.current = [
      ...historyStack.current.slice(0, historyIndex.current + 1),
      {content: newContent, selection: currentSelection},
    ];
    historyIndex.current++;
  };

  const applyContentAndSelection = (content: string, selection: any) => {
    if (inputRef.current) {
      inputRef.current.innerHTML = content;
      if (selection) {
        restoreSelection(inputRef.current, selection);
      }
    }
  };

  const undo = () => {
    if (historyIndex.current > 0) {
      historyIndex.current--;
      const previousState = historyStack.current[historyIndex.current];
      applyContentAndSelection(previousState.content, previousState.selection);
      return true;
    }
    return false;
  };

  const redo = () => {
    if (historyIndex.current < historyStack.current.length - 1) {
      historyIndex.current++;
      const nextState = historyStack.current[historyIndex.current];
      applyContentAndSelection(nextState.content, nextState.selection);
      return true;
    }
    return false;
  };

  return {updateHistory, undo, redo};
};
