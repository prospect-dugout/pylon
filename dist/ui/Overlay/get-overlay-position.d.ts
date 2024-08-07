import { RefObject } from 'preact';
import { OverlayPosition } from './Overlay';
export declare const getOverlayPosition: (overlayRef: RefObject<HTMLDivElement>, { horizontalAlign, horizontalOffset, mode, noHorizontalOverlap, noVerticalOverlap, positionEvent, positionTarget, verticalAlign, verticalOffset, }: OverlayPosition) => string;
