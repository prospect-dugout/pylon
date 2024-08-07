import { FunctionalComponent } from 'preact';
import { css } from 'styled-components';
import { InputProps } from '../Input';
import { FieldsetProps } from './Fieldset';
type Props = InputProps & Pick<FieldsetProps, 'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'> & {
    fieldsetCss?: ReturnType<typeof css>;
};
export declare const FormInput: FunctionalComponent<Props>;
export {};
