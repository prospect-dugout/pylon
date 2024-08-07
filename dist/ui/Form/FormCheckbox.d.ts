import { FunctionalComponent, JSX } from 'preact';
import { css } from 'styled-components';
import { CheckboxProps } from '../Checkbox';
import { FieldsetProps } from './Fieldset';
type Props = Omit<JSX.HTMLAttributes<HTMLInputElement>, 'id'> & CheckboxProps & Pick<FieldsetProps, 'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'> & {
    fieldsetCss?: ReturnType<typeof css>;
};
export declare const FormCheckbox: FunctionalComponent<Props>;
export {};
