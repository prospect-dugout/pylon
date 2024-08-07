import {FunctionalComponent, h} from 'preact';
import {useCallback, useEffect, useState} from 'preact/hooks';
import Cropper from 'react-easy-crop';
import {Area, Point} from 'react-easy-crop/types';
import {afterNextRender} from '../../lib';
import {FormSubmit} from '../Form';
import {IconButton} from '../IconButton';
import {NativeInputRange} from '../InputRange';
import {Overlay} from '../Overlay';
import {Stack} from '../Stack';
import {Typography} from '../Typography';
import {EasyCropResp, cropImage} from './cropImage';

export type ImageAspectRatio = 'landscape' | 'portrait';

export interface ImageInputOverlayProps {
  imageSrc: string;
  opened: boolean;
  aspectFn?: (aspectRatio: ImageAspectRatio) => number;
  setOpened: (opened: boolean) => void;
  onSubmit?: (
    _value: EasyCropResp & {
      aspectRatio: ImageAspectRatio;
    },
  ) => void;
}

export const ImageInput_Overlay: FunctionalComponent<
  ImageInputOverlayProps
> = ({
  opened,
  setOpened,
  aspectFn,
  imageSrc,
  onSubmit,
}: ImageInputOverlayProps) => {
  const [loading, setLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<ImageAspectRatio>('landscape');
  const [crop, setCrop] = useState<Point>({x: 0, y: 0});
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const [zoom, setZoom] = useState(1);
  const [ready, setReady] = useState(false);

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const handleSubmit = async () => {
    if (onSubmit && croppedAreaPixels) {
      setLoading(true);
      const croppedImage = await cropImage(imageSrc, croppedAreaPixels, 0);
      croppedImage && onSubmit({...croppedImage, aspectRatio});
      setOpened(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (opened) {
      afterNextRender(() => {
        setReady(true);
      });
    }
  }, [opened]);

  return (
    <Overlay
      opened={opened}
      setOpened={setOpened}
      cancelOnEscKey
      position={{
        mode: 'fixed',
      }}
      css={`
        background: rgb(var(--gray-rgb));
        display: grid;
        grid-template-rows: max-content 1fr max-content;
        inset: 0;
        padding: var(--gap-6);
      `}
    >
      <Stack alignItems="center" gap={3}>
        <IconButton
          icon="arrow-back"
          onClick={() => setOpened(false)}
          variant="muted"
          css={`
            margin-left: calc(-1 * var(--gap-2));
          `}
        />
        <Typography variant="h6" css-color="var(--gray10)">
          Drag the image to adjust it
        </Typography>
        <FormSubmit
          submitting={loading}
          variant="primary"
          onClick={handleSubmit}
          css={`
            margin-left: auto;
          `}
        >
          Done
        </FormSubmit>
      </Stack>
      <div
        css={`
          min-height: 0;
          padding: var(--gap-12);
        `}
      >
        <div
          css={`
            height: 100%;
            position: relative;
            .reactEasyCrop_CropArea {
              color: rgba(var(--gray-rgb), 0.5) !important;
            }
          `}
        >
          <Cropper
            image={ready ? imageSrc : ''} // NOTE: Quick fix for the image not being loaded on first render
            crop={crop}
            zoom={zoom}
            maxZoom={3}
            aspect={aspectFn ? aspectFn(aspectRatio) : 19 / 9}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            showGrid={false}
            onMediaLoaded={(mediaSize) => {
              if (mediaSize.naturalHeight > mediaSize.naturalWidth) {
                setAspectRatio('portrait');
              }
            }}
          />
        </div>
      </div>
      <Stack
        gap={3}
        alignItems="center"
        css={`
          min-height: 0;
          margin: 0 auto var(--gap-6);
          max-width: 18.5rem;
          width: 100%;
        `}
      >
        <Typography variant="body2" weight="medium" css-color="var(--gray40)">
          1x
        </Typography>
        <NativeInputRange
          value={zoom}
          min={1}
          max={3}
          step={0.01}
          aria-labelledby="Zoom"
          onChange={(evt) => {
            console.log(evt.currentTarget.value);
            setZoom(Number(evt.currentTarget.value));
          }}
          css={`
            width: 100%;
          `}
        />
        <Typography variant="body2" weight="medium" css-color="var(--gray40)">
          3x
        </Typography>
      </Stack>
    </Overlay>
  );
};
