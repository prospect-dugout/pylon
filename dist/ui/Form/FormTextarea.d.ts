import { FunctionalComponent } from 'preact';
import { css } from 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { TextareaProps } from '../Textarea';
import { FieldsetProps } from './Fieldset';
type Props = CustomCSSProperties<TextareaProps & Pick<FieldsetProps, 'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'>> & {
    fieldsetCss?: ReturnType<typeof css>;
};
export declare const FormTextarea: FunctionalComponent<Props>;
export {};
