import { FunctionalComponent } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type Props = CustomCSSProperties<{
    centered?: boolean;
    size?: 'sm' | 'md' | 'lg';
}>;
export declare const Loading: FunctionalComponent<Props>;
export {};
