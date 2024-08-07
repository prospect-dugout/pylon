import {ComponentChildren, FunctionalComponent, h} from 'preact';
import styled from 'styled-components';
import {
  CustomCSSProperties,
  Gap,
  customCSSPropertiesRule,
  gapMap,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

export type StackProps = CustomCSSProperties<{
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  children: ComponentChildren;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: Gap;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}>;

export const Stack: FunctionalComponent<StackProps> = ({
  alignItems,
  children,
  direction,
  gap,
  justifyContent,
  ...props
}: StackProps) => {
  return (
    <StyledStack
      $alignItems={alignItems}
      $direction={direction}
      $gap={gap}
      $extraCss={customCSSPropertiesRule(props)}
      $justifyContent={justifyContent}
      {...nonCustomCSSProps(props)}
    >
      {children}
    </StyledStack>
  );
};

const StyledStack = styled.div<{
  $alignItems: StackProps['alignItems'];
  $direction: StackProps['direction'];
  $gap: StackProps['gap'];
  $justifyContent: StackProps['justifyContent'];
  $extraCss: any;
}>`
  align-items: ${(p) => p.$alignItems || ''};
  display: flex;
  flex-direction: ${(p) => p.$direction || ''};
  gap: ${(p) => (p.$gap ? gapMap[p.$gap] : '')};
  justify-content: ${(p) => p.$justifyContent || ''};
  ${(p) => p.$extraCss}
`;
