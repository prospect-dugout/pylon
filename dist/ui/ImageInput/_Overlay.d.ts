import { FunctionalComponent } from 'preact';
import { EasyCropResp } from './cropImage';
export type ImageAspectRatio = 'landscape' | 'portrait';
export interface ImageInputOverlayProps {
    imageSrc: string;
    opened: boolean;
    aspectFn?: (aspectRatio: ImageAspectRatio) => number;
    setOpened: (opened: boolean) => void;
    onSubmit?: (_value: EasyCropResp & {
        aspectRatio: ImageAspectRatio;
    }) => void;
}
export declare const ImageInput_Overlay: FunctionalComponent<ImageInputOverlayProps>;
