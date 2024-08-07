import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {mediaQuery} from '../../lib/responsive';

type Props = CustomCSSProperties<{
  children?: ComponentChildren;
  size?: ResponsiveSize;
  tagName?: string;
}>;

type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const sizeMap: {
  [key in ResponsiveSize]: string;
} = {
  xs: 'var(--breakpoint-xs)',
  sm: 'var(--breakpoint-sm)',
  md: 'var(--breakpoint-md)',
  lg: 'var(--breakpoint-lg)',
  xl: 'var(--breakpoint-xl)',
  xxl: 'var(--breakpoint-xxl)',
};

export const Responsive: FunctionalComponent<Props> = ({
  children,
  size = 'xl',
  tagName = 'div',
  ...props
}: Props) => {
  return (
    <div
      as={tagName}
      css={`
        margin: 0 auto;
        max-width: ${sizeMap[size]};
        padding-left: var(--gap-5);
        padding-right: var(--gap-5);
        ${mediaQuery(
          'lg>',
          css`
            padding-left: var(--gap-8);
            padding-right: var(--gap-8);
          `,
        )}
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      {children}
    </div>
  );
};
