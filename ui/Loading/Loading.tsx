import {FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import styled, {keyframes} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type Props = CustomCSSProperties<{
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}>;

export const Loading: FunctionalComponent<Props> = ({
  centered = false,
  size = 'md',
  ...props
}: Props) => {
  const [updated, setUpdated] = useState<boolean>(false);
  props['css-color'] = props['css-color'] || 'var(--fg-subtle)';

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdated(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledRoot
      $css={customCSSPropertiesRule(props)}
      $centered={centered}
      {...nonCustomCSSProps(props)}
    >
      <StyledSvg
        viewBox="25 25 50 50"
        strokeWidth={widthMap[size]}
        $size={size}
        $updated={updated}
      >
        <circle cx="50" cy="50" r="20" />
      </StyledSvg>
    </StyledRoot>
  );
};

const sizeMap = {
  sm: '22px',
  md: '32px',
  lg: '42px',
};

const widthMap = {
  sm: '5px',
  md: '4px',
  lg: '3px',
};

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const stretchAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -124px;
  }
`;

const StyledRoot = styled.div<{$centered: boolean; $css: string}>`
  display: ${(p) => (p.$centered ? 'flex' : 'inline-flex')};
  justify-content: ${(p) => (p.$centered ? 'center' : 'initial')};
  align-items: ${(p) => (p.$centered ? 'center' : 'initial')};
  padding: ${(p) => (p.$centered ? '1rem 0' : 'initial')};
  width: ${(p) => (p.$centered ? '100%' : 'initial')};
  ${(p) => p.$css}
`;

const StyledSvg = styled.svg<{
  $size: Props['size'];
  $updated: boolean;
}>`
  animation: ${rotateAnimation} 2s linear infinite;
  height: ${(p) => sizeMap[p.$size!]};
  transform-origin: center;
  vertical-align: middle;
  width: ${(p) => sizeMap[p.$size!]};
  will-change: transform;

  & circle {
    fill: none;
    stroke: currentColor;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    display: ${(p) => (p.$updated ? 'initial' : 'none')};
    animation: ${stretchAnimation} calc(2s * 0.75) ease-in-out infinite;
  }
`;
