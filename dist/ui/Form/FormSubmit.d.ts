import { FunctionalComponent, JSX } from 'preact';
import { ButtonProps } from '../Button';
type FormSubmitProps = ButtonProps & {
    submitting?: boolean;
    value?: string;
};
type Props = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'default'> & FormSubmitProps;
export declare const FormSubmit: FunctionalComponent<Props>;
export {};
