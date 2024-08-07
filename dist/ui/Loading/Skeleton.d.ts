import { FunctionalComponent } from 'preact';
import { Gap } from '../../lib/custom-css-properties-rule';
type Props = {
    animation?: boolean;
    height?: string | Gap;
    variant?: 'rectangular' | 'circular' | 'rounded';
    width?: string | number;
};
export declare const Skeleton: FunctionalComponent<Props>;
export {};
