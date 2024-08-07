import { FunctionalComponent } from 'preact';
type Props = {
    setSelectedTab: (idx: number) => void;
    selectedTab: number;
    childrenList: any[];
};
export declare const PanelGroup_Tabs: FunctionalComponent<Props>;
export {};
