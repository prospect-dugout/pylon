import { Area } from 'react-easy-crop/types';
export type EasyCropResp = {
    base64: string;
    arrayBuffer: ArrayBuffer;
};
export declare const createImage: (url: string) => Promise<HTMLImageElement>;
export declare const getRadianAngle: (degreeValue: number) => number;
/**
 * Returns the new bounding area of a rotated rectangle.
 */
export declare const rotateSize: (width: number, height: number, rotation: number) => {
    width: number;
    height: number;
};
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export declare function cropImage(imageSrc: string, pixelCrop: Area, rotation?: number, flip?: {
    horizontal: boolean;
    vertical: boolean;
}): Promise<EasyCropResp | null>;
