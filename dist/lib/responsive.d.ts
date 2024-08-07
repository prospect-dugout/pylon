import { css } from 'styled-components';
export declare const breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export type Breakpoint = keyof typeof breakpoints;
export declare const mediaQuery: (breakpoint: 'sm>' | '<sm' | 'md>' | '<md' | 'lg>' | '<lg' | 'xl>' | '<xl' | 'xxl>' | '<xxl', styles: ReturnType<typeof css>) => import("styled-components").RuleSet<object>;
