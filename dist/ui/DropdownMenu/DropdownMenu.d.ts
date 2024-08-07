import { ComponentChildren, FunctionalComponent } from 'preact';
import { css } from 'styled-components';
import { OverlayPosition } from '../Overlay';
import { OverlayAnimation } from '../Overlay/animations';
type Props = {
    children: ComponentChildren[];
    closeTargets?: string[];
    openOnHover?: boolean;
    overlayAnimation?: OverlayAnimation | null;
    overlayPosition?: Omit<OverlayPosition, 'positionTarget'>;
    triggerCss?: ReturnType<typeof css>;
};
export declare const DropdownMenu: FunctionalComponent<Props>;
export {};
