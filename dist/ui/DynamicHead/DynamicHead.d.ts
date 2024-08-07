import { FunctionalComponent } from 'preact';
type Props = {
    title: string;
    htmlAttributes?: Record<string, string>;
    meta?: Array<Record<string, string>>;
    link?: Array<Record<string, string>>;
};
export declare const DynamicHead: FunctionalComponent<Props>;
export {};
