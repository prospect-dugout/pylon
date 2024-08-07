import {FunctionalComponent, h} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';
import {TrackGesture} from '../../lib';

type Props = {
  direction: 'row' | 'column';
  onTrack: TrackGesture['onTrack'];
  onTrackEnd: TrackGesture['onTrackEnd'];
  ondblclick?: (e: MouseEvent) => void;
};

export const PanelGroup_ResizeHandle: FunctionalComponent<Props> = ({
  direction,
  onTrack,
  onTrackEnd,
  ondblclick,
}: Props) => {
  const hoverDelayJob = useRef<number | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);

  const clearHoverDelay = () => {
    if (hoverDelayJob.current) {
      window.clearTimeout(hoverDelayJob.current);
      hoverDelayJob.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearHoverDelay();
    hoverDelayJob.current = window.setTimeout(() => {
      setHovered(true);
    }, 250);
  };

  const handleMouseLeave = () => {
    clearHoverDelay();
    setHovered(false);
  };

  useEffect(() => {
    let disposal: TrackGesture['disposal'] | null = null;

    if (targetRef.current) {
      disposal = new TrackGesture({
        onTrack: (params) => {
          onTrack(params);
          setDragging(true);
        },
        onTrackEnd: () => {
          onTrackEnd();
          setDragging(false);
        },
        orientation: direction === 'row' ? 'horizontal' : 'vertical',
        target: targetRef.current,
      }).disposal;
    }

    return () => {
      disposal?.();
      clearHoverDelay();
      setDragging(false);
    };
  }, [direction, onTrack, onTrackEnd]);

  return (
    <div
      css={`
        background: var(--border-primary);
        height: ${direction === 'row' ? '100%' : '1px'};
        position: relative;
        width: ${direction === 'column' ? '100%' : '1px'};
      `}
    >
      <div
        ref={targetRef}
        onDblClick={ondblclick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        css={`
          cursor: ${direction === 'column' ? 'ns-resize' : 'ew-resize'};
          position: absolute;
          z-index: 9999;
          ${direction === 'row'
            ? `
            height: 100%;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 0.5rem;
          `
            : `
            height: 0.5rem;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
          `}
          &:after {
            background: var(--border-subtle);
            content: '';
            opacity: ${dragging || hovered ? 1 : 0};
            position: absolute;
            transition: opacity 0.1s linear;
            ${direction === 'row'
              ? `
                height: 100%;
                left: 0.125rem;
                top: 0;
                width: 0.25rem;
              `
              : `
                height: 0.25rem;
                left: 0;
                top: 0.125rem;
                width: 100%;
              `}
          }
        `}
      />
    </div>
  );
};
