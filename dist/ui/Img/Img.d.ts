import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
type ImgCustomProps = CustomCSSProperties<{
    placeholder?: string;
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
    preload?: boolean;
    sizing?: 'contain' | 'cover' | 'auto' | 'revert' | 'unset' | 'inherit' | 'initial' | 'revert-layer';
}>;
export type ImgProps = Omit<JSX.HTMLAttributes<HTMLImageElement>, keyof ImgCustomProps> & ImgCustomProps;
export declare const Img: FunctionalComponent<ImgProps>;
export {};
