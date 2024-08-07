import { ComponentChild, FunctionalComponent, JSX } from 'preact';
import { css } from 'styled-components';
import { ButtonProps } from '../Button';
export type InputFileProps = {
    renderCustomButton?: (props: {
        onClick: () => void;
    }) => ComponentChild;
    buttonProps?: ButtonProps;
    buttonCss?: ReturnType<typeof css>;
    showSelectedFileNames?: boolean;
    placeholder?: string;
};
type Props = JSX.HTMLAttributes<HTMLInputElement> & InputFileProps;
export declare const InputFile: FunctionalComponent<Props>;
export {};
