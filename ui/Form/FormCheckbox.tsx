import {FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Checkbox, CheckboxProps} from '../Checkbox';
import {Fieldset, FieldsetProps} from './Fieldset';

type Props = Omit<JSX.HTMLAttributes<HTMLInputElement>, 'id'> &
  CheckboxProps &
  Pick<
    FieldsetProps,
    'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'
  > & {
    fieldsetCss?: ReturnType<typeof css>;
  };

export const FormCheckbox: FunctionalComponent<Props> = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {helpText, id, invalid, invalidText, label, fieldsetCss, ...props}: Props,
    ref,
  ) => {
    return (
      <Fieldset
        helpText={helpText}
        invalidText={invalidText}
        fullWidth
        labelFor={id}
        css={`
          ${fieldsetCss}
          ${customCSSPropertiesRule(props)}
        `}
      >
        <Checkbox
          id={id}
          ref={ref}
          invalid={invalid}
          label={label}
          {...nonCustomCSSProps(props)}
        />
      </Fieldset>
    );
  },
);
