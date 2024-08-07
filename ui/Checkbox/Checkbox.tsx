import {FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

export type Props = CustomCSSProperties<{
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  label?: string;
  onChange?: (evt: Event) => void;
}> &
  Omit<JSX.HTMLAttributes<HTMLInputElement>, 'id'>;

export type {Props as CheckboxProps};

export const Checkbox: FunctionalComponent<Props> = forwardRef<
  HTMLInputElement,
  Props
>(({defaultChecked, disabled, label, onChange, ...props}: Props, ref) => {
  const content = (
    <span
      css={`
        align-items: center;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        margin: 0px;
        outline: 0px;
        padding: 0.5625rem;
        position: relative;
        text-decoration: none;
        user-select: none;
        vertical-align: middle;
        ${customCSSPropertiesRule(props)}
      `}
    >
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        css={`
          cursor: inherit;
          inset: 0;
          margin: 0;
          padding: 0;
          position: absolute;
          z-index: 1;
        `}
        defaultChecked={defaultChecked}
        onChange={(evt) => {
          onChange?.(evt);
        }}
        {...nonCustomCSSProps(props)}
      />
    </span>
  );

  if (label) {
    return (
      <label
        css={`
          align-items: center;
          cursor: pointer;
          display: inline-flex;
          ${disabled &&
          css`
            opacity: 0.5;
          `}
        `}
      >
        {content}
        <div
          css={`
            margin-left: var(--gap-2);
          `}
        >
          {label}
        </div>
      </label>
    );
  } else {
    return content;
  }
});
