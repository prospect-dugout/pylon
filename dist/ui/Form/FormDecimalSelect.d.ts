import { FunctionalComponent } from 'preact';
import { TargetedEvent } from 'preact/compat';
import { css } from 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { FieldsetProps } from './Fieldset';
type Props = CustomCSSProperties<Pick<FieldsetProps, 'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'> & {
    fieldsetCss?: ReturnType<typeof css>;
    id?: string;
    invalid?: boolean;
    maxFractionalNumber?: number;
    minFractionalNumber?: number;
    maxWholeNumber?: number;
    minWholeNumber?: number;
    name?: string;
    onChange?: (evt: TargetedEvent<HTMLSelectElement, Event>) => void;
    value?: number | string | null;
}>;
export declare const FormDecimalSelect: FunctionalComponent<Props>;
export {};
