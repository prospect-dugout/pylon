import { ComponentChildren, FunctionalComponent } from 'preact';
export type PanelGroupProps = {
    children: ComponentChildren;
    direction?: 'row' | 'column';
    id: string;
    localStorageId?: string;
    tabsCustomRender?: (content: ComponentChildren) => ComponentChildren;
    tabName?: string;
    useTabs?: boolean;
};
export declare const PanelGroup: FunctionalComponent<PanelGroupProps>;
