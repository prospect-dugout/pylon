import { FunctionalComponent, JSX } from 'preact';
import 'element.scrollintoviewifneeded-polyfill';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { OverlayPosition } from '../Overlay';
type SelectOption = {
    value: string;
    label: string;
};
export type SelectProps = Pick<JSX.HTMLAttributes<HTMLDivElement>, 'onBlur'> & CustomCSSProperties<{
    defaultValue?: string[] | string;
    disabled?: boolean;
    id?: string;
    invalid?: boolean;
    multiple?: boolean;
    name?: string;
    options: SelectOption[];
    overlayPosition?: Partial<OverlayPosition>;
    placeholder?: string;
    searchable?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onChange?: JSX.GenericEventHandler<HTMLSelectElement>;
    value?: string[] | string;
}>;
export declare const Select: FunctionalComponent<SelectProps>;
export {};
