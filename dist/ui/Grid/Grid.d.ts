import { ComponentChildren, FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties, Gap } from '../../lib/custom-css-properties-rule';
type Props = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'rows' | 'cols'> & CustomCSSProperties<{
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    children: ComponentChildren;
    cols?: string;
    gap?: Gap;
    rows?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    tagName?: string;
}>;
export declare const Grid: FunctionalComponent<Props>;
export {};
