import { ComponentChildren, FunctionalComponent } from 'preact';
import { css } from 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
export type Severity = 'default' | 'success' | 'info' | 'warning' | 'error';
type Props = CustomCSSProperties<{
    /**
     * The type of the alert. This defines the color and icon used.
     * @default 'default'
     */
    children: ComponentChildren;
    contentCss?: ReturnType<typeof css>;
    onClickClose?: () => void;
    severity?: Severity;
    withoutIcon?: boolean;
}>;
export declare const ToastMessage: FunctionalComponent<Props>;
export {};
