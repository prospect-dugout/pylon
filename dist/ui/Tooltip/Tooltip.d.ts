import { ComponentChildren, FunctionalComponent } from 'preact';
import { OverlayPosition } from '../Overlay';
export type TooltipProps = {
    children: ComponentChildren;
    delay?: number;
    disabled?: boolean;
    keepOpenedOnChildFocus?: boolean;
    overlayPosition?: Omit<OverlayPosition, 'positionTarget'>;
    severity?: TooltipSeverity;
    text?: string | ComponentChildren;
    title?: string;
};
export declare const Tooltip: FunctionalComponent<TooltipProps>;
type TooltipSeverity = 'default' | 'success' | 'info' | 'warning' | 'error';
export {};
