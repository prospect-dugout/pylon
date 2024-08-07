import { ComponentChildren, FunctionalComponent } from 'preact';
import { css } from 'styled-components';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { TooltipProps } from '../Tooltip';
type Props = CustomCSSProperties<{
    children?: ComponentChildren;
    cols?: string;
    contentCss?: ReturnType<typeof css>;
    title?: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}>;
export declare const DescriptionListItem: FunctionalComponent<Props>;
export {};
