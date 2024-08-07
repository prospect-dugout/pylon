import {InputProps} from './Input';

export type InputVariant = 'default' | 'search';

type Props = Pick<InputProps, 'disabled' | 'size' | 'invalid'> & {
  focused: boolean;
};

type Response = {
  [key in InputVariant]: {
    background: string;
    border: string;
    borderRadius: string;
    color: string;
    placeholderColor: string;
  };
};

/* prettier-ignore */
export function variants({disabled, size, focused, invalid}: Props): Response {
  return {
    default: {
      background: `var(--input-bg)`,
      border: `${focused ? invalid ? `${size === 'sm' ? '1px' : '2px'} solid var(--input-outline-error-color)` : `${size === 'sm' ? '1px' : '2px'} solid var(--input-outline-color)` : invalid ? '1px solid var(--input-outline-error-color)' : '1px solid var(--input-border-color)'}`,
      borderRadius: `var(--input-radius-${size})`,
      color: `${disabled ? 'var(--fg-disabled)' : 'var(--fg-default)'}`,
      placeholderColor: `${disabled ? 'var(--fg-disabled)' : 'var(--fg-placeholder)'}`,
    },
    search: {
      background: 'var(--bg-minimal)',
      border: 'none',
      borderRadius: 'var(--radius-round)',
      color: `${disabled ? 'var(--fg-disabled)' : 'var(--fg-default)'}`,
      placeholderColor: `${disabled ? 'var(--fg-disabled)' : 'var(--fg-placeholder)'}`,
    },
  };
}
