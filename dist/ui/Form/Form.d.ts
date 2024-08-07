import { ComponentChildren, FunctionalComponent } from 'preact';
type Props = {
    children: ComponentChildren;
    onSubmit: () => void;
};
export type FormProps = Props;
export declare const Form: FunctionalComponent<Props>;
export {};
