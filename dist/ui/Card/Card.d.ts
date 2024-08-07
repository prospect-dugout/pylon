import { ComponentChildren, FunctionalComponent } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type Props = CustomCSSProperties<{
    children?: ComponentChildren;
    noBorder?: boolean;
}>;
export declare const Card: FunctionalComponent<Props>;
export {};
