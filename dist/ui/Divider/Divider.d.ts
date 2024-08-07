import { FunctionalComponent } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type Props = CustomCSSProperties<{
    direction?: 'row' | 'column';
}>;
export declare const Divider: FunctionalComponent<Props>;
export {};
