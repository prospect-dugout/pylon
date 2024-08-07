import {FunctionalComponent, JSX, Ref, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type AnchorVariant =
  | 'unstyled'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'underline'
  | 'hoverBg'
  | 'hoverUnderline';

type Props = CustomCSSProperties<
  {
    activeClassName?: string;
    variant?: AnchorVariant;
  } & JSX.HTMLAttributes<HTMLAnchorElement>
>;
const variantStyleMap: {
  [key in AnchorVariant]: ReturnType<typeof css>;
} = {
  unstyled: css`
    color: inherit;
    text-decoration: none;
  `,
  default: css`
    color: inherit;
    text-decoration: none;
    &:hover {
      color: var(--primary50);
    }
  `,
  primary: css`
    color: var(--primary50);
    text-decoration: none;
  `,
  secondary: css`
    color: var(--secondary50);
    text-decoration: none;
  `,
  muted: css`
    color: var(--fg-muted);
    text-decoration: none;
    &:hover {
      color: var(--fg-default);
    }
  `,
  hoverUnderline: css`
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
  hoverBg: css`
    border-radius: var(--radius-1);
    color: inherit;
    padding: var(--gap-1-5) var(--gap-2);
    text-decoration: none;
    &:hover {
      background-color: var(--bg-minimal);
    }
  `,
  underline: css`
    color: inherit;
    text-decoration: underline;
    &:hover {
      color: var(--primary50);
    }
  `,
};

export const Anchor: FunctionalComponent<Props> = forwardRef(
  ({variant = 'default', ...props}: Props, ref: Ref<HTMLAnchorElement>) => {
    return (
      <a
        ref={ref}
        css={`
          ${variantStyleMap[variant]}
          ${customCSSPropertiesRule(props)}
        `}
        {...nonCustomCSSProps(props)}
      />
    );
  },
);
