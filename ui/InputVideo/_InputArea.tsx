import {FunctionalComponent, h} from 'preact';
import {useState} from 'react';
import {InputFile} from '../InputFile';
import {Typography} from '../Typography';

const ACCEPT_EXT = 'video/mp4,video/webm,video/quicktime';

type Props = {
  onChange: (file: File) => void;
};

export const InputVideo_InputArea: FunctionalComponent<Props> = ({
  onChange,
}: Props) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (evt: DragEvent) => {
    evt.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (evt: DragEvent) => {
    evt.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (evt: DragEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    setDragOver(false);

    if (evt.dataTransfer && evt.dataTransfer.files.length > 0) {
      const file = evt.dataTransfer.files[0];
      onChange?.(file);
      evt.dataTransfer.clearData();
    }
  };

  const handleInputChange = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      onChange?.(target.files[0]);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      css={`
        border-radius: var(--radius-2);
        border: 2px dashed
          ${dragOver ? 'var(--border-subtle)' : 'var(--border-muted)'};
        padding: var(--gap-14) var(--gap-4);
        text-align: center;
        transition: border-color 0.3s;
        width: 100%;
      `}
    >
      <Typography weight="bold">Drag a video here</Typography>
      <Typography
        variant="body3"
        css-color="var(--fg-muted)"
        css-mt={1}
        css-mb={6}
      >
        MP4, WebM or MOV.
      </Typography>
      <InputFile
        accept={ACCEPT_EXT}
        onChange={handleInputChange}
        placeholder="Select file"
        buttonProps={{
          buttonSize: 'md',
        }}
      />
    </div>
  );
};
