import { FunctionalComponent } from 'preact';
type Props = {
    count: number;
    onRowsPerPageChange: (_value: number) => void;
    onRowStartChange: (_value: number) => void;
    paginationRowsPerPage: number;
    paginationRowsPerPageOptions: number[];
    rowsPerPage: number;
    rowStart: number;
};
export declare const Table_Pagination: FunctionalComponent<Props>;
export {};
