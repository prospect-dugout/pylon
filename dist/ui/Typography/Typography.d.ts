import { ComponentChildren, FunctionalComponent, JSX } from 'preact';
import 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'default';
export type TypographyWeight = 'regular' | 'medium' | 'bold' | 'extra-bold';
type VariantStyleMap = {
    [key in TypographyVariant]: {
        fontSize?: string;
        fontWeight?: string | number;
        letterSpacing?: string;
        lineHeight?: string | number;
        tagName?: string;
    };
};
export declare const typographyVariants: VariantStyleMap;
export type TypographyProps = CustomCSSProperties<{
    children?: ComponentChildren;
    fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit' | 'unset' | 'revert' | 'revert-layer';
    tagName?: string;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    variant?: TypographyVariant;
    weight?: TypographyWeight;
}>;
type Props = JSX.HTMLAttributes<HTMLElement> & TypographyProps;
export declare const Typography: FunctionalComponent<Props>;
export {};
