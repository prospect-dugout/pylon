export type Gap = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 'auto';
export declare const gapMap: {
    [key in Gap]: string;
};
export type CustomCSSProperties<T = {}> = T & {
    'css-mb'?: Gap;
    'css-ml'?: Gap;
    'css-mr'?: Gap;
    'css-mt'?: Gap;
    'css-m'?: Gap | Gap[];
    'css-pb'?: Gap;
    'css-pl'?: Gap;
    'css-pr'?: Gap;
    'css-pt'?: Gap;
    'css-p'?: Gap | Gap[];
    'css-color'?: string;
    'css-textAlign'?: 'left' | 'center' | 'right';
};
export declare const customCSSPropertiesRule: (props: CustomCSSProperties) => string;
export declare const nonCustomCSSProps: (props: {
    [key: string]: any;
}) => {
    [key: string]: any;
};
