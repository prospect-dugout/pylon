import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Typography} from '../Typography';

export interface SegmentedControlsItem {
  title: string;
  value: string;
  render?: () => ComponentChildren;
}

type Props = CustomCSSProperties<{
  defaultValue?: string;
  items: SegmentedControlsItem[];
  onChange?: (_item: SegmentedControlsItem) => void;
  segmentWidth?: number;
  size?: 'md' | 'sm';
}>;

export const SegmentedControls: FunctionalComponent<Props> = ({
  defaultValue,
  items = [],
  onChange,
  segmentWidth = 60,
  size = 'md',
  ...props
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue ? defaultValue : items[0]?.value ?? '',
  );
  const selectedIndex = items.findIndex((item) => item.value === selectedValue);

  return (
    <div
      css={`
        align-items: center;
        border-radius: var(--segmented-controls-radius-${size});
        border: 0.0625rem solid var(--border-muted);
        cursor: pointer;
        display: inline-flex;
        height: var(--segmented-controls-height-${size});
        position: relative;
        user-select: none;
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      {items.map((item) => (
        <Typography
          key={item.value}
          variant="body4"
          weight="bold"
          onClick={() => {
            setSelectedValue(item.value);
            onChange?.(item);
          }}
          css={`
            align-items: center;
            color: ${item.value === selectedValue
              ? 'var(--fg-default)'
              : 'var(--fg-muted)'};
            display: flex;
            height: 100%;
            justify-content: center;
            position: relative;
            text-align: center;
            white-space: nowrap;
            width: ${segmentWidth}px;
            z-index: 1;
          `}
        >
          {item.render ? item.render() : item.title}
        </Typography>
      ))}
      <div
        css={`
          bottom: 0;
          left: 0;
          padding: 0.1875rem;
          pointer-events: none;
          position: absolute;
          top: 0;
          transform: translateX(${selectedIndex * segmentWidth}px);
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
          width: ${segmentWidth}px;
        `}
      >
        <div
          css={`
            background: var(--bg-minimal);
            border-radius: var(--segmented-controls-radius-${size});
            height: 100%;
            width: 100%;
          `}
        />
      </div>
    </div>
  );
};
