import {Fragment, FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {useEffect, useRef, useState} from 'preact/hooks';
import 'element.scrollintoviewifneeded-polyfill';
import {useCallback} from 'react';
import styled, {css} from 'styled-components';
import {afterNextRender} from '../../lib';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
} from '../../lib/custom-css-properties-rule';
import {scrollBarMixin} from '../../style/mixins';
import {Checkbox} from '../Checkbox';
import {Icon} from '../Icon';
import {Input} from '../Input';
import {Overlay, OverlayPosition, dropdownOverlayCss} from '../Overlay';

type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = Pick<JSX.HTMLAttributes<HTMLDivElement>, 'onBlur'> &
  CustomCSSProperties<{
    defaultValue?: string[] | string;
    disabled?: boolean;
    id?: string;
    invalid?: boolean;
    multiple?: boolean;
    name?: string;
    options: SelectOption[];
    overlayPosition?: Partial<OverlayPosition>;
    placeholder?: string;
    searchable?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onChange?: JSX.GenericEventHandler<HTMLSelectElement>;
    value?: string[] | string;
  }>;

export const Select: FunctionalComponent<SelectProps> = forwardRef<
  HTMLDivElement,
  SelectProps
>(
  (
    {
      defaultValue,
      disabled = false,
      id,
      invalid = false,
      multiple,
      onBlur,
      onChange,
      options,
      overlayPosition,
      placeholder = 'Select an option',
      searchable = false,
      size = 'md',
      value,
      ...props
    }: SelectProps,
    ref,
  ) => {
    const innerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const [searchValue, setSearchValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
      optionsFromValue({
        options,
        value: value || defaultValue,
        multiple,
      }),
    );
    const [focusedIdx, setFocusedIdx] = useState<number | null>(null);
    const [opened, setOpened] = useState(false);
    const selectedValues = selectedOptions.map((option) => option.value);
    const filteredOptions =
      searchable && searchValue
        ? options.filter((option) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : options;

    const handleSelectOption = (option: SelectOption) => {
      setSelectedOptions((prev) => {
        let result;
        if (multiple) {
          if (selectedValues.includes(option.value)) {
            result = prev.filter((item) => item.value !== option.value);
          } else {
            result = [...prev, option].sort(
              (a, b) =>
                options.findIndex((item) => item.value === a.value) -
                options.findIndex((item) => item.value === b.value),
            );
          }
        } else {
          result = [option];
        }
        const modifiedTarget = {
          name: props.name,
          value: multiple ? result.map((item) => item.value) : result[0].value,
        };
        const modifiedEvt = Object.assign({}, new Event('change'), {
          currentTarget: modifiedTarget,
          target: modifiedTarget,
        });
        onChange?.(modifiedEvt as any);
        if (!multiple) {
          setOpened(false);
          afterNextRender(() => {
            innerRef.current?.focus();
          });
        }

        // Update state only if uncontrolled
        return value !== undefined ? prev : result;
      });
    };

    const onOverlayKeydown = (evt: KeyboardEvent) => {
      if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
        evt.preventDefault();
        evt.stopPropagation();
        // Use filteredOptions here instead of options
        const maxIndex = filteredOptions.length - 1;
        const nextIdx =
          focusedIdx === null
            ? 0
            : evt.key === 'ArrowDown'
              ? Math.min(focusedIdx + 1, maxIndex)
              : Math.max(focusedIdx - 1, 0);

        setFocusedIdx(nextIdx);
        const focusedEl = overlayRef.current?.querySelector(
          `[role="option"]:nth-child(${nextIdx + 1})`,
        );
        if (focusedEl) {
          focusedEl.scrollIntoViewIfNeeded(true);
        }
      }

      if (evt.key === 'Enter' && focusedIdx !== null) {
        evt.preventDefault();
        evt.stopPropagation();
        // Use filteredOptions for selection as well
        const selectedOption = filteredOptions[focusedIdx];
        if (selectedOption) {
          handleSelectOption(selectedOption);
        }
      }

      if (evt.key === 'Escape') {
        setOpened(false);
        afterNextRender(() => {
          innerRef.current?.focus();
        });
      }
    };

    const handleOptionClick = (option: SelectOption) => {
      handleSelectOption(option);
      if (multiple) {
        const focusedIdx = options.findIndex(
          (item) => item.value === option.value,
        );
        setFocusedIdx(focusedIdx);
      }
    };

    const onInputKeydown = (evt: KeyboardEvent) => {
      if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
        evt.preventDefault();
        evt.stopPropagation();
        setOpened(true);
        if (
          (focusedIdx === null && evt.key === 'ArrowDown') ||
          evt.key === 'ArrowUp'
        ) {
          setFocusedIdx(0);
        }
      }
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        evt.stopPropagation();
        if (!disabled) {
          setOpened(!opened);
        }
      }
    };

    const onInputMouseDown = () => {
      setOpened((prev) => {
        if (prev) {
          innerRef.current?.focus();
        }
        return !prev;
      });
    };

    const onInputBlur: JSX.FocusEventHandler<HTMLDivElement> = (evt) => {
      const modifiedEvt = Object.assign({}, evt, {
        target: {
          name: props.name,
          value: multiple ? selectedValues : selectedValues[0],
        },
      });
      onBlur?.(modifiedEvt);
    };

    const onSearchInputChange = useCallback(
      (evt: any) => {
        setSearchValue(evt.target.value);
      },
      [setSearchValue],
    );

    const handleOptionFocus = (option: SelectOption) => {
      const idx = options.findIndex(({value}) => value === option.value);
      setFocusedIdx(idx);
    };

    const scrollIntoOption = (option: SelectOption) => {
      if (!option) return;
      const idx = options.findIndex(({value}) => value === option.value);
      if (idx < 0) return;
      afterNextRender(() => {
        const el = overlayRef.current?.querySelector(
          `[role="option"]:nth-child(${idx + 1})`,
        );
        if (el) {
          el.scrollIntoViewIfNeeded(true);
        }
      });
    };

    useEffect(() => {
      if (opened) {
        if (searchable) {
          setSearchValue('');
          afterNextRender(() => {
            searchInputRef.current?.focus();
          });
        }
        if (selectedOptions.length > 0) {
          scrollIntoOption(selectedOptions[0]);
          setFocusedIdx(
            options.findIndex(
              (item) => item.value === selectedOptions[0].value,
            ),
          );
        }
      } else {
        // Reset state when closed
        setFocusedIdx(null);
      }
    }, [opened]);

    useEffect(() => {
      // If controlled, select the options from the value
      if (value !== undefined) {
        setSelectedOptions(optionsFromValue({options, multiple, value}));
      }
    }, [options, multiple, value]);

    return (
      <>
        <StyledInput
          id={id}
          ref={(el: HTMLDivElement | null) => {
            if (typeof ref === 'function') {
              ref(el);
            } else if (ref) {
              ref.current = el;
            }
            innerRef.current = el;
          }}
          tabIndex={disabled ? -1 : 0}
          role="button"
          aria-expanded={opened}
          aria-haspopup="listbox"
          onKeyDown={onInputKeydown}
          onMouseDown={onInputMouseDown}
          onBlur={onInputBlur}
          $disabled={disabled}
          $size={size}
          $invalid={invalid}
          $opened={opened}
          $css={customCSSPropertiesRule(props)}
          {...props}
        >
          <StyledLabel
            $isPlaceholder={!selectedOptions?.length}
            $disabled={disabled}
          >
            {selectedOptions?.length
              ? selectedOptions.map((option) => option.label).join(', ')
              : placeholder}
          </StyledLabel>
          <Icon
            icon="chevron-down"
            size={14}
            css={`
              color: var(--fg-inherit);
              flex-shrink: 0;
            `}
          />
        </StyledInput>
        <Overlay
          ref={overlayRef}
          data-select-overlay
          opened={opened}
          setOpened={setOpened}
          onKeyDown={onOverlayKeydown}
          cancelOnEscKey
          cancelOnOutsideClick
          closeOthers="[data-select-overlay=true]"
          noAutoFocus={searchable}
          position={{
            positionTarget: innerRef.current,
            horizontalAlign: 'right',
            ...overlayPosition,
          }}
          css={`
            ${dropdownOverlayCss};
            ${searchable &&
            css`
              display: grid;
              grid-template-rows: auto 1fr;
            `}
          `}
        >
          {searchable && (
            <Input
              ref={searchInputRef}
              size="sm"
              placeholder="Seach"
              onChange={onSearchInputChange}
              variant="search"
              type="search"
              startAdornment={<Icon icon="search" size={16} />}
              containerCss={css`
                flex-shrink: 0;
                ${filteredOptions.length > 0 &&
                css`
                  margin: var(--gap-1) 0 var(--gap-2);
                `};
              `}
            />
          )}
          <StyledOptionsContainer>
            {filteredOptions.map((option, idx) => {
              return (
                <StyledOption
                  key={option.value}
                  role="option"
                  onMouseDown={(evt: MouseEvent) => evt.preventDefault()}
                  onFocus={() => handleOptionFocus(option)}
                  onClick={() => handleOptionClick(option)}
                  $multiple={!!multiple}
                  $isSelected={selectedValues.includes(option.value)}
                  $isFocused={focusedIdx !== null && focusedIdx === idx}
                >
                  {multiple && (
                    <Checkbox
                      checked={selectedValues.includes(option.value)}
                      tabIndex={-1}
                    />
                  )}
                  {option.label}
                </StyledOption>
              );
            })}
          </StyledOptionsContainer>
        </Overlay>
      </>
    );
  },
);

/* prettier-ignore */
const StyledInput = styled.div<{
  $disabled: boolean;
  $size: string;
  $invalid: boolean;
  $opened: boolean;
  $css: ReturnType<typeof css> | string;
}>`
  align-items: center;
  background: var(--input-bg);
  border-radius: ${(p) => `var(--input-radius-${p.$size})`};
  border: ${(p) => p.$invalid ? '1px solid var(--input-outline-error-color)' : '1px solid var(--input-border-color)'};
  color: ${(p) => (p.$disabled ?  'var(--fg-disabled)' : 'var(--fg-default)')};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  font-size: var(--input-font-size-${p => p.$size});
  gap: var(--gap-3);
  height: ${(p) => `var(--input-height-${p.$size})`};
  justify-content: space-between;
  outline: 0;
  padding: ${(p) => `var(--input-padding-${p.$size})`};
  pointer-events: ${(p) => (p.$disabled ? 'none' : 'auto')};
  user-select: none;
  width: 100%;
  ${p => p.$opened && css`
    border-color: ${p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)'};
    box-shadow: inset 0 0 0 1px ${p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)'};
  `}
  ${p => !p.$opened && css`
    &:focus {
      border-color: ${p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)'};
      box-shadow: inset 0 0 0 1px ${p.$invalid ? 'var(--input-outline-error-color)' : 'var(--input-outline-color)'};
    }
  `}
`;

const StyledLabel = styled.div<{$isPlaceholder: boolean; $disabled: boolean}>`
  line-height: 1.3;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(p) =>
    p.$isPlaceholder &&
    css`
      color: ${p.$disabled ? 'var(--fg-disabled)' : 'var(--fg-placeholder)'};
    `}
`;

// prettier-ignore
const StyledOption = styled.button<{
  $isFocused: boolean;
  $isSelected: boolean;
  $multiple: boolean;
}>`
  align-items: center;
  background: ${(p) => p.$isSelected && !p.$multiple ? 'var(--primary50)' : p.$isFocused ? 'var(--bg-subtle)' : 'transparent'};
  border-radius: var(--radius-1);
  color: ${(p) => (p.$isSelected && !p.$multiple ? 'var(--white)' : 'inherit')};
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  gap: var(--gap-2);
  height: var(--button-height-md);
  padding: var(--button-padding-md);
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${p => (!p.$isSelected || p.$multiple) ? 'var(--bg-minimal)' : ''};
  }
`;

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 22rem;
  min-width: 0;
  overflow-y: auto;
  ${scrollBarMixin}
`;

function optionsFromValue({
  options,
  value,
  multiple,
}: {
  options: SelectOption[];
  value?: string | string[];
  multiple?: boolean;
}) {
  if (multiple) {
    const valueArray = Array.isArray(value) ? value : value ? [value] : [];
    return options.filter((option) => valueArray.includes(option.value));
  } else {
    return options.filter((option) => option.value === value);
  }
}
