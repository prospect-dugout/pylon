import {FunctionalComponent, h} from 'preact';
import {TableProps} from './types';

type Props = Pick<
  TableProps,
  'columns' | 'onClickRow' | 'propertyForKey' | 'rowCssFn'
> & {
  currentPageData: {[key: string]: any}[];
};

export const Table_Body: FunctionalComponent<Props> = ({
  columns,
  currentPageData,
  onClickRow,
  propertyForKey,
  rowCssFn,
}: Props) => {
  return (
    <tbody>
      {currentPageData.map((d) => {
        return (
          <TableBodyRow
            key={`row:${d[propertyForKey!]}`}
            d={d}
            columns={columns}
            onClickRow={onClickRow}
            propertyForKey={propertyForKey}
            rowCssFn={rowCssFn}
          />
        );
      })}
    </tbody>
  );
};

type TableBodyRowProps = Pick<
  TableProps,
  'columns' | 'onClickRow' | 'propertyForKey' | 'rowCssFn'
> & {
  d: {[key: string]: any};
};

const TableBodyRow: FunctionalComponent<TableBodyRowProps> = ({
  columns,
  d,
  onClickRow,
  propertyForKey,
  rowCssFn,
}: TableBodyRowProps) => {
  const onClick = (evt: any) => {
    onClickRow?.(d, evt);
  };

  return (
    <tr
      onClick={(e) => onClick?.(e)}
      css={`
        ${onClickRow
          ? `
            cursor: pointer;
            &:hover {
              background: var(--bg-muted);
              td:first-child {
                background: var(--bg-muted);
              }
            }
        `
          : ''}
        ${rowCssFn?.({d}) ?? ''}
      `}
    >
      {columns.map((column) => {
        const {
          accessor,
          alignRight,
          type,
          width,
          formatter,
          cellCssFn,
          renderContent,
        } = column;
        const _alignRight = alignRight || type === 'number';
        const value = d[accessor];

        let content = null;

        if (renderContent) {
          content = renderContent({d, value});
        } else {
          content = formatter ? formatter(value) : value;
        }

        return (
          <td
            key={`cell:${accessor}:${d[propertyForKey!]}`}
            width={width}
            css={`
              border-bottom: 0.0625rem solid var(--border-muted);
              color: inherit;
              padding: var(--gap-3) var(--gap-3);
              text-align: ${_alignRight ? 'right' : 'initial'};
              white-space: ${_alignRight || type === 'date'
                ? 'nowrap'
                : 'initial'};
              ${cellCssFn?.(d) ?? ''}
            `}
          >
            {content}
          </td>
        );
      })}
    </tr>
  );
};
