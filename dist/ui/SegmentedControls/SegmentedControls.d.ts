import { ComponentChildren, FunctionalComponent } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
export interface SegmentedControlsItem {
    title: string;
    value: string;
    render?: () => ComponentChildren;
}
type Props = CustomCSSProperties<{
    defaultValue?: string;
    items: SegmentedControlsItem[];
    onChange?: (_item: SegmentedControlsItem) => void;
    segmentWidth?: number;
    size?: 'md' | 'sm';
}>;
export declare const SegmentedControls: FunctionalComponent<Props>;
export {};
