import {FunctionalComponent, JSX, h} from 'preact';
import {forwardRef, useState} from 'preact/compat';
import styled from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type SwitchSize = 'sm' | 'md';

type Props = CustomCSSProperties<{
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: JSX.GenericEventHandler<HTMLInputElement>;
  size?: SwitchSize;
}>;

export const Switch: FunctionalComponent<Props> = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {
      defaultChecked = false,
      disabled = false,
      label,
      onChange,
      size = 'md',
      ...props
    }: Props,
    ref,
  ) => {
    const [checked, setChecked] = useState<boolean>(defaultChecked || false);

    const content = (
      <StyledRoot
        $disabled={disabled}
        $size={size}
        $css={customCSSPropertiesRule(props)}
        {...nonCustomCSSProps(props)}
      >
        <StyledInput
          ref={ref}
          type="checkbox"
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={(evt: any) => {
            const _checked = evt.currentTarget.checked;
            setChecked(_checked);
            onChange?.(evt);
          }}
        />
        <StyledCircle $checked={checked} $size={size}>
          <StyledCircleInner $size={size} />
        </StyledCircle>
        <StyledBackground $checked={checked} $disabled={disabled} />
      </StyledRoot>
    );

    if (label) {
      return (
        <label
          css={`
            align-items: center;
            cursor: ${disabled ? '' : 'pointer'};
            display: inline-flex;
            gap: var(--gap-1);
          `}
        >
          {content}
          <span
            css={`
              color: ${disabled ? 'var(--fg-disabled)' : 'inherit'};
            `}
          >
            {label}
          </span>
        </label>
      );
    } else {
      return content;
    }
  },
);

const sizesMap = {
  sm: {
    rootHeight: '1.875rem',
    rootWidth: '2.5rem',
    circlePadding: '0.6875rem',
    circleSize: '0.5rem',
    circleCheckedTransform: 'translateX(0.625rem)',
  },
  md: {
    rootHeight: '2.125rem',
    rootWidth: '3rem',
    circlePadding: '0.6875rem',
    circleSize: '0.75rem',
    circleCheckedTransform: 'translateX(0.875rem)',
  },
};

const StyledRoot = styled.div<{
  $disabled: boolean;
  $size: SwitchSize;
  $css: string;
}>`
  cursor: ${(p) => (p.$disabled ? 'default' : 'pointer')};
  display: inline-flex;
  flex-shrink: 0;
  height: ${(p) => sizesMap[p.$size].rootHeight};
  margin-left: -0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  vertical-align: middle;
  width: ${(p) => sizesMap[p.$size].rootWidth};
  z-index: 0;
  ${(p) => p.$css}
`;

const StyledCircle = styled.div<{$checked: boolean; $size: SwitchSize}>`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: inline-flex;
  justify-content: center;
  left: 0;
  margin: 0;
  outline: 0;
  padding: ${(p) => sizesMap[p.$size].circlePadding};
  pointer-events: none;
  position: absolute;
  text-decoration: none;
  top: 0;
  transform: ${(p) =>
    p.$checked ? sizesMap[p.$size].circleCheckedTransform : ''};
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  vertical-align: middle;
  z-index: 1;
`;

const StyledCircleInner = styled.div<{$size: SwitchSize}>`
  background-color: var(--white);
  border-radius: 50%;
  height: ${(p) => sizesMap[p.$size].circleSize};
  width: ${(p) => sizesMap[p.$size].circleSize};
`;

const StyledBackground = styled.div<{$checked: boolean; $disabled: boolean}>`
  background: ${(p) =>
    p.$checked && !p.$disabled ? 'var(--primary50)' : 'var(--bg-muted)'};
  border-radius: var(--radius-3);
  height: 100%;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  z-index: -1;
`;

const StyledInput = styled.input`
  cursor: inherit;
  inset: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
`;
