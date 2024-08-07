import {FunctionalComponent, Ref, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {useState} from 'preact/hooks';
import {InputFile, InputFileProps} from '../InputFile';
import {ImageInputOverlayProps, ImageInput_Overlay} from './_Overlay';

const readFile = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => resolve(reader.result as string),
      false,
    );
    reader.readAsDataURL(file);
  });
};

type Props = Pick<ImageInputOverlayProps, 'aspectFn' | 'onSubmit'> &
  InputFileProps;

export const ImageInput: FunctionalComponent<Props> = forwardRef(
  (
    {
      onSubmit,
      aspectFn,
      renderCustomButton,
      buttonCss,
      buttonProps,
      showSelectedFileNames = false,
      placeholder,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [base64, setBase64] = useState<string>();
    const [opened, setOpened] = useState<boolean>(false);

    const onInputFileChange = async (evt: any) => {
      const {files} = evt.target;
      if (files?.length > 0) {
        const file = files[0] as File;
        const imageDataUrl = await readFile(file);

        setBase64(imageDataUrl);
        setOpened(true);
      }
    };

    return (
      <div
        css={`
          min-width: 0;
        `}
        {...props}
      >
        <InputFile
          ref={ref}
          onChange={onInputFileChange}
          onClick={(evt: any) => {
            evt.currentTarget.value = '';
          }}
          renderCustomButton={renderCustomButton}
          buttonCss={buttonCss}
          buttonProps={buttonProps}
          showSelectedFileNames={showSelectedFileNames}
          placeholder={placeholder}
        />
        {opened && !!base64 && (
          <ImageInput_Overlay
            opened={opened}
            aspectFn={aspectFn}
            setOpened={setOpened}
            imageSrc={base64}
            onSubmit={(resp) => {
              if (onSubmit) {
                onSubmit(resp);
              }
            }}
          />
        )}
      </div>
    );
  },
);
