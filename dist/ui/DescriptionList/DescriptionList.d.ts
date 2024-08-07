import { ComponentChildren, FunctionalComponent } from 'preact';
import { CustomCSSProperties, Gap } from '../../lib/custom-css-properties-rule';
type Props = CustomCSSProperties<{
    children?: ComponentChildren;
    gap?: Gap;
    expandWidthSize?: Gap;
}>;
export declare const DescriptionList: FunctionalComponent<Props>;
export {};
