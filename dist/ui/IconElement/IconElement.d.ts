import { ComponentChildren, FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type IconCustomProps = CustomCSSProperties<{
    children: ComponentChildren;
    size?: number | string;
}>;
export type IconElementProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, keyof IconCustomProps> & IconCustomProps;
export declare const IconElement: FunctionalComponent<IconElementProps>;
export {};
