import { FunctionalComponent } from 'preact';
import { TrackGesture } from '../../lib';
type Props = {
    direction: 'row' | 'column';
    onTrack: TrackGesture['onTrack'];
    onTrackEnd: TrackGesture['onTrackEnd'];
    ondblclick?: (e: MouseEvent) => void;
};
export declare const PanelGroup_ResizeHandle: FunctionalComponent<Props>;
export {};
