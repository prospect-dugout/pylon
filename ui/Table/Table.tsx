import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import {css} from 'styled-components';
import {TableColumn, TableProps} from './types';
import {Input} from '../Input';
import {Table_Body} from './_Body';
import {Table_Header} from './_Header';
import {Table_Pagination} from './_Pagination';
import {applySearch, sortData} from './helpers';

export const Table: FunctionalComponent<TableProps> = ({
  columns,
  data,
  noHeader = false,
  onClickRow,
  pagination = true,
  paginationRowsPerPage = 20,
  paginationRowsPerPageOptions = [20, 50, 100],
  propertyForKey = 'id',
  rowCssFn,
  searchKeys = [],
  searchMinItems = 6,
  searchPlaceholder = 'Search',
  sortBy = '',
  tableCss,
  ...props
}: TableProps) => {
  const [_sortBy, _setSortBy] = useState<string>(sortBy);
  const [query, setQuery] = useState<string>('');
  const [rowsPerPage, setRowsPerPage] = useState(
    pagination ? paginationRowsPerPage : Infinity,
  );
  const [rowStart, setRowStart] = useState(0);

  const onSearchInputChange = (evt: any) => {
    const value = evt.currentTarget.value.trim();
    setQuery(value);
  };

  const filteredData = sortData({
    data: applySearch({
      data,
      query,
      columns: searchKeys
        .map((key) => columns.find((c) => c.accessor === key))
        .filter(Boolean) as TableColumn[],
    }),
    sortBy: _sortBy,
    columns,
  });

  const currentPageData = filteredData.slice(rowStart, rowsPerPage + rowStart);
  const searchable = searchKeys.length > 0 && searchMinItems <= data.length;

  return (
    <div
      css={`
        color: var(--fg-default);
        display: grid;
        height: 100%;
        grid-template-rows: ${[
          searchable ? 'max-content' : '',
          '1fr',
          pagination ? 'max-content' : '',
        ].join('')};
      `}
      {...props}
    >
      {searchable && (
        <Input
          type="search"
          onChange={onSearchInputChange}
          placeholder={searchPlaceholder}
          containerCss={css`
            height: var(--input-height-sm);
            margin: ${noHeader ? 0 : 'var(--gap-3) 0'};
          `}
          css={css`
            font-size: var(--font-size-body-2);
          `}
        />
      )}
      <div
        css={`
          min-height: 0;
          overflow-y: auto;
        `}
      >
        <table
          css={`
            border-collapse: collapse;
            border-spacing: 0;
            font-size: var(--font-size-body-2);
            margin: 0;
            text-align: left;
            width: 100%;
            ${tableCss}
          `}
        >
          {!noHeader && (
            <Table_Header
              columns={columns}
              onUpdateSortBy={_setSortBy}
              sortBy={_sortBy}
            />
          )}
          <Table_Body
            propertyForKey={propertyForKey}
            columns={columns}
            currentPageData={currentPageData}
            onClickRow={onClickRow}
            rowCssFn={rowCssFn}
          />
        </table>
      </div>
      {pagination && (
        <Table_Pagination
          count={filteredData.length}
          paginationRowsPerPage={paginationRowsPerPage}
          paginationRowsPerPageOptions={paginationRowsPerPageOptions}
          rowsPerPage={rowsPerPage}
          rowStart={rowStart}
          onRowStartChange={setRowStart}
          onRowsPerPageChange={setRowsPerPage}
        />
      )}
    </div>
  );
};
