import {FunctionalComponent, h} from 'preact';
import {TableColumn} from './types';
import {Icon} from '../Icon';
import {getSortDirection, getSortKey} from './helpers';

type Props = {
  columns?: TableColumn[];
  onUpdateSortBy?: (sortBy: string) => void;
  sortBy: string;
};

export const Table_Header: FunctionalComponent<Props> = ({
  columns,
  onUpdateSortBy,
  sortBy,
}: Props) => {
  return (
    <thead>
      <tr>
        {columns?.map((column) => (
          <TableHeaderCell
            key={column.accessor}
            column={column}
            sortBy={sortBy}
            onUpdateSortBy={onUpdateSortBy}
          />
        ))}
      </tr>
    </thead>
  );
};

type TableHeaderCellProps = {
  column: TableColumn;
} & Pick<Props, 'onUpdateSortBy' | 'sortBy'>;

const TableHeaderCell: FunctionalComponent<TableHeaderCellProps> = ({
  column,
  onUpdateSortBy,
  sortBy,
}: TableHeaderCellProps) => {
  const {
    accessor,
    alignRight = false,
    noSortable = false,
    title,
    type,
    width = 0,
  } = column;
  const sortable = title && !noSortable;
  const activeSort = sortable && getSortKey(sortBy) === accessor;
  const direction = activeSort ? getSortDirection(sortBy) : 0;
  const shouldAlignRight = type === 'number' || alignRight;

  const onClick = () => {
    const newSortBy = !activeSort || direction > 0 ? `-${accessor}` : accessor;
    onUpdateSortBy?.(newSortBy);
  };

  return (
    <th
      onClick={() => onClick?.()}
      style={{
        minWidth: width,
      }}
      css={`
        border-bottom: 0.0625rem solid var(--border-muted);
        font-weight: var(--font-weight-medium);
        padding: var(--gap-3);
      `}
    >
      <div
        css={`
          align-items: center;
          cursor: ${sortable ? 'pointer' : 'default'};
          display: flex;
          flex-direction: ${shouldAlignRight ? 'row-reverse' : 'unset'};
          justify-content: flex-start;

          &:hover > div {
            opacity: 1;
          }
        `}
      >
        {title}
        {sortable && (
          <Icon
            icon="arrow-up"
            css={`
              margin-right: ${shouldAlignRight ? '0.25rem' : 'unset'};
              margin-left: ${!shouldAlignRight ? '0.25rem' : 'unset'};
              color: ${activeSort ? 'var(--icon-1)' : 'inherit'};
              display: flex;
              opacity: ${activeSort ? 1 : 0.3};
              transform: ${direction <= 0 ? 'rotate(180deg)' : 'unset'};
              transition:
                transform 0.2s linear,
                opacity 0.1s linear;

              > svg {
                width: 1rem;
                height: 1rem;
              }
            `}
          />
        )}
      </div>
    </th>
  );
};
