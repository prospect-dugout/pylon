import { ComponentChildren, FunctionalComponent, h } from 'preact';
type Props = {
    children?: ComponentChildren;
    fullWidth?: boolean;
    helpText?: string | ComponentChildren;
    invalidText?: string;
    label?: string | ComponentChildren;
    labelFor?: string | h.JSX.SignalLike<string | undefined> | undefined;
    showInvalidTextInTooltip?: boolean;
    size?: 'sm' | 'md' | 'lg';
};
export type { Props as FieldsetProps };
export declare const Fieldset: FunctionalComponent<Props>;
