import { ComponentChildren, FunctionalComponent } from 'preact';
import { type SnackbarProps } from './Snackbar';
type OpenSnackbarProps = Pick<SnackbarProps, 'anchorOrigin' | 'severity' | 'autoHideDuration' | 'noIcon' | 'customImage' | 'noCloseButton'>;
type Context = {
    openSnackbar: (options: {
        content: string | ComponentChildren;
        snackbarProps?: OpenSnackbarProps;
    }) => void;
    closeSnackbar: () => void;
};
export declare const SnackbarContext: import("preact").Context<Context>;
type Props = {
    children: ComponentChildren;
};
export declare const SnackbarProvider: FunctionalComponent<Props>;
export {};
