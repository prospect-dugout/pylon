import {ComponentChildren, FunctionalComponent, JSX, h} from 'preact';
import 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'default';

export type TypographyWeight = 'regular' | 'medium' | 'bold' | 'extra-bold';

type VariantStyleMap = {
  [key in TypographyVariant]: {
    fontSize?: string;
    fontWeight?: string | number;
    letterSpacing?: string;
    lineHeight?: string | number;
    tagName?: string;
  };
};

export const typographyVariants: VariantStyleMap = {
  h1: {
    fontSize: 'var(--font-size-h1)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.01562em',
    lineHeight: 'var(--line-height-1)',
    tagName: 'h1',
  },
  h2: {
    fontSize: 'var(--font-size-h2)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.00833em',
    lineHeight: 'var(--line-height-1)',
    tagName: 'h2',
  },
  h3: {
    fontSize: 'var(--font-size-h3)',
    fontWeight: 'var(--font-weight-extra-bold)',
    lineHeight: 'var(--line-height-1)',
    tagName: 'h3',
  },
  h4: {
    fontSize: 'var(--font-size-h4)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.09rem',
    lineHeight: 'var(--line-height-3)',
    tagName: 'h4',
  },
  h5: {
    fontSize: 'var(--font-size-h5)',
    fontWeight: 'var(--font-weight-extra-bold)',
    letterSpacing: '-0.05rem',
    tagName: 'h5',
  },
  h6: {
    fontSize: 'var(--font-size-h6)',
    fontWeight: 'var(--font-weight-bold)',
    letterSpacing: '-0.05rem',
    tagName: 'h6',
  },
  subtitle1: {
    fontSize: 'var(--font-size-subtitle-1)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: 'var(--line-height-5)',
  },
  subtitle2: {
    fontSize: 'var(--font-size-subtitle-2)',
    fontWeight: 'var(--font-weight-medium)',
  },
  body1: {
    fontSize: 'var(--font-size-body-1)',
  },
  body2: {
    fontSize: 'var(--font-size-body-2)',
  },
  body3: {
    fontSize: 'var(--font-size-body-3)',
  },
  body4: {
    fontSize: 'var(--font-size-body-4)',
  },
  body5: {
    fontSize: 'var(--font-size-body-5)',
  },
  default: {
    fontSize: 'var(--font-size-default)',
  },
};

export type TypographyProps = CustomCSSProperties<{
  children?: ComponentChildren;
  fontStyle?:
    | 'normal'
    | 'italic'
    | 'oblique'
    | 'initial'
    | 'inherit'
    | 'unset'
    | 'revert'
    | 'revert-layer';
  tagName?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  variant?: TypographyVariant;
  weight?: TypographyWeight;
}>;

type Props = JSX.HTMLAttributes<HTMLElement> & TypographyProps;

export const Typography: FunctionalComponent<Props> = ({
  children,
  fontStyle,
  tagName,
  textTransform,
  variant = 'default',
  weight = 'regular',
  ...props
}: Props) => {
  const {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    tagName: defaultTagName,
  } = typographyVariants[variant];

  return (
    <div
      as={tagName || defaultTagName}
      css={`
        font-size: ${fontSize || 'var(--font-size-default)'};
        font-weight: ${fontWeight || `var(--font-weight-${weight})`};
        letter-spacing: ${letterSpacing || 'initial'};
        line-height: ${lineHeight || 'var(--line-height-4)'};
        ${fontStyle ? `font-style: ${fontStyle};` : ''}
        ${textTransform ? `text-transform: ${textTransform};` : ''}
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      {children}
    </div>
  );
};
