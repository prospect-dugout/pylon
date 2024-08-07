import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { IconName } from '../Icon';
import { IconButtonVariant } from './variants';
type CustomIconButtonProps = CustomCSSProperties<{
    buttonSize?: 'sm' | 'md' | 'lg';
    href?: string;
    icon: IconName | JSX.Element;
    iconSize?: number | string;
    variant?: IconButtonVariant;
    withArrow?: boolean;
}>;
export type IconButtonProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, keyof CustomIconButtonProps> & CustomIconButtonProps;
export declare const IconButton: FunctionalComponent<IconButtonProps>;
export {};
