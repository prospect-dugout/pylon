import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {Typography} from '../Typography';

type BadgeVariant =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'success-dark'
  | 'error-dark'
  | 'warning-dark'
  | 'info-dark';

type Props = {
  children?: ComponentChildren;
  variant?: BadgeVariant;
  withDot?: boolean;
};

export const Badge: FunctionalComponent<Props> = ({
  children,
  withDot = false,
  variant = 'success',
  ...restProps
}: Props) => {
  const {color, background, dotColor} = variantMap[variant];

  return (
    <div
      css={`
        align-items: center;
        background: ${background};
        border-radius: var(--radius-4);
        color: ${color};
        display: inline-flex;
        height: 1.625rem;
        gap: var(--gap-1-5);
        padding: 0 var(--gap-3);
      `}
      {...restProps}
    >
      {withDot && (
        <div
          css={`
            background: ${dotColor};
            border-radius: 50%;
            height: 6px;
            width: 6px;
          `}
        />
      )}
      <Typography variant="body5" weight="bold" textTransform="uppercase">
        {children}
      </Typography>
    </div>
  );
};

const variantMap = {
  info: {
    background: 'var(--info)',
    color: 'var(--info-contrast-text)',
    dotColor: 'var(--info-contrast-text)',
  },
  success: {
    background: 'var(--success)',
    color: 'var(--success-contrast-text)',
    dotColor: 'var(--success-contrast-text)',
  },
  error: {
    background: 'var(--error)',
    color: 'var(--error-contrast-text)',
    dotColor: 'var(--error-contrast-text)',
  },
  warning: {
    background: 'var(--warning)',
    color: 'var(--warning-contrast-text)',
    dotColor: 'var(--warning-contrast-text)',
  },
  'info-dark': {
    background: 'var(--info-dark)',
    color: 'var(--info-dark-contrast-text)',
    dotColor: 'var(--info-dark-contrast-text)',
  },
  'success-dark': {
    background: 'var(--success-dark)',
    color: 'var(--success-dark-contrast-text)',
    dotColor: 'var(--success-dark-contrast-text)',
  },
  'error-dark': {
    background: 'var(--error-dark)',
    color: 'var(--error-dark-contrast-text)',
    dotColor: 'var(--error-dark-contrast-text)',
  },
  'warning-dark': {
    background: 'var(--warning-dark)',
    color: 'var(--warning-dark-contrast-text)',
    dotColor: 'var(--warning-dark-contrast-text)',
  },
};
