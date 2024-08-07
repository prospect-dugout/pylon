import { FunctionalComponent } from 'preact';
import 'element.scrollintoviewifneeded-polyfill';
type SelectListItem = {
    [key: string]: any;
    weight?: number;
};
type Props = {
    autoFocusSearchResult?: boolean;
    filterMode?: 'startsWith' | 'includes';
    items: SelectListItem[];
    onSelect?: (item: SelectListItem) => void;
    propertyForLabel?: string;
    propertyForTooltipText?: string;
    propertyForValue?: string;
    searchValue?: string;
    selectBy?: 'click' | 'clickOrEnter' | 'clickOrEnterOrTab';
    weights?: {
        [key: string]: number;
    };
};
export declare const SelectList: FunctionalComponent<Props>;
export {};
