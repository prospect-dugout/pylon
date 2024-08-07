import { FFmpeg } from '@ffmpeg/ffmpeg';
export declare const toTimeString: (sec: number, showMilliSeconds?: boolean) => string;
type TrimVideoProps = {
    end: number;
    ffmpeg: FFmpeg;
    start: number;
    videoFile: File;
};
export declare function trimVideo({ end, ffmpeg, start, videoFile, }: TrimVideoProps): Promise<{
    outputVideo: File;
    outputVideoUrl: string;
}>;
export declare function loadFFmpeg(ffmpeg: FFmpeg): Promise<void>;
export {};
