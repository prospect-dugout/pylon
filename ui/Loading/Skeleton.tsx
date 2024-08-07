import {FunctionalComponent, h} from 'preact';
import {css, keyframes} from 'styled-components';
import {Gap} from '../../lib/custom-css-properties-rule';

type Props = {
  animation?: boolean;
  height?: string | Gap;
  variant?: 'rectangular' | 'circular' | 'rounded';
  width?: string | number;
};

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const Skeleton: FunctionalComponent<Props> = ({
  animation = true,
  height = '1rem',
  variant = 'rounded',
  width = '1rem',
  ...props
}: Props) => {
  return (
    <div
      css={`
        background: var(--bg-subtle);
        border-radius: ${variant === 'circular'
          ? width
          : variant === 'rounded'
            ? 'var(--radius-2)'
            : '0'};
        height: ${height};
        overflow: hidden;
        position: relative;
        width: ${width};

        ${animation &&
        css`
          &::after {
            animation: ${shimmer} 1.25s infinite;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0,
              rgba(255, 255, 255, 0.3) 20%,
              rgba(255, 255, 255, 0.6) 60%,
              rgba(255, 255, 255, 0)
            );
            content: '';
            inset: 0;
            position: absolute;
            transform: translateX(-100%);
          }
        `}
      `}
      {...props}
    />
  );
};
