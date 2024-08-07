import {Fragment, FunctionalComponent, h} from 'preact';
import {MutableRef, useRef, useState} from 'preact/hooks';
import {throttle} from 'lodash';
import {HexColorInput, HexColorPicker} from 'react-colorful';
import {Overlay, OverlayPosition} from '../Overlay';

type Props = {
  defaultColor?: string;
  onChange?: (color: string) => void;
  overlayPosition?: OverlayPosition;
};

export const ColorPickerInput: FunctionalComponent<Props> = ({
  defaultColor = '#aabbcc',
  onChange,
  overlayPosition,
}: Props) => {
  const buttonRef = useRef() as MutableRef<HTMLButtonElement>;
  const [color, setColor] = useState<string>(defaultColor);
  const [opened, setOpened] = useState<boolean>(false);
  const throttledOnChange = useRef(throttle(onChange || function () {}, 100));

  const handleChange = (hex: string) => {
    setColor(hex);
    throttledOnChange.current(hex);
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpened(true)}
        css={`
          background: ${color};
          border-radius: 50%;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          height: 2.125rem;
          padding: 0;
          width: 2.125rem;
          &:focus-visible {
            box-shadow: inset 0 0 0 2px var(--white);
            outline: 2px solid var(--input-outline-color);
          }
        `}
      />
      <Overlay
        opened={opened}
        setOpened={setOpened}
        animation="move-down"
        cancelOnEscKey
        cancelOnOutsideClick
        withBackdrop
        backdropColor="transparent"
        position={
          {
            ...(overlayPosition ? overlayPosition : {}),
            horizontalAlign: 'right',
            horizontalOffset: 6,
            noHorizontalOverlap: true,
            noVerticalOverlap: false,
            positionTarget: buttonRef.current,
            verticalAlign: 'bottom',
            verticalOffset: -10,
          } as OverlayPosition
        }
        css={`
          backdrop-filter: blur(1.875rem);
          background: var(--bg-default-blurry);
          border-radius: var(--radius-4);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 10px 25px rgb(0 0 0 / 10%);
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          padding: 0.625rem;
        `}
      >
        <HexColorPicker color={defaultColor} onChange={handleChange} />
        <div
          css={`
            align-items: center;
            display: grid;
            font-size: 0.875rem;
            gap: 0.625rem;
            grid-template-columns: max-content 1fr;
            width: 12.5rem;
          `}
        >
          <div
            css={`
              padding-left: 0.25rem;
            `}
          >
            Hex
          </div>
          <HexColorInput
            color={color}
            onChange={handleChange}
            css={`
              background: var(--white);
              border: 1px solid var(--border-subtle);
              border-radius: 0.375rem;
              font-family: inherit;
              padding: 0.375rem;
              text-transform: uppercase;
              width: 100%;
              &:focus {
                outline-color: var(--primary50);
              }
              &::placeholder {
                color: var(--fg-muted);
              }
            `}
          />
        </div>
      </Overlay>
    </>
  );
};
