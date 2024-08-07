import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';
import styled, {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib';
import {Anchor} from '../Anchor';

export type TabMenuItem = {
  content?: string | ComponentChildren;
  href?: string;
  value?: string;
};

type Props = CustomCSSProperties<{
  defaultValue?: string;
  direction?: 'row' | 'column';
  items: TabMenuItem[];
  noAnimation?: boolean;
  onChange?: (item: TabMenuItem) => void;
  tabsWithErrors?: string[];
}>;

export const TabMenu: FunctionalComponent<Props> = ({
  defaultValue,
  direction = 'row',
  items = [],
  noAnimation = false,
  onChange,
  tabsWithErrors,
  ...props
}: Props) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<TabMenuItem | null>(
    typeof defaultValue !== 'undefined'
      ? items.find((i) => i.value === defaultValue) ?? null
      : null,
  );

  const handleTabClick = (evt: MouseEvent, item: TabMenuItem) => {
    if (typeof item.value !== undefined) {
      evt.preventDefault();
      setActiveItem(item);
      onChange?.(item);
    }
  };
  useEffect(() => {
    const indicatorEl = indicatorRef.current;
    const stackEl = stackRef.current;
    if (!stackEl || !indicatorEl) return;
    const activeElement = stackEl.querySelector('.tab-active') ?? null;
    if (!activeElement) return;
    const stackRect = stackEl.getBoundingClientRect();
    const {left, top, width, height} = activeElement.getBoundingClientRect();
    indicatorEl.style.width = `${width}px`;
    indicatorEl.style.height = `${height}px`;

    if (direction === 'row') {
      indicatorEl.style.transform = `translate(${left - stackRect.left}px, 0)`;
    } else {
      indicatorEl.style.transform = `translate(0, ${top - stackRect.top}px)`;
    }
  }, [activeItem, direction]);

  return (
    <StyledRoot
      ref={stackRef}
      $direction={direction}
      $extraCss={customCSSPropertiesRule(props)}
      role="tablist"
      {...nonCustomCSSProps(props)}
    >
      <StyledIndicator ref={indicatorRef} $noAnimation={noAnimation} />
      {items.map((item, idx) => {
        const hasErrors = tabsWithErrors?.includes(item.value ?? '') ?? false;
        const isActive =
          activeItem === item ||
          (item.href && window.location.pathname === item.href);

        return (
          <StyledNavAnchor
            key={idx}
            role="tab"
            href={item.href ?? '#'}
            className={isActive ? 'tab-active' : ''}
            onClick={(evt) => handleTabClick(evt, item)}
            variant="unstyled"
            $hasErrors={hasErrors}
          >
            {item.content}
            {hasErrors}
          </StyledNavAnchor>
        );
      })}
    </StyledRoot>
  );
};

const StyledRoot = styled.div<{
  $direction: Props['direction'];
  $extraCss: string;
}>`
  align-items: ${(p) => (p.$direction === 'row' ? 'center' : 'stretch')};
  display: flex;
  flex-direction: ${(p) => p.$direction};
  gap: ${(p) => (p.$direction === 'row' ? 5 : 0)}px;
  position: relative;
  user-select: none;
  ${(p) => p.$extraCss}
`;

const StyledIndicator = styled.div<{$noAnimation: Props['noAnimation']}>`
  background: var(--bg-minimal);
  border-radius: var(--radius-4);
  position: absolute;
  z-index: 0;
  ${(p) =>
    !p.$noAnimation &&
    css`
      transition:
        transform 0.25s ease,
        width 0.25s ease,
        height 0.25s ease;
    `}
`;

const StyledNavAnchor = styled(Anchor)<{$hasErrors: boolean}>`
  border-radius: var(--radius-4);
  color: ${(p) => (p.$hasErrors ? 'var(--error-dark)' : 'var(--fg-default)')};
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  padding: var(--gap-1-5) var(--gap-4);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;
