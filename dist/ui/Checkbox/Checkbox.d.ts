import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
export type Props = CustomCSSProperties<{
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    invalid?: boolean;
    label?: string;
    onChange?: (evt: Event) => void;
}> & Omit<JSX.HTMLAttributes<HTMLInputElement>, 'id'>;
export type { Props as CheckboxProps };
export declare const Checkbox: FunctionalComponent<Props>;
