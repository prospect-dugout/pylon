import {Component, ComponentChildren, FunctionalComponent, h} from 'preact';
import {useLayoutEffect, useRef} from 'preact/hooks';
import {Icon, IconName} from '../Icon';
import {IconButton} from '../IconButton';
import {Overlay} from '../Overlay';
import {OverlayProps} from '../Overlay/Overlay';

type SnackbarOrigin = {
  vertical: 'top' | 'middle' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error';

const styleMap: {
  [_key in SnackbarSeverity]: {
    bgColor: string;
    color: string;
    iconName: IconName;
  };
} = {
  success: {
    bgColor: 'var(--success-dark)',
    color: 'var(--success-dark-contrast-text)',
    iconName: 'check-circle-outline',
  },
  info: {
    bgColor: 'var(--info-dark)',
    color: 'var(--info-dark-contrast-text)',
    iconName: 'info-circle-outline',
  },
  warning: {
    bgColor: 'var(--warning-dark)',
    color: 'var(--warning-dark-contrast-text)',
    iconName: 'alert-outline',
  },
  error: {
    bgColor: 'var(--error-dark)',
    color: 'var(--error-dark-contrast-text)',
    iconName: 'alert-outline',
  },
};

export type SnackbarProps = {
  /**
   * The type of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: SnackbarSeverity;
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'center' }
   */
  anchorOrigin?: SnackbarOrigin;
  /**
   * The number of milliseconds to wait before automatically closing the overlay.
   * @default null
   */
  autoHideDuration?: number | null;
  children?: ComponentChildren;
  /**
   * If present, displays an image instead of the default icons.
   * @default false
   */
  customImage?: Component;
  /**
   * If `true`, the close button won't be rendered.
   * @default false
   */
  noCloseButton?: boolean;
  /**
   * If `true`, the default icons won't be rendered.
   * @default false
   */
  noIcon?: boolean;
  /**
   * If `true`, the component is shown.
   * @default false
   */
  opened: boolean;
  overlayProps?: Pick<
    OverlayProps,
    | 'cancelOnEscKey'
    | 'cancelOnOutsideClick'
    | 'withBackdrop'
    | 'backdropColor'
    | 'noAutoFocus'
  > | null;
  setOpened: (opened: boolean) => void;
};

export const Snackbar: FunctionalComponent<SnackbarProps> = ({
  severity = 'success',
  anchorOrigin = {vertical: 'bottom', horizontal: 'center'},
  autoHideDuration = null,
  children,
  customImage,
  noCloseButton = false,
  noIcon = false,
  opened = false,
  overlayProps = null,
  setOpened,
  ...props
}: SnackbarProps) => {
  const timerAutoHide = useRef<number>();

  useLayoutEffect(() => {
    if (opened && autoHideDuration !== null) {
      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = window.setTimeout(() => {
        setOpened(false);
      }, autoHideDuration);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [autoHideDuration, opened, setOpened]);

  const {bgColor, color, iconName} = styleMap[severity];

  return (
    <Overlay
      opened={opened}
      cancelOnEscKey={false}
      cancelOnOutsideClick={false}
      animation="scale-in"
      css={`
        border-radius: var(--radius-4);
        display: flex;
        flex-direction: row;
        inset: 0;
        padding: 2rem;
        pointer-events: none;
        align-items: ${anchorOrigin.vertical === 'bottom'
          ? 'flex-end'
          : anchorOrigin.vertical === 'top'
            ? 'flex-start'
            : 'center'};
        justify-content: ${anchorOrigin.horizontal === 'left'
          ? 'left'
          : anchorOrigin.horizontal === 'right'
            ? 'flex-end'
            : 'center'};
      `}
      {...overlayProps}
    >
      <div
        css={`
          align-items: center;
          background: ${bgColor};
          border-radius: var(--radius-1);
          box-shadow: var(--shadow-xl);
          color: ${color};
          display: flex;
          padding: ${customImage ? '.875rem' : '.875rem 1rem'};
          pointer-events: all;
          will-change: transform;
        `}
        {...props}
      >
        {customImage ? (
          customImage
        ) : !noIcon ? (
          <Icon
            icon={iconName}
            css={`
              color: ${color};
              height: 1.5rem;
              width: 1.5rem;
            `}
          />
        ) : null}
        <div
          css={`
            margin: 0 0.75rem;
          `}
        >
          {children}
        </div>
        {noCloseButton ? null : (
          <IconButton
            icon="close"
            onClick={() => {
              clearTimeout(timerAutoHide.current);
              setOpened(false);
            }}
            css={`
              color: inherit;
              margin-right: -0.125rem;
              padding: 0;
              &:hover {
                color: ${color};
              }
            `}
          />
        )}
      </div>
    </Overlay>
  );
};
