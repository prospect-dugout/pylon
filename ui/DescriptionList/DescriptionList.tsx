import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {
  CustomCSSProperties,
  Gap,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Stack} from '../Stack';

type Props = CustomCSSProperties<{
  children?: ComponentChildren;
  gap?: Gap;
  expandWidthSize?: Gap;
}>;

export const DescriptionList: FunctionalComponent<Props> = ({
  children,
  gap = 0,
  expandWidthSize = 0,
  ...props
}: Props) => {
  return (
    <Stack
      direction="column"
      gap={gap}
      css={`
        margin-left: calc(var(--gap-${expandWidthSize}) * -1);
        width: calc(100% + var(--gap-${expandWidthSize}) * 2);
        > *:nth-child(even) {
          background: var(--bg-minimal);
        }
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      {children}
    </Stack>
  );
};
