import { InputProps } from './Input';
export type InputVariant = 'default' | 'search';
type Props = Pick<InputProps, 'disabled' | 'size' | 'invalid'> & {
    focused: boolean;
};
type Response = {
    [key in InputVariant]: {
        background: string;
        border: string;
        borderRadius: string;
        color: string;
        placeholderColor: string;
    };
};
export declare function variants({ disabled, size, focused, invalid }: Props): Response;
export {};
