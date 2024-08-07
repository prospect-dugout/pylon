import {FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {useMemo, useRef} from 'preact/hooks';
import styled from 'styled-components';
import {restoreSelection, saveSelection} from '../../lib/selection';
import {useTextareaHistory} from './use-textarea-history';

export interface TextareaProps
  extends Pick<
    JSX.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'onBlur' | 'name' | 'id'
  > {
  defaultValue?: string;
  invalid?: boolean;
  highlightLinks?: boolean;
  onInput?: (evt: JSX.TargetedEvent<HTMLDivElement, Event>) => void;
}

export const Textarea: FunctionalComponent<TextareaProps> = forwardRef<
  HTMLDivElement,
  TextareaProps
>(({defaultValue, highlightLinks = false, invalid = false, ...props}, ref) => {
  const _defaultValue = useMemo(() => defaultValue, []);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const {updateHistory, undo, redo} = useTextareaHistory(
    defaultValue ?? '',
    innerRef,
  );

  const appleHighlightLinks = () => {
    const input = innerRef.current as HTMLDivElement;
    const currentText = input.innerText;
    const updatedHtml = convertUrlsToLinks(currentText);

    if (currentText !== updatedHtml) {
      // TODO: Highlight links + enter breaks restores selection incorrecttly
      const savedSelection = saveSelection(input);
      input.innerHTML = updatedHtml;
      if (savedSelection) {
        restoreSelection(input, savedSelection);
      }
    }
  };

  const onInput = (evt: any, shouldUpdateHistory = true) => {
    if (highlightLinks) {
      appleHighlightLinks();
    }
    const currentText = evt.target.innerText;
    const modifiedEvt = Object.assign({}, evt, {
      target: {
        name: props.name,
        value: currentText,
      },
    });
    shouldUpdateHistory && updateHistory(currentText);
    props.onInput?.(modifiedEvt);
    props.onChange?.(modifiedEvt);
  };

  const handlePaste = (evt: any) => {
    evt.preventDefault();
    const text = evt.clipboardData.getData('text/plain');
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    range.selectNodeContents(textNode);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    // Trigger input event after pasting
    onInput({target: evt.target});
  };

  const handleBlur = (evt: any) => {
    const modifiedEvt = Object.assign({}, evt, {
      target: {
        name: props.name,
        value: evt.target.innerText,
      },
    });
    props.onBlur?.(modifiedEvt);
  };

  const handleKeyDown = (evt: any) => {
    if (evt.ctrlKey && evt.key === 'z') {
      evt.preventDefault();
      const changed = undo();
      if (changed) {
        onInput({target: evt.target}, false);
      }
    } else if (
      evt.ctrlKey &&
      (evt.key === 'y' || evt.key === 'Z' || (evt.shiftKey && evt.key === 'z'))
    ) {
      evt.preventDefault();
      const changed = redo();
      if (changed) {
        onInput({target: evt.target}, false);
      }
    }
  };

  return (
    <StyledInput
      ref={(e: HTMLDivElement | null) => {
        if (typeof ref === 'function') {
          ref(e);
        } else if (ref) {
          ref.current = e;
        }
        innerRef.current = e;
      }}
      onPaste={handlePaste}
      contentEditable
      onInput={onInput}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      aria-invalid={invalid}
      $invalid={invalid}
      {...props}
    >
      {_defaultValue}
    </StyledInput>
  );
});

const StyledInput = styled.div<{$invalid: boolean}>`
  background-color: var(--bg-default);
  border-radius: var(--input-radius-md);
  display: block;
  height: auto;
  max-height: 25rem;
  overflow-wrap: break-word;
  overflow-y: auto;
  padding: 11px var(--gap-4);
  white-space: pre-wrap;
  width: 100%;
  border: 1px solid
    ${(p) =>
      p.$invalid
        ? 'var(--input-outline-error-color)'
        : 'var(--input-border-color)'};
  outline: 0;
  &:focus-visible {
    border-color: ${(p) =>
      p.$invalid
        ? 'var(--input-outline-error-color)'
        : 'var(--input-outline-color)'};
    box-shadow: inset 0 0 0 1px
      ${(p) =>
        p.$invalid
          ? 'var(--input-outline-error-color)'
          : 'var(--input-outline-color)'};
  }
  & .highlighted-link {
    color: var(--primary50);
  }
`;

function convertUrlsToLinks(text: string) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  // Convert URLs to links
  const newText = text.replace(
    urlRegex,
    (url) => `<span class="highlighted-link">${url}</span>`,
  );

  // Remove <a> tags from non-URLs
  const dummyDiv = document.createElement('div');
  dummyDiv.innerHTML = newText;
  dummyDiv.querySelectorAll('a').forEach((a) => {
    if (!urlRegex.test(a.href)) {
      a.replaceWith(...a.childNodes);
    }
  });
  return dummyDiv.innerHTML;
}
