import {css} from 'styled-components';

export type IconButtonVariant =
  | 'unstyled'
  | 'default'
  | 'muted'
  | 'outline'
  | 'outline-muted'
  | 'outline-primary'
  | 'primary'
  | 'primary-soft'
  | 'secondary'
  | 'secondary-soft'
  | 'error'
  | 'error-soft';

export const variantsStyles: {
  [_key in IconButtonVariant]: ReturnType<typeof css>;
} = {
  unstyled: css``,
  default: css`
    color: var(--fg-default);

    &:hover {
      background-color: var(--bg-subtle);
      color: var(--fg-default);
    }
  `,
  muted: css`
    color: var(--fg-muted);
    &:hover {
      background-color: var(--bg-subtle);
      color: var(--fg-default);
    }
  `,
  primary: css`
    color: var(--primary50);
    &:hover {
      background-color: var(--primary5);
      color: var(--primary70);
    }
  `,
  secondary: css`
    color: var(--secondary50);
    &:hover {
      background-color: var(--secondary5);
      color: var(--secondary70);
    }
  `,
  error: css`
    color: var(--red50);

    &:hover {
      background: var(--red5);
    }
  `,
  'error-soft': css`
    color: var(--red50);
    background: var(--red5);

    &:hover {
      background: var(--red10);
    }
  `,
  'primary-soft': css`
    color: var(--primary80);
    background: var(--primary5);

    &:hover {
      background: var(--primary10);
    }
  `,
  'secondary-soft': css`
    color: var(--secondary80);
    background: var(--secondary5);

    &:hover {
      background: var(--secondary10);
    }
  `,
  outline: css`
    border: 1px solid var(--border-subtle);
    color: var(--fg-default);
    &:hover {
      background: var(--bg-subtle);
    }
  `,
  'outline-muted': css`
    border: 1px solid var(--border-subtle);
    color: var(--fg-muted);
    &:hover {
      background: var(--bg-subtle);
      color: var(--fg-default);
    }
  `,
  'outline-primary': css`
    border: 1px solid var(--primary50);
    color: var(--primary50);

    &:hover {
      background: var(--primary5);
    }
  `,
};
