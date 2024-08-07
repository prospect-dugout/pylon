import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {IconButton} from '../IconButton';
import {Typography} from '../Typography';

const stylesMap: {
  [key: string]: {
    bgColor: string;
    color: string;
    emoji?: string;
  };
} = {
  default: {
    bgColor: 'var(--bg-minimal)',
    color: 'var(--fg-default)',
  },
  info: {
    bgColor: 'var(--info)',
    color: 'var(--info-contrast-text)',
    emoji: 'ℹ️',
  },
  warning: {
    bgColor: 'var(--warning)',
    color: 'var(--warning-contrast-text)',
    emoji: '⚠️',
  },
  error: {
    bgColor: 'var(--error)',
    color: 'var(--error-contrast-text)',
    emoji: '💥',
  },
  success: {
    bgColor: 'var(--success)',
    color: 'var(--success-contrast-text)',
    emoji: '✅',
  },
};

export type Severity = 'default' | 'success' | 'info' | 'warning' | 'error';

type Props = CustomCSSProperties<{
  /**
   * The type of the alert. This defines the color and icon used.
   * @default 'default'
   */
  children: ComponentChildren;
  contentCss?: ReturnType<typeof css>;
  onClickClose?: () => void;
  severity?: Severity;
  withoutIcon?: boolean;
}>;

export const ToastMessage: FunctionalComponent<Props> = ({
  children,
  contentCss,
  onClickClose,
  severity = 'default',
  withoutIcon = false,
  ...restProps
}: Props) => {
  const {bgColor, color, emoji} = stylesMap[severity];

  const hasIcon = emoji && !withoutIcon;
  const hasCloseButton = !!onClickClose;

  return (
    <div
      css={`
        background: ${bgColor};
        border-radius: var(--radius-2);
        color: ${color};
        display: flex;
        gap: var(--gap-2);
        min-height: calc(var(--button-height-md) + var(--gap-6));
        padding: var(--gap-3) var(--gap-4);
        position: relative;
        ${customCSSPropertiesRule(restProps)}
      `}
      {...nonCustomCSSProps(restProps)}
    >
      {(hasCloseButton || hasIcon) && (
        <div
          css={`
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: space-between;
            left: var(--gap-4);
            max-height: var(--button-height-md);
            pointer-events: none;
            position: absolute;
            right: var(--gap-4);
            top: var(--gap-3);
          `}
        >
          {hasIcon && (
            <div
              css={`
                flex-shrink: 0;
                font-size: var(--font-size-subtitle-1);
                min-width: 1.875rem;
                text-align: center;
              `}
            >
              {emoji}
            </div>
          )}
          {hasCloseButton && (
            <IconButton
              icon="close"
              size={20}
              css-color="inherit"
              onClick={onClickClose}
              css={`
                flex-shrink: 0;
                pointer-events: all;
              `}
            />
          )}
        </div>
      )}
      <Typography
        weight="medium"
        css={`
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          flex: 1;
          padding-left: ${hasIcon ? 'var(--gap-10)' : 0};
          padding-right: ${hasCloseButton ? 'var(--gap-10)' : 0};
          ${contentCss}
        `}
      >
        {children}
      </Typography>
    </div>
  );
};
