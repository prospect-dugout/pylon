import { FunctionalComponent } from 'preact';
type Option = {
    label: string;
    value: string;
};
type Props = {
    options: Option[];
    defaultChecked?: Option['value'][];
    onChange?: (value: Option['value'][]) => void;
    maxOptions?: number;
};
export declare const CheckboxGroup: FunctionalComponent<Props>;
export {};
