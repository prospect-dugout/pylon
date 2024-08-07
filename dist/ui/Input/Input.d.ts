import { ComponentChildren, FunctionalComponent, JSX } from 'preact';
import { css } from 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { InputVariant } from './variants';
export type InputCustomProps = CustomCSSProperties<{
    autofocus?: boolean;
    containerCss?: ReturnType<typeof css>;
    disabled?: boolean;
    endAdornment?: ComponentChildren;
    invalid?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    startAdornment?: ComponentChildren;
    variant?: InputVariant;
}>;
export type InputProps = Omit<JSX.HTMLAttributes<HTMLInputElement>, keyof InputCustomProps> & InputCustomProps;
export declare const Input: FunctionalComponent<InputProps>;
