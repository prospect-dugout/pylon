import { FunctionalComponent, JSX } from 'preact';
import { CustomCSSProperties } from '../../lib/custom-css-properties-rule';
import { IconName } from '../Icon';
import { TooltipProps } from '../Tooltip';
type Props = CustomCSSProperties<{
    iconColor?: string;
    icon?: IconName | JSX.Element;
    loading?: boolean;
    title: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
    value: string | number;
}>;
export declare const Stat: FunctionalComponent<Props>;
export {};
