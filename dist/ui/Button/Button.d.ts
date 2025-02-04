import { ComponentChildren, FunctionalComponent, JSX } from 'preact';
import { css } from 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { IconName } from '../Icon';
import { ButtonVariant } from './variant-styles';
type CustomVariant = (props: Pick<ButtonProps, 'buttonSize' | 'iconTrailing' | 'iconLeading'>) => ReturnType<typeof css>;
export type ButtonProps = CustomCSSProperties<{
    buttonSize?: 'sm' | 'md' | 'lg';
    children?: ComponentChildren;
    customVariant?: CustomVariant;
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    iconCss?: ReturnType<typeof css>;
    iconLeading?: IconName | JSX.Element;
    iconSize?: number;
    iconTrailing?: IconName | JSX.Element;
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
    withArrow?: boolean;
}>;
type Props = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'icon'> & ButtonProps;
export declare const Button: FunctionalComponent<Props>;
export {};
