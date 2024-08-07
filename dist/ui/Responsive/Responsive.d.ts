import { ComponentChildren, FunctionalComponent } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type Props = CustomCSSProperties<{
    children?: ComponentChildren;
    size?: ResponsiveSize;
    tagName?: string;
}>;
type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare const Responsive: FunctionalComponent<Props>;
export {};
