import { Component, ComponentChildren, FunctionalComponent } from 'preact';
import { OverlayProps } from '../Overlay/Overlay';
type SnackbarOrigin = {
    vertical: 'top' | 'middle' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
};
type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error';
export type SnackbarProps = {
    /**
     * The type of the alert. This defines the color and icon used.
     * @default 'success'
     */
    severity?: SnackbarSeverity;
    /**
     * The anchor of the `Snackbar`.
     * On smaller screens, the component grows to occupy all the available width,
     * the horizontal alignment is ignored.
     * @default { vertical: 'bottom', horizontal: 'center' }
     */
    anchorOrigin?: SnackbarOrigin;
    /**
     * The number of milliseconds to wait before automatically closing the overlay.
     * @default null
     */
    autoHideDuration?: number | null;
    children?: ComponentChildren;
    /**
     * If present, displays an image instead of the default icons.
     * @default false
     */
    customImage?: Component;
    /**
     * If `true`, the close button won't be rendered.
     * @default false
     */
    noCloseButton?: boolean;
    /**
     * If `true`, the default icons won't be rendered.
     * @default false
     */
    noIcon?: boolean;
    /**
     * If `true`, the component is shown.
     * @default false
     */
    opened: boolean;
    overlayProps?: Pick<OverlayProps, 'cancelOnEscKey' | 'cancelOnOutsideClick' | 'withBackdrop' | 'backdropColor' | 'noAutoFocus'> | null;
    setOpened: (opened: boolean) => void;
};
export declare const Snackbar: FunctionalComponent<SnackbarProps>;
export {};
