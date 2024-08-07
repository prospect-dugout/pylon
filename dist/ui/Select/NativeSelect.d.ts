import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
export type NativeSelectProps = CustomCSSProperties<{
    defaultValue?: string;
    id?: string;
    invalid?: boolean;
    options?: Array<{
        [key: string]: string;
    }>;
    propertyForLabel?: string;
}>;
type Props = JSX.HTMLAttributes<HTMLSelectElement> & NativeSelectProps;
export declare const NativeSelect: FunctionalComponent<Props>;
export {};
