import { RefObject } from 'preact';
export interface TrackEventData {
    dx: number;
    dy: number;
    startX: number;
    startY: number;
    targetRect: DOMRect;
}
export interface TrackGestureOptions {
    onTrack: (data: TrackEventData) => void;
    onTrackEnd: () => void;
    orientation?: 'horizontal' | 'vertical';
    target: Element;
    trackOnPointerDown?: boolean;
}
export declare class TrackGesture {
    private readonly onTrack;
    private readonly onTrackEnd;
    private readonly orientation;
    private readonly target;
    private readonly trackOnPointerDown;
    private readonly trackThreshold;
    private trackStarted;
    private targetRect;
    private clientStartX;
    private clientStartY;
    constructor({ onTrack, onTrackEnd, orientation, target, trackOnPointerDown, }: TrackGestureOptions);
    disposal: () => void;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private dispatchTrackEvent;
    private stopTrack;
    private setupTrackStyles;
    private resetTrackStyles;
    private addTrackListeners;
    private removeTrackListeners;
}
type TrackGestureState = {
    dx: number;
    dy: number;
    startX: number;
    startY: number;
    targetRect: DOMRect | null;
    dragging: boolean;
};
export declare const useTrackGesture: (targetRef: RefObject<HTMLElement>, options?: {}) => TrackGestureState;
export {};
