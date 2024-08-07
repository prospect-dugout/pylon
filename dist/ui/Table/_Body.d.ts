import { FunctionalComponent } from 'preact';
import { TableProps } from './types';
type Props = Pick<TableProps, 'columns' | 'onClickRow' | 'propertyForKey' | 'rowCssFn'> & {
    currentPageData: {
        [key: string]: any;
    }[];
};
export declare const Table_Body: FunctionalComponent<Props>;
export {};
