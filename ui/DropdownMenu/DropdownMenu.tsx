import {ComponentChildren, Fragment, FunctionalComponent, h} from 'preact';
import {MutableRef, useRef, useState} from 'preact/hooks';
import {css} from 'styled-components';
import {Overlay, OverlayPosition, dropdownOverlayCss} from '../Overlay';
import {OverlayAnimation} from '../Overlay/animations';

type Props = {
  children: ComponentChildren[];
  closeTargets?: string[];
  openOnHover?: boolean;
  overlayAnimation?: OverlayAnimation | null;
  overlayPosition?: Omit<OverlayPosition, 'positionTarget'>;
  triggerCss?: ReturnType<typeof css>;
};

export const DropdownMenu: FunctionalComponent<Props> = ({
  children,
  closeTargets = ['button'],
  openOnHover = false,
  overlayAnimation = 'move-down',
  overlayPosition,
  triggerCss,
}: Props) => {
  const closeTimeout = useRef() as MutableRef<number>;
  const triggerRef = useRef() as MutableRef<HTMLDivElement>;
  const [opened, setOpened] = useState<boolean>(false);

  const handleTriggerMouseLeave = () => {
    if (openOnHover) {
      closeTimeout.current = window.setTimeout(() => {
        setOpened(false);
      }, 100);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (openOnHover) {
      setOpened(true);
    }
  };

  const handleOverlayMouseEnter = () => {
    if (openOnHover) {
      window.clearTimeout(closeTimeout.current);
    }
  };

  const handleOverlayMouseLeave = () => {
    if (openOnHover) {
      closeTimeout.current = window.setTimeout(() => {
        setOpened(false);
      }, 100);
    }
  };

  const handleTriggerMouseDown = (evt: Event) => {
    if (opened) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };

  const handleTriggerClick = (evt: Event) => {
    evt.preventDefault();
    evt.stopPropagation();
    setOpened(!opened);
  };

  const handleOverlayClick = (evt: any) => {
    if (closeTargets.length) {
      const path = evt.composedPath ? evt.composedPath() : evt.path;
      for (let idx = 0; idx < path.length; idx++) {
        const node: Element = path[idx];

        if (closeTargets.some((target) => node.matches?.(target))) {
          setOpened(false);
        }
      }
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
        onMouseDown={handleTriggerMouseDown}
        onClick={handleTriggerClick}
        css={`
          display: inline-flex;
          ${triggerCss}
        `}
      >
        {children[0]}
      </div>
      <Overlay
        cancelOnEscKey
        cancelOnOutsideClick
        opened={opened}
        setOpened={setOpened}
        position={{
          ...overlayPosition,
          positionTarget: triggerRef.current,
        }}
        {...(overlayAnimation ? {animation: overlayAnimation} : {})}
        css={dropdownOverlayCss}
      >
        <div
          onMouseEnter={handleOverlayMouseEnter}
          onMouseLeave={handleOverlayMouseLeave}
          onClick={handleOverlayClick}
          css={`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          {children.slice(1, children.length)}
        </div>
      </Overlay>
    </>
  );
};
