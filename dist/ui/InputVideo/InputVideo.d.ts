import { FunctionalComponent } from 'preact';
export type InputVideoProps = {
    allowedRatios?: string;
    hideRatioSelector?: boolean;
    onClear?: () => void;
    onFinish?: (props: {
        outputVideoUrl: string;
        outputVideo: File;
        ratio: string;
    }) => void;
    submitText?: string;
};
export declare const InputVideo: FunctionalComponent<InputVideoProps>;
