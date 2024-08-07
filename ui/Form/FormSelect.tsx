import {FunctionalComponent, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Select, SelectProps} from '../Select';
import {Fieldset, FieldsetProps} from './Fieldset';

type Props = SelectProps &
  Pick<
    FieldsetProps,
    'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'
  > & {
    fieldsetCss?: ReturnType<typeof css>;
  };

export const FormSelect: FunctionalComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(
  (
    {
      fieldsetCss,
      fullWidth = false,
      helpText,
      id,
      invalid,
      invalidText,
      label,
      multiple = false,
      options,
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
        css={`
          ${fieldsetCss}
          ${customCSSPropertiesRule(props)}
        `}
      >
        <Select
          ref={ref}
          id={id}
          invalid={invalid}
          multiple={multiple}
          options={options}
          css={`
            width: ${fullWidth ? '100%' : 'initial'};
          `}
          {...nonCustomCSSProps(props)}
        />
      </Fieldset>
    );
  },
);
