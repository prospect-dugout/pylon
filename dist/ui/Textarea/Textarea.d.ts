import { FunctionalComponent, JSX } from 'preact';
export interface TextareaProps extends Pick<JSX.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur' | 'name' | 'id'> {
    defaultValue?: string;
    invalid?: boolean;
    highlightLinks?: boolean;
    onInput?: (evt: JSX.TargetedEvent<HTMLDivElement, Event>) => void;
}
export declare const Textarea: FunctionalComponent<TextareaProps>;
