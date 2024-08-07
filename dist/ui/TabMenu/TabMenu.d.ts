import { ComponentChildren, FunctionalComponent } from 'preact';
import { CustomCSSProperties } from '../../lib';
export type TabMenuItem = {
    content?: string | ComponentChildren;
    href?: string;
    value?: string;
};
type Props = CustomCSSProperties<{
    defaultValue?: string;
    direction?: 'row' | 'column';
    items: TabMenuItem[];
    noAnimation?: boolean;
    onChange?: (item: TabMenuItem) => void;
    tabsWithErrors?: string[];
}>;
export declare const TabMenu: FunctionalComponent<Props>;
export {};
