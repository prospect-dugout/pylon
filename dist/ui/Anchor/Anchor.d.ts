import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type AnchorVariant = 'unstyled' | 'default' | 'primary' | 'secondary' | 'muted' | 'underline' | 'hoverBg' | 'hoverUnderline';
type Props = CustomCSSProperties<{
    activeClassName?: string;
    variant?: AnchorVariant;
} & JSX.HTMLAttributes<HTMLAnchorElement>>;
export declare const Anchor: FunctionalComponent<Props>;
export {};
