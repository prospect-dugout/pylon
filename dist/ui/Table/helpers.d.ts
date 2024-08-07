import dayjs from 'dayjs';
import { TableColumn, TableProps } from './types';
type ApplySearchFn = (_props: {
    columns: TableColumn[];
    data: TableProps['data'];
    query: string;
}) => TableProps['data'];
export declare const applySearch: ApplySearchFn;
export declare const sortStringFn: (direction: SortDirectionNum, a: string, b: string) => number;
export declare const sortNumberFn: (direction: SortDirectionNum, a: number, b: number) => number;
export declare const sortDateFn: (direction: SortDirectionNum, a: string | dayjs.Dayjs, b: string | dayjs.Dayjs) => number;
export declare const sortBooleanFn: (direction: SortDirectionNum, a: boolean, b: boolean) => number;
export type SortDirectionNum = -1 | 1;
export declare const getSortDirection: (sortBy: string) => SortDirectionNum;
export declare const getSortKey: (sortBy: string) => string;
type SortDataParams = (_props: Pick<TableProps, 'columns' | 'data' | 'sortBy'>) => any[];
export declare const sortData: SortDataParams;
export declare const getSortFunction: (column: TableColumn, direction: SortDirectionNum) => (_a: any, _b: any) => number;
export {};
