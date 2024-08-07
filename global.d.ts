import {FFmpeg} from '@ffmpeg/ffmpeg';
import {CSSProp} from 'styled-components';

declare module 'preact' {
  interface Attributes {
    css?: CSSProp;
  }
}

// src/global.d.ts
declare global {
  interface Window {
    dataLayer: any[];
    FFmpegWASM: {FFmpeg: new () => FFmpeg};
    gtag: (...args: any[]) => void;
  }
}

declare global {
  interface Element {
    /**
     * Scrolls the element into view if it's not already within the visible area
     * of its scrollable container.
     *
     * @param centerIfNeeded - If true (default), the element will be centered
     * within the visible area of the scrollable container. If false, the
     * element will be scrolled to the nearest edge.
     */
    scrollIntoViewIfNeeded(centerIfNeeded?: boolean): void;
  }
}
