import {
  ComponentChildren,
  Fragment,
  FunctionalComponent,
  VNode,
  cloneElement,
  h,
  isValidElement,
} from 'preact';
import {useRef, useState} from 'preact/hooks';
import {Overlay, OverlayPosition} from '../Overlay';
import {Typography} from '../Typography';

export type TooltipProps = {
  children: ComponentChildren;
  delay?: number;
  disabled?: boolean;
  keepOpenedOnChildFocus?: boolean;
  overlayPosition?: Omit<OverlayPosition, 'positionTarget'>;
  severity?: TooltipSeverity;
  text?: string | ComponentChildren;
  title?: string;
};

export const Tooltip: FunctionalComponent<TooltipProps> = ({
  children,
  delay = 0,
  disabled = false,
  keepOpenedOnChildFocus = false,
  overlayPosition,
  severity = 'default',
  text,
  title,
  ...props
}: TooltipProps) => {
  const childrenRef = useRef<HTMLElement>(null);
  const [opened, setOpened] = useState<boolean>(false);
  const [isChildFocused, setIsChildFocused] = useState(false);
  const openJob = useRef<NodeJS.Timeout | null>(null);
  const closeJob = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    clearTimeout(openJob.current ?? -1);
    clearTimeout(closeJob.current ?? -1);
    if (delay > 0) {
      openJob.current = setTimeout(() => {
        setOpened(true);
      }, delay);
    } else {
      setOpened(true);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(openJob.current ?? -1);
    clearTimeout(closeJob.current ?? -1);
    closeJob.current = setTimeout(() => {
      setOpened(false);
    });
  };

  let childWithRef;

  if (
    isValidElement(children) &&
    typeof children.type === 'function' &&
    !children.type.displayName?.includes('ForwardRef')
  ) {
    childWithRef = (
      <div
        ref={childrenRef as any}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocusCapture={() => setIsChildFocused(true)}
        onBlurCapture={() => setIsChildFocused(false)}
        css={`
          display: inline-block;
        `}
        {...props}
      >
        {children}
      </div>
    );
  } else {
    childWithRef = cloneElement(children as VNode<any>, {
      ref: childrenRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocusCapture: () => setIsChildFocused(true),
      onBlurCapture: () => setIsChildFocused(false),
    });
  }

  const visible = (keepOpenedOnChildFocus && isChildFocused) || opened;

  return (
    <div
      css={`
        display: contents;
      `}
    >
      {childWithRef}
      {visible && !!childrenRef.current && !disabled && (
        <Overlay
          opened={visible}
          role="tooltip"
          noAutoFocus
          animation="opacity"
          position={{positionTarget: childrenRef.current, ...overlayPosition}}
          onMouseEnter={() => clearTimeout(closeJob.current!)}
          onMouseLeave={handleMouseLeave}
          css={`
            background: ${styleMap[severity].bgColor};
            border-radius: var(--radius-2);
            box-shadow: var(--shadow-1);
            color: ${styleMap[severity].color};
            cursor: default;
            max-width: 18.5rem;
            padding: var(--gap-1-5) var(--gap-2);
            user-select: none;
          `}
        >
          {!!title && (
            <Typography variant="body4" weight="bold">
              {title}
            </Typography>
          )}
          {!!text && (
            <Typography variant="body4" tagName="span">
              {text}
            </Typography>
          )}
        </Overlay>
      )}
    </div>
  );
};

type TooltipSeverity = 'default' | 'success' | 'info' | 'warning' | 'error';

const styleMap: {
  [_key in TooltipSeverity]: {
    bgColor: string;
    color: string;
  };
} = {
  default: {
    bgColor: 'var(--gray90)',
    color: 'var(--white)',
  },
  success: {
    bgColor: 'var(--success-dark)',
    color: 'var(--success-dark-contrast-text)',
  },
  info: {
    bgColor: 'var(--info-dark)',
    color: 'var(--info-dark-contrast-text)',
  },
  warning: {
    bgColor: 'var(--warning-dark)',
    color: 'var(--warning-dark-contrast-text)',
  },
  error: {
    bgColor: 'var(--error-dark)',
    color: 'var(--error-dark-contrast-text)',
  },
};
