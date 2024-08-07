import {FunctionalComponent, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Input, InputProps} from '../Input';
import {Fieldset, FieldsetProps} from './Fieldset';

type Props = InputProps &
  Pick<
    FieldsetProps,
    'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'
  > & {
    fieldsetCss?: ReturnType<typeof css>;
  };

export const FormInput: FunctionalComponent<Props> = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {
      fullWidth = false,
      helpText,
      id,
      invalid,
      invalidText,
      label,
      fieldsetCss,
      size,
      ...props
    }: Props,
    ref,
  ) => {
    return (
      <Fieldset
        fullWidth={fullWidth}
        helpText={helpText}
        labelFor={id}
        invalidText={invalidText}
        label={label}
        size={size}
        css={`
          ${fieldsetCss}
          ${customCSSPropertiesRule(props)}
        `}
      >
        <Input
          ref={ref}
          id={id}
          invalid={invalid}
          size={size}
          {...nonCustomCSSProps(props)}
        />
      </Fieldset>
    );
  },
);
