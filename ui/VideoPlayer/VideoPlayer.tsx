import {FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {useRef, useState} from 'preact/hooks';
import styled, {css} from 'styled-components';
import {IconButton} from '../IconButton';

type CustomProps = {
  containerCss?: ReturnType<typeof css>;
  containerProps?: Partial<JSX.HTMLAttributes<HTMLDivElement>>;
};

export type VideoPlayerProps = Omit<
  JSX.HTMLAttributes<HTMLVideoElement>,
  keyof CustomProps
> &
  CustomProps;

export const VideoPlayer: FunctionalComponent<VideoPlayerProps> = forwardRef<
  HTMLVideoElement,
  VideoPlayerProps
>(({containerCss, containerProps, ...restProps}: VideoPlayerProps, ref) => {
  const defaultMuted =
    typeof restProps.muted === 'boolean' ? restProps.muted : false;
  const innerVideoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [isMuted, setMuted] = useState(defaultMuted);

  const onContainerClick = (evt: MouseEvent) => {
    evt.stopPropagation();
    setPaused((prev) => {
      if (!innerVideoRef.current) return prev;
      if (!prev) {
        innerVideoRef.current.pause();
      } else {
        innerVideoRef.current.play();
      }
      return !prev;
    });
  };

  const onClickVolumeBtn = (evt: MouseEvent) => {
    evt.stopPropagation();
    if (!innerVideoRef.current) return;
    const muted = !innerVideoRef.current.muted;
    innerVideoRef.current.muted = muted;
    setMuted(muted);
  };

  const videoProps = {
    autoPlay: true,
    loop: true,
    muted: defaultMuted,
    controls: false,
    ...restProps,
  };

  return (
    <div
      role="button"
      onClick={onContainerClick}
      css={`
        cursor: pointer;
        position: relative;
        ${containerCss}
      `}
      {...containerProps}
    >
      <StyledVideo
        ref={(el: HTMLVideoElement | null) => {
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
          innerVideoRef.current = el;
        }}
        {...videoProps}
      />
      <StyledVolumeIconButton
        variant="unstyled"
        icon={isMuted ? 'volume-mute' : 'volume'}
        size={20}
        onClick={onClickVolumeBtn}
      />

      {paused && (
        <StyledPlayIconButton variant="unstyled" icon="play" iconSize={78} />
      )}
    </div>
  );
});

const StyledVideo = styled.video`
  max-height: 100%;
  max-width: 100%;
`;

const StyledPlayIconButton = styled(IconButton)`
  color: var(--white);
  left: 50%;
  max-height: 100px;
  opacity: 0.8;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const StyledVolumeIconButton = styled(IconButton)`
  color: var(--white);
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  padding: var(--gap-2);
  background: var(--black);
  border-radius: 50%;
`;
