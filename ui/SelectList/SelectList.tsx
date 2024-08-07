import {FunctionalComponent, h} from 'preact';
import {useCallback, useEffect, useMemo, useRef, useState} from 'preact/hooks';
import 'element.scrollintoviewifneeded-polyfill';
import styled from 'styled-components';
import {afterNextRender} from '../../lib';
import {scrollBarMixin} from '../../style/mixins';
import {Button, menuItemVariant} from '../Button';
import {Icon} from '../Icon';
import {Tooltip} from '../Tooltip';
import {Typography} from '../Typography';

type SelectListItem = {
  [key: string]: any;
  weight?: number;
};

type Props = {
  autoFocusSearchResult?: boolean;
  filterMode?: 'startsWith' | 'includes';
  items: SelectListItem[];
  onSelect?: (item: SelectListItem) => void;
  propertyForLabel?: string;
  propertyForTooltipText?: string;
  propertyForValue?: string;
  searchValue?: string;
  selectBy?: 'click' | 'clickOrEnter' | 'clickOrEnterOrTab';
  weights?: {[key: string]: number};
};

export const SelectList: FunctionalComponent<Props> = ({
  autoFocusSearchResult = true,
  filterMode = 'includes',
  items,
  onSelect,
  propertyForLabel = 'label',
  propertyForTooltipText = 'tooltipText',
  propertyForValue = 'value',
  searchValue,
  selectBy = 'clickOrEnterOrTab',
  weights = {},
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      searchValue
        ? items.filter((item) => {
            const label = getPropertyByPath(item, propertyForLabel).toString();
            return filterMode === 'startsWith'
              ? label.toLowerCase().startsWith(searchValue?.toLowerCase() || '')
              : label.toLowerCase().includes(searchValue?.toLowerCase() || '');
          })
        : items,
    [items, propertyForLabel, filterMode, searchValue],
  );

  const handleItemFocus = useCallback(
    (item: SelectListItem) => {
      const idx = filteredItems.findIndex((_item) => {
        return (
          getPropertyByPath(_item, propertyForValue) ===
          getPropertyByPath(item, propertyForValue)
        );
      });
      setFocusedIdx(idx);
    },
    [filteredItems, propertyForValue],
  );

  const handleItemClick = useCallback(
    (item: SelectListItem) => {
      onSelect?.(item);
      handleItemFocus(item);
    },
    [onSelect, handleItemFocus],
  );

  useEffect(() => {
    if (autoFocusSearchResult && searchValue) {
      const weightedItems = filteredItems
        .map((item, index) => ({
          index,
          weight: weights[getPropertyByPath(item, propertyForValue)] || 0,
        }))
        .sort((a, b) => b.weight - a.weight);
      const indexToFocus =
        weightedItems.length > 0 ? weightedItems[0].index : null;
      setFocusedIdx(indexToFocus);

      if (indexToFocus !== null) {
        afterNextRender(() => {
          const focusedEl = ref.current?.querySelector(
            `[role="option"]:nth-child(${indexToFocus + 1})`,
          );

          if (focusedEl) {
            focusedEl.scrollIntoViewIfNeeded(true);
          }
        });
      }
    }
  }, [
    autoFocusSearchResult,
    weights,
    propertyForValue,
    searchValue,
    filteredItems,
  ]);

  /* handle arrow keys */
  useEffect(() => {
    const handleKeydown = (evt: KeyboardEvent) => {
      if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
        evt.preventDefault();
        evt.stopPropagation();
        const max = items.length - 1;
        const next =
          focusedIdx === null
            ? 0
            : evt.key === 'ArrowDown'
              ? Math.min(focusedIdx + 1, max)
              : Math.max(focusedIdx - 1, 0);

        setFocusedIdx(next);
        const focusedEl = ref.current?.querySelector(
          `[role="option"]:nth-child(${next + 1})`,
        );

        if (focusedEl) {
          focusedEl.scrollIntoViewIfNeeded(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [focusedIdx, items.length]);

  // handle selectOnTab
  useEffect(() => {
    const handleKeydown = (evt: KeyboardEvent) => {
      if (
        (selectBy !== 'click' && evt.key === 'Enter') ||
        (selectBy === 'clickOrEnterOrTab' && evt.key === 'Tab')
      ) {
        evt.preventDefault();
        evt.stopPropagation();
        if (focusedIdx !== null) {
          handleItemClick(filteredItems[focusedIdx]);
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [filteredItems, focusedIdx, handleItemClick, selectBy]);

  return (
    <div
      ref={ref}
      css={`
        display: flex;
        flex-direction: column;
        max-height: 15rem;
        overflow-y: auto;
        ${scrollBarMixin}
      `}
    >
      {filteredItems.length > 0 &&
        filteredItems.map((item, idx) => {
          const tooltipText = getPropertyByPath(item, propertyForTooltipText);
          const label = getPropertyByPath(item, propertyForLabel);

          return (
            <StyledOptionBtn
              key={getPropertyByPath(item, propertyForValue)}
              role="option"
              customVariant={menuItemVariant}
              onFocus={() => handleItemFocus(item)}
              onClick={() => handleItemClick(item)}
              $isFocused={focusedIdx === idx}
            >
              {highlightSearchValue(label, searchValue)}
              {!!tooltipText && (
                <Tooltip
                  text={getPropertyByPath(item, propertyForTooltipText)}
                  overlayPosition={{
                    verticalOffset: -8,
                  }}
                >
                  <Icon
                    icon="help-circle-outline"
                    size={16}
                    className="help-icon"
                    css={`
                      color: var(--fg-muted);
                      opacity: 0;
                    `}
                  />
                </Tooltip>
              )}
            </StyledOptionBtn>
          );
        })}
      {!filteredItems.length && !!searchValue && (
        <Typography
          variant="body3"
          css={`
            color: var(--fg-muted);
            padding: var(--gap-2) 0;
            text-align: center;
          `}
        >
          No search results
        </Typography>
      )}
    </div>
  );
};

function getPropertyByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => acc[key], obj);
}

function highlightSearchValue(label: string, searchValue?: string) {
  if (!searchValue) return label;
  const parts = label.split(new RegExp(`(${searchValue})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === searchValue.toLowerCase() ? (
          <b key={index}>{part}</b>
        ) : (
          part
        ),
      )}
    </span>
  );
}

const StyledOptionBtn = styled(Button)<{
  $isFocused: boolean;
}>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: ${(p) =>
    p.$isFocused ? 'var(--bg-subtle) !important' : 'transparent'};
  &:hover {
    .help-icon {
      opacity: 1;
    }
  }
  &:focus-visible {
    outline: none;
  }
`;
