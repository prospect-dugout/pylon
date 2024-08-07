import {
  ComponentChild,
  Fragment,
  FunctionalComponent,
  JSX,
  Ref,
  h,
} from 'preact';
import {forwardRef} from 'preact/compat';
import {useRef, useState} from 'preact/hooks';
import {css} from 'styled-components';
import {Button, ButtonProps} from '../Button';

export type InputFileProps = {
  renderCustomButton?: (props: {onClick: () => void}) => ComponentChild;
  buttonProps?: ButtonProps;
  buttonCss?: ReturnType<typeof css>;
  showSelectedFileNames?: boolean;
  placeholder?: string;
};

type Props = JSX.HTMLAttributes<HTMLInputElement> & InputFileProps;

export const InputFile: FunctionalComponent<Props> = forwardRef(
  (
    {
      buttonCss,
      buttonProps,
      renderCustomButton,
      multiple = false,
      onChange,
      placeholder,
      showSelectedFileNames = true,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [selectedFiles, setSelectedFiles] = useState<FileList | []>([]);
    const inputRef = useRef<any>(null);

    return (
      <>
        <input
          ref={(e) => {
            if (typeof ref === 'function') {
              ref(e);
            } else if (ref) {
              ref.current = e;
            }
            inputRef.current = e;
          }}
          tabIndex={-1}
          multiple={multiple}
          style={{display: 'none'}}
          onChange={function (evt: any) {
            evt.stopPropagation();
            if (typeof onChange === 'function') {
              onChange(evt);
            }
            setSelectedFiles(evt.target.files);
          }}
          type="file"
          {...props}
        />
        {renderCustomButton ? (
          renderCustomButton({onClick: () => inputRef.current.click() ?? null})
        ) : (
          <Button
            variant="primary"
            buttonSize="sm"
            onClick={() => inputRef.current.click() ?? null}
            css={`
              display: inline-block;
              max-width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              ${buttonCss}
            `}
            {...buttonProps}
          >
            {selectedFiles.length > 0 && showSelectedFileNames
              ? Array.from(selectedFiles)
                  .map((file) => file.name)
                  .join(', ')
              : placeholder || (multiple ? 'Select files' : 'Select file')}
          </Button>
        )}
      </>
    );
  },
);
