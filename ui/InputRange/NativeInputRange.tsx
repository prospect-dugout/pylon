import {FunctionalComponent, JSX, h} from 'preact';
import styled from 'styled-components';

type Props = JSX.HTMLAttributes<HTMLInputElement>;

export const NativeInputRange: FunctionalComponent<Props> = (props: Props) => {
  return <StyledInput type="range" {...props} />;
};

const thumbStyles = `
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid var(--primary50);
  background: var(--primary50);
  border-radius: var(--radius-round);
  width: 1rem;
  height: 1rem;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 0.1875rem;
  border-top: white;
  border-bottom: white;
  background: var(--border-muted);
  width: 100%;

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &::-webkit-slider-thumb {
    ${thumbStyles}
  }
`;
