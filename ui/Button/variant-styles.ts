import {css} from 'styled-components';

export type ButtonVariant =
  | 'unstyled'
  | 'default'
  | 'muted'
  | 'primary'
  | 'primary-soft'
  | 'primary-with-shadow'
  | 'secondary'
  | 'secondary-soft'
  | 'error'
  | 'error-soft'
  | 'outline'
  | 'outline-primary'
  | 'outline-muted';

export const variantsStyles: {
  [key in ButtonVariant]: ReturnType<typeof css>;
} = {
  unstyled: css``,
  default: css`
    background: var(--bg-subtle);
    color: var(--fg-default);

    &:hover {
      background: var(--bg-minimal);
    }
  `,
  muted: css`
    color: var(--fg-muted);

    &:hover {
      color: var(--fg-default);
    }
  `,
  primary: css`
    background: var(--primary50);
    color: var(--white);

    &:focus-visible {
      outline: 2px solid var(--primary50);
    }

    &:hover {
      background: var(--primary70);
    }
  `,
  'primary-with-shadow': css`
    background: var(--primary50);
    color: var(--white);
    box-shadow: rgba(var(--primary-rgb), 0.45) 0 0.1875rem 0.5rem 0;
    transition: box-shadow 0.3s cubic-bezier(0.4, 0.3, 0.8, 0.6);

    &:active {
      box-shadow: none;
    }

    &:hover {
      background: var(--primary70);
    }
  `,
  'primary-soft': css`
    background: var(--primary5);
    color: var(--primary80);

    &:hover {
      background: var(--primary10);
    }
  `,
  secondary: css`
    background: var(--secondary50);
    color: var(--white);

    &:hover {
      background: var(--secondary70);
    }
  `,
  'secondary-soft': css`
    background: var(--secondary5);
    color: var(--secondary80);

    &:hover {
      background: var(--secondary10);
    }
  `,
  outline: css`
    border: 1px solid var(--border-default);
    color: var(--fg-default);

    &:hover {
      background: var(--bg-minimal);
    }
  `,
  'outline-primary': css`
    border: 1px solid var(--primary50);
    color: var(--primary50);

    &:hover {
      background: var(--primary5);
    }
  `,
  'outline-muted': css`
    border: 1px solid var(--border-subtle);
    color: var(--fg-muted);

    &:hover {
      background: var(--bg-minimal);
      color: var(--fg-default);
    }
  `,
  error: css`
    background: var(--red50);
    color: var(--white);

    &:hover {
      background: var(--red70);
    }
  `,
  'error-soft': css`
    background: var(--error);
    color: var(--error-contrast-text);

    &:hover {
      background: var(--red10);
    }
  `,
};
