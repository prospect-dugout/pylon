import {ComponentChildren, FunctionalComponent, JSX, h} from 'preact';
import {createPortal, forwardRef} from 'preact/compat';
import {
  MutableRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'preact/hooks';
import styled, {css} from 'styled-components';
import {afterNextRender, off, on} from '../../lib/utils';
import {OverlayAnimation, getAnimationCss} from './animations';
import {getOverlayPosition} from './get-overlay-position';

export type OverlayPosition = {
  horizontalAlign?: 'left' | 'center' | 'right';
  horizontalOffset?: number;
  mode?: 'absolute' | 'fixed' | 'centered';
  noHorizontalOverlap?: boolean;
  noVerticalOverlap?: boolean;
  positionEvent?: MouseEvent | null;
  positionTarget?: HTMLElement | null;
  verticalAlign?: 'top' | 'middle' | 'bottom';
  verticalOffset?: number;
};

export type OverlayCustomProps = {
  animation?: OverlayAnimation;
  backdropColor?: string;
  cancelOnEscKey?: boolean;
  cancelOnOutsideClick?: boolean;
  children: ComponentChildren;
  closeOthers?: boolean | string;
  disableBodyScroll?: boolean;
  noAutoFocus?: boolean;
  opened: boolean;
  position?: OverlayPosition;
  pushHistoryState?: boolean;
  rootCss?: ReturnType<typeof css>;
  setOpened?: (opened: boolean) => void;
  withBackdrop?: boolean;
};

export type OverlayProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  keyof OverlayCustomProps | 'default'
> &
  OverlayCustomProps;

export const Overlay: FunctionalComponent<OverlayProps> = forwardRef(
  (
    {
      animation,
      backdropColor = 'rgba(0, 0, 0, 0.33)',
      cancelOnEscKey = false,
      cancelOnOutsideClick = false,
      children,
      closeOthers = false,
      disableBodyScroll = false,
      noAutoFocus = false,
      opened = false,
      position,
      pushHistoryState = false,
      rootCss,
      setOpened,
      withBackdrop = false,
      ...restProps
    }: OverlayProps,
    ref,
  ) => {
    const rootRef = useRef() as MutableRef<HTMLDivElement>;
    const overlayRef = useRef() as MutableRef<HTMLDivElement>;
    const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const isLastOpened = (): boolean => {
      const overlays = getOpenedOverlays();
      return overlays.length - 1 === overlays.indexOf(rootRef.current);
    };

    /* cancelOnEscKey */
    useEffect(() => {
      const handleCancelOnEscKey = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape' && isLastOpened()) {
          setOpened?.(false);
        }
      };

      if (cancelOnEscKey && visible && isLastOpened()) {
        on(document, 'keydown', handleCancelOnEscKey);
      }

      return () => {
        off(document, 'keydown', handleCancelOnEscKey);
      };
    }, [cancelOnEscKey, visible, setOpened]);

    /* cancelOnOutsideClick */
    useEffect(() => {
      const handleClickOutside = (evt: MouseEvent) => {
        if (
          overlayRef.current &&
          !overlayRef.current.contains(evt.target as Node) &&
          isLastOpened()
        ) {
          evt.stopPropagation();
          evt.preventDefault();
          setOpened?.(false);
        }
      };

      if (cancelOnOutsideClick && visible && isLastOpened()) {
        on(document, 'mousedown', handleClickOutside);
        on(document, 'touchend', handleClickOutside);
      }

      return () => {
        off(document, 'mousedown', handleClickOutside);
        off(document, 'touchend', handleClickOutside);
      };
    }, [cancelOnOutsideClick, visible, setOpened]);

    /* closeOthers */
    useEffect(() => {
      const handleCloseOthers = (
        evt: CustomEvent<{overlay: HTMLDivElement}>,
      ) => {
        if (
          closeOthers &&
          !isLastOpened() &&
          (closeOthers === true || evt.detail.overlay.matches(closeOthers))
        ) {
          setOpened?.(false);
        }
      };

      on(window, 'overlay-opened', handleCloseOthers);

      return () => {
        off(window, 'overlay-opened', handleCloseOthers);
      };
    }, [opened, setOpened, closeOthers]);

    // autofocus
    useLayoutEffect(() => {
      if (opened && !noAutoFocus) {
        const x = window.scrollX;
        const y = window.scrollY;
        overlayRef.current.focus();
        window.scrollTo(x, y);
      }
    }, [noAutoFocus, opened]);

    // disableBodyScroll
    useEffect(() => {
      if (opened && disableBodyScroll) {
        // safari ios needs both
        document.body.style.overflow = 'hidden';
      }

      return () => {
        if (
          disableBodyScroll &&
          getOpenedOverlays().filter((el) => el.dataset.disabledBodyScroll)
            .length <= 1
        ) {
          document.body.style.overflow = '';
        }
      };
    }, [disableBodyScroll, opened]);

    // pushHistoryState
    useEffect(() => {
      const handlePopState = () => {
        if (opened) {
          setOpened?.(false);
        }
      };

      if (pushHistoryState) {
        on(window, 'popstate', handlePopState);

        if (opened) {
          window.history.pushState({}, '');
        }
      }

      return () => {
        off(window, 'popstate', handlePopState);
      };
    }, [pushHistoryState, opened, setOpened]);

    // opening/closing
    useEffect(() => {
      if (opened && !visible) {
        // Animate in and/or set visible to true
        if (position?.positionTarget || position?.positionEvent) {
          overlayRef.current.style.inset = getOverlayPosition(
            overlayRef,
            position,
          );
        }
        if (animation) {
          overlayRef.current.classList.add('animate-in');
        } else {
          overlayRef.current.style.opacity = '1';
        }

        setVisible(true);
      } else if (!opened && visible) {
        // Animate out and/or set visible to false
        if (animation) {
          overlayRef.current.addEventListener(
            'transitionend',
            () => setVisible(false),
            {
              once: true,
            },
          );
          overlayRef.current.classList.remove('animate-in');
        } else {
          setVisible(false);
        }
      }
    }, [animation, opened, position, visible]);

    /* overlay-opened event */
    useEffect(() => {
      const dispatchOverlayOpenedEvent = () => {
        window.dispatchEvent(
          new CustomEvent('overlay-opened', {
            detail: {overlay: overlayRef.current},
          }),
        );
      };

      if (opened) {
        afterNextRender(dispatchOverlayOpenedEvent);
      }
    }, [opened]);

    // show backdrop (this ensures animation happens)
    useEffect(() => {
      if (withBackdrop) {
        if (opened && !visible) {
          setShowBackdrop(true);
        } else if (!opened && visible) {
          setShowBackdrop(false);
        }
      }
    }, [opened, visible, withBackdrop]);

    if (opened || visible) {
      return createPortal(
        <StyledRoot
          ref={rootRef}
          data-overlay
          {...(disableBodyScroll && {'data-disabled-body-scroll': true})}
          $mode={position?.mode}
          $rootCss={rootCss}
        >
          <StyledOverlay
            ref={(el: HTMLDivElement | null) => {
              if (typeof ref === 'function') {
                ref(el);
              } else if (ref) {
                ref.current = el;
              }
              if (el) {
                overlayRef.current = el;
              }
            }}
            tabIndex={1}
            $animation={animation}
            $mode={position?.mode}
            {...restProps}
          >
            {children}
          </StyledOverlay>
          {withBackdrop && (
            <StyledBackdrop $bg={backdropColor} $showBackdrop={showBackdrop} />
          )}
        </StyledRoot>,
        document.body,
      );
    } else {
      return null;
    }
  },
);

const getOpenedOverlays = () => {
  return Array.from(
    document.body.querySelectorAll<HTMLDivElement>('div[data-overlay]'),
  );
};

const StyledRoot = styled.div<{
  $mode?: OverlayPosition['mode'];
  $rootCss?: ReturnType<typeof css>;
}>`
  inset: 0;
  pointer-events: none;
  z-index: 999990;
  ${(p) =>
    p.$mode === 'centered'
      ? css`
          align-items: center;
          display: flex;
          justify-content: center;
          position: fixed;
        `
      : css`
          margin: var(--gap-1-5); // min viewport margin
          position: ${p.$mode === 'fixed' ? 'fixed' : 'absolute'};
        `}
  ${(p) => p.$rootCss}
`;

const StyledOverlay = styled.div<{
  $mode?: OverlayPosition['mode'];
  $animation?: OverlayAnimation;
}>`
  max-height: 100%;
  opacity: 0;
  outline: 0;
  pointer-events: all;
  position: ${(p) => (p.$mode === 'centered' ? 'relative' : 'absolute')};
  z-index: 999992;
  ${(p) => getAnimationCss(p.$animation)}
`;

const StyledBackdrop = styled.div<{
  $bg: string;
  $showBackdrop: boolean;
}>`
  background: ${(p) => p.$bg};
  inset: 0;
  opacity: ${(p) => (p.$showBackdrop ? 1 : 0)};
  pointer-events: ${(p) => (p.$showBackdrop ? 'all' : 'none')};
  position: fixed;
  transition: opacity 0.25s;
  z-index: 999991;
`;
