import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type SwitchSize = 'sm' | 'md';
type Props = CustomCSSProperties<{
    defaultChecked?: boolean;
    disabled?: boolean;
    label?: string;
    onChange?: JSX.GenericEventHandler<HTMLInputElement>;
    size?: SwitchSize;
}>;
export declare const Switch: FunctionalComponent<Props>;
export {};
