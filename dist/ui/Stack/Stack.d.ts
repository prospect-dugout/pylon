import { ComponentChildren, FunctionalComponent } from 'preact';
import { CustomCSSProperties, Gap } from '../../lib/custom-css-properties-rule';
export type StackProps = CustomCSSProperties<{
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    children: ComponentChildren;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    gap?: Gap;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}>;
export declare const Stack: FunctionalComponent<StackProps>;
