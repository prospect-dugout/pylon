import dayjs from 'dayjs';
import {TableColumn, TableProps} from './types';

const SEARCH_FILTER_REGEX = /[^\w\s]/gi;

type ApplySearchFn = (_props: {
  columns: TableColumn[];
  data: TableProps['data'];
  query: string;
}) => TableProps['data'];

export const applySearch: ApplySearchFn = ({data, query, columns}) => {
  if (data) {
    let _columns = columns ? columns.filter(Boolean) : [];

    if (query && _columns.length > 0) {
      const queryRegex = new RegExp(
        query.replace(SEARCH_FILTER_REGEX, ''),
        'i',
      );

      if (/\w+:\w+$/.test(query)) {
        // when query is in the form of "key:value"
        // we want to search for the value of the key
        const arr = query.split(':');
        const col = _columns.find((c) => c.accessor === arr[0]);
        if (col) {
          _columns = [col];
        }
      }

      return data.filter((d: any) => {
        if (d) {
          return !!_columns.find((c) => {
            const value = d[c.accessor];
            return queryRegex.test(value.replace(SEARCH_FILTER_REGEX, ''));
          });
        }
        return false;
      });
    }
    return data.filter(Boolean);
  }
  return [];
};

export const sortStringFn = (
  direction: SortDirectionNum,
  a: string,
  b: string,
): number => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b) * direction;
  }
  return 0;
};

export const sortNumberFn = (
  direction: SortDirectionNum,
  a: number,
  b: number,
): number => {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a - b) * direction;
  }
  return a;
};

export const sortDateFn = (
  direction: SortDirectionNum,
  a: string | dayjs.Dayjs,
  b: string | dayjs.Dayjs,
): number => {
  const dateA = a instanceof dayjs ? (a as dayjs.Dayjs) : dayjs(a);
  const dateB = b instanceof dayjs ? (b as dayjs.Dayjs) : dayjs(b);

  return (dateA.valueOf() - dateB.valueOf()) * direction;
};

export const sortBooleanFn = (
  direction: SortDirectionNum,
  a: boolean,
  b: boolean,
): number => (a === b ? 0 : a ? -1 * direction : direction);

export type SortDirectionNum = -1 | 1;

export const getSortDirection = (sortBy: string): SortDirectionNum =>
  /^-/.test(sortBy) ? -1 : 1;

export const getSortKey = (sortBy: string): string =>
  sortBy ? sortBy.replace(/^-/, '') : '';

type SortDataParams = (
  _props: Pick<TableProps, 'columns' | 'data' | 'sortBy'>,
) => any[];

export const sortData: SortDataParams = ({columns, data, sortBy}) => {
  const sortKey = getSortKey(sortBy!);
  const column = sortKey
    ? columns.find((col) => col.accessor === sortKey)
    : null;

  if (column && column.accessor) {
    const direction = getSortDirection(sortBy!);

    return data.sort(getSortFunction(column, direction));
  }

  return data;
};

export const getSortFunction = (
  column: TableColumn,
  direction: SortDirectionNum,
): ((_a: any, _b: any) => number) => {
  switch (column.type) {
    case 'number':
      return (a, b) =>
        sortNumberFn(direction, a[column.accessor], b[column.accessor]);
    case 'date':
      return (a, b) =>
        sortDateFn(direction, a[column.accessor], b[column.accessor]);
    case 'boolean':
      return (a, b) =>
        sortBooleanFn(direction, a[column.accessor], b[column.accessor]);
    case 'string':
      return (a, b) =>
        sortStringFn(direction, a[column.accessor], b[column.accessor]);
    default:
      return () => 0;
  }
};
