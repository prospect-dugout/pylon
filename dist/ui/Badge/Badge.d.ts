import { ComponentChildren, FunctionalComponent } from 'preact';
type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'success-dark' | 'error-dark' | 'warning-dark' | 'info-dark';
type Props = {
    children?: ComponentChildren;
    variant?: BadgeVariant;
    withDot?: boolean;
};
export declare const Badge: FunctionalComponent<Props>;
export {};
