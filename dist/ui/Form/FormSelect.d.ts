import { FunctionalComponent } from 'preact';
import { css } from 'styled-components';
import { SelectProps } from '../Select';
import { FieldsetProps } from './Fieldset';
type Props = SelectProps & Pick<FieldsetProps, 'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'> & {
    fieldsetCss?: ReturnType<typeof css>;
};
export declare const FormSelect: FunctionalComponent<Props>;
export {};
