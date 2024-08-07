import { FunctionalComponent } from 'preact';
import { InputFileProps } from '../InputFile';
import { ImageInputOverlayProps } from './_Overlay';
type Props = Pick<ImageInputOverlayProps, 'aspectFn' | 'onSubmit'> & InputFileProps;
export declare const ImageInput: FunctionalComponent<Props>;
export {};
