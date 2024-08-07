import {ComponentChildren, FunctionalComponent, JSX, h} from 'preact';
import {
  CustomCSSProperties,
  Gap,
  customCSSPropertiesRule,
  gapMap,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type Props = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'rows' | 'cols'> &
  CustomCSSProperties<{
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    children: ComponentChildren;
    cols?: string;
    gap?: Gap;
    rows?: string;
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
    tagName?: string;
  }>;

export const Grid: FunctionalComponent<Props> = ({
  alignItems,
  children,
  cols,
  gap,
  justifyContent,
  rows,
  tagName = 'div',
  ...props
}: Props) => {
  return (
    <div
      as={tagName}
      css={`
        align-items: ${alignItems || ''};
        display: grid;
        grid-template-columns: ${cols};
        grid-template-rows: ${rows};
        gap: ${gap ? gapMap[gap] : ''};
        justify-content: ${justifyContent || ''};
        > * {
          min-width: 0;
          min-height: 0;
        }
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      {children}
    </div>
  );
};
