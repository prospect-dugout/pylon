import {ComponentChildren} from 'preact';

type Formatter = (value: any) => ComponentChildren;

export type TableColumn<T = any> = {
  accessor: string;
  alignRight?: boolean;
  cellCssFn?: (d: T) => string;
  formatter?: Formatter;
  noSortable?: boolean;
  renderContent?: (props: {d: T; value: string | number}) => ComponentChildren;
  title?: string;
  type?: 'number' | 'string' | 'boolean' | 'date';
  width?: number;
};

export type TableProps<Data extends Record<string, any> = Record<string, any>> =
  {
    columns: TableColumn[];
    /**
     * The table data. Your data should have a unique identifier (key).
     * The deafult key is id. To override tis value use propertyForKey.
     */
    data: Data[];
    /**
     * If true, the table header won't be rendered
     * @default false
     */
    noHeader?: boolean;
    onClickRow?: (d: any, mouseEvent: any) => void;
    sortBy?: string;
    /**
     * Whether the Table will have a pagination.
     * If false all data will be displayed at the same time.
     * @default true
     */
    pagination?: boolean;
    /**
     * Amount of rows that will be rendered by default.
     * @default 20
     */
    paginationRowsPerPage?: number;
    /**
     * Row page dropdown selection options
     * @default [20,50,100]
     */
    paginationRowsPerPageOptions?: number[];
    /**
     * Unique row identifier.
     * @default 'id'
     */
    propertyForKey?: string;
    /**
     * Css getter for every single row.
     */
    rowCssFn?: (row: any) => string;
    /**
     * List of keys that will be used when searching.
     * @default []
     */
    searchKeys?: string[];
    /**
     * Search input placeholder.
     * @default 'Search'
     */
    searchPlaceholder?: string;
    /**
     * Min amout of items that should be rendered to display the search input.
     * @default 6
     */
    searchMinItems?: number;
    /**
     * Rule for the table native element.
     */
    tableCss?: string;
  };
