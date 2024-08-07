import { FunctionalComponent } from 'preact';
import { TableColumn } from './types';
type Props = {
    columns?: TableColumn[];
    onUpdateSortBy?: (sortBy: string) => void;
    sortBy: string;
};
export declare const Table_Header: FunctionalComponent<Props>;
export {};
