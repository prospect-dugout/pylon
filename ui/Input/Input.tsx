import {ComponentChildren, FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {useLayoutEffect, useRef, useState} from 'preact/hooks';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {afterNextRender} from '../../lib/utils';
import {Input_Adorment} from './_Adorment';
import {InputVariant, variants} from './variants';

export type InputCustomProps = CustomCSSProperties<{
  autofocus?: boolean;
  containerCss?: ReturnType<typeof css>;
  disabled?: boolean;
  endAdornment?: ComponentChildren;
  invalid?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  startAdornment?: ComponentChildren;
  variant?: InputVariant;
}>;

export type InputProps = Omit<
  JSX.HTMLAttributes<HTMLInputElement>,
  keyof InputCustomProps
> &
  InputCustomProps;

export const Input: FunctionalComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      autofocus = false,
      containerCss,
      defaultValue,
      disabled,
      endAdornment = null,
      id,
      invalid,
      size = 'md',
      startAdornment,
      variant = 'default',
      ...props
    }: InputProps,
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const [focused, setFocused] = useState<boolean>(false);

    useLayoutEffect(() => {
      if (autofocus) {
        afterNextRender(() => {
          innerRef.current && innerRef.current.focus();
        });
      }

      const onFocus = () => setFocused(true);
      const onBlur = () => setFocused(false);

      innerRef.current?.addEventListener('focus', onFocus);
      innerRef.current?.addEventListener('blur', onBlur);

      return () => {
        innerRef.current?.removeEventListener('focus', onFocus);
        innerRef.current?.removeEventListener('blur', onBlur);
      };
    }, []);

    const handleInputRef = (e: HTMLInputElement | null) => {
      if (typeof ref === 'function') {
        ref(e);
      } else if (ref) {
        ref.current = e;
      }
      innerRef.current = e;
    };

    const {borderRadius, placeholderColor, background, color, border} =
      variants({
        disabled,
        size,
        focused,
        invalid,
      })[variant];

    return (
      <div
        onMouseDown={() => {
          requestAnimationFrame(() => {
            innerRef.current?.focus();
          });
        }}
        css={`
          align-items: center;
          background: ${background};
          border-radius: ${borderRadius};
          display: inline-flex;
          height: var(--input-height-${size});
          position: relative;
          width: 100%;
          ${customCSSPropertiesRule(props)}
          ${containerCss}
        `}
      >
        {startAdornment && (
          <Input_Adorment disabled={disabled} position="start">
            {startAdornment}
          </Input_Adorment>
        )}
        <input
          id={id}
          disabled={disabled}
          ref={handleInputRef}
          aria-invalid={invalid}
          autoComplete="off"
          spellCheck={false}
          defaultValue={defaultValue}
          css={`
            background: inherit;
            border-radius: inherit;
            border: 0;
            color: ${color};
            flex: 1;
            font-size: var(--input-font-size-${size});
            height: 100%;
            outline: 0;
            padding: 0 var(--input-padding-${size});
            width: 100%;
            &::placeholder {
              color: ${placeholderColor};
            }

            &:disabled {
              cursor: not-allowed;
            }
          `}
          {...nonCustomCSSProps(props)}
        />
        {endAdornment && (
          <Input_Adorment disabled={disabled} position="end">
            {endAdornment}
          </Input_Adorment>
        )}
        <fieldset
          aria-hidden
          css={`
            border-radius: inherit;
            border: ${border};
            inset: 0;
            margin: 0;
            min-width: 0%;
            overflow: hidden;
            pointer-events: none;
            position: absolute;
          `}
        />
      </div>
    );
  },
);
