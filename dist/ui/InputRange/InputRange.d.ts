import { FunctionalComponent } from 'preact';
type InputRange = [number, number];
type Props = {
    defaultValue?: InputRange;
    deferOnChange?: boolean;
    max?: number;
    min?: number;
    minLength?: number;
    onChange?: (value: InputRange) => void;
    step?: number;
};
export declare const InputRange: FunctionalComponent<Props>;
export {};
