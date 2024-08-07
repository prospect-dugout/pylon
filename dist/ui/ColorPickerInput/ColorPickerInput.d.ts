import { FunctionalComponent } from 'preact';
import { OverlayPosition } from '../Overlay';
type Props = {
    defaultColor?: string;
    onChange?: (color: string) => void;
    overlayPosition?: OverlayPosition;
};
export declare const ColorPickerInput: FunctionalComponent<Props>;
export {};
