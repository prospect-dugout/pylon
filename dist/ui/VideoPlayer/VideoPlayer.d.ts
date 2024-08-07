import { FunctionalComponent, JSX } from 'preact';
import { css } from 'styled-components';
type CustomProps = {
    containerCss?: ReturnType<typeof css>;
    containerProps?: Partial<JSX.HTMLAttributes<HTMLDivElement>>;
};
export type VideoPlayerProps = Omit<JSX.HTMLAttributes<HTMLVideoElement>, keyof CustomProps> & CustomProps;
export declare const VideoPlayer: FunctionalComponent<VideoPlayerProps>;
export {};
