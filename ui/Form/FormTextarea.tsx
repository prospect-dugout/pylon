import {FunctionalComponent, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Textarea, TextareaProps} from '../Textarea';
import {Fieldset, FieldsetProps} from './Fieldset';

type Props = CustomCSSProperties<
  TextareaProps &
    Pick<
      FieldsetProps,
      'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'
    >
> & {
  fieldsetCss?: ReturnType<typeof css>;
};

export const FormTextarea: FunctionalComponent<Props> = forwardRef<
  HTMLDivElement,
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
      size,
      fieldsetCss,
      ...props
    }: Props,
    ref,
  ) => {
    return (
      <Fieldset
        labelFor={id}
        fullWidth={fullWidth}
        helpText={helpText}
        invalidText={invalidText}
        label={label}
        size={size}
        css={`
          ${fieldsetCss}
          ${customCSSPropertiesRule(props)}
        `}
      >
        <Textarea
          ref={ref}
          id={id}
          invalid={invalid}
          {...nonCustomCSSProps(props)}
        />
      </Fieldset>
    );
  },
);
