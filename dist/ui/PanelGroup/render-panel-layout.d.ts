import { h } from 'preact';
import { PanelGroupProps } from './PanelGroup';
export type PanelLayoutConfig = {
    component?: PanelGroupProps['children'];
    direction?: PanelGroupProps['direction'];
    panels?: PanelLayoutConfig[];
    tabsCustomRender?: PanelGroupProps['tabsCustomRender'];
    tabName?: PanelGroupProps['tabName'];
    useTabs?: PanelGroupProps['useTabs'];
};
/** @recursive */
export declare const renderPanelLayout: (config: PanelLayoutConfig, { localStorageId, path }?: {
    localStorageId?: string | undefined;
    path?: string | undefined;
}) => h.JSX.Element;
