import {FunctionalComponent, h} from 'preact';
import {Icon} from '../Icon';
import {Stack} from '../Stack';

type Props = {
  count: number;
  onRowsPerPageChange: (_value: number) => void;
  onRowStartChange: (_value: number) => void;
  paginationRowsPerPage: number;
  paginationRowsPerPageOptions: number[];
  rowsPerPage: number;
  rowStart: number;
};

export const Table_Pagination: FunctionalComponent<Props> = ({
  count,
  onRowsPerPageChange,
  onRowStartChange,
  paginationRowsPerPage,
  paginationRowsPerPageOptions,
  rowsPerPage,
  rowStart,
}: Props) => {
  if (rowsPerPage > count && rowsPerPage === paginationRowsPerPage) {
    return null;
  }

  const rightDisabled = rowStart + rowsPerPage >= count;
  const leftDisabled = rowStart === 0;
  const to = rowStart + rowsPerPage > count ? count : rowStart + rowsPerPage;

  const onArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      onRowStartChange(Math.max(0, rowStart - rowsPerPage));
    } else if (direction === 'right') {
      const newRowStart = rowStart + rowsPerPage;
      onRowStartChange(newRowStart > count ? rowsPerPage : newRowStart);
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="flex-end"
      css={`
        color: var(--fg-muted);
        font-size: var(--font-size-body-4);
        padding: var(--gap-4) var(--gap-3);
        user-select: none;
      `}
    >
      <Stack alignItems="center" css-mr={12}>
        Rows per page:{' '}
        <select
          value={rowsPerPage}
          onChange={(evt: any) => {
            onRowStartChange(0);
            onRowsPerPageChange(parseInt(evt.target.value));
          }}
          css={`
            -webkit-appearance: menulist;
            appearance: menulist;
            border-radius: var(--radius-2);
            color: inherit;
            font-family: inherit;
            padding: 0 var(--gap-1);
          `}
        >
          {paginationRowsPerPageOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Stack>
      <div
        css={`
          margin-right: 1.5rem;
        `}
      >
        {to > 0 ? rowStart + 1 : 0} to {to} of {count}
      </div>
      <Stack
        alignItems="center"
        gap={4}
        css={`
          > div {
            color: var(--fg-muted);
            cursor: pointer;

            &:hover {
              color: var(--primary50);
            }
          }

          & svg {
            height: 1.125rem;
            width: 1.125rem;
          }
        `}
      >
        <Icon
          icon="chevron-forward"
          onClick={() => onArrowClick('left')}
          css={`
            opacity: ${leftDisabled ? 0.2 : 'unset'};
            pointer-events: ${leftDisabled ? 'none' : 'unset'};
            transform: rotate(180deg);
          `}
        />
        <Icon
          icon="chevron-forward"
          onClick={() => onArrowClick('right')}
          css={`
            opacity: ${rightDisabled ? 0.2 : 'unset'};
            pointer-events: ${rightDisabled ? 'none' : 'unset'};
          `}
        />
      </Stack>
    </Stack>
  );
};
