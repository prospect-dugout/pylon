import {FunctionalComponent, h} from 'preact';
import {useRef, useState} from 'preact/hooks';
import styled, {css} from 'styled-components';
import {Grid} from '../Grid';
import {Typography} from '../Typography';

type InputRange = [number, number];

type Props = {
  defaultValue?: InputRange;
  deferOnChange?: boolean;
  max?: number;
  min?: number;
  minLength?: number;
  onChange?: (value: InputRange) => void;
  step?: number;
};

export const InputRange: FunctionalComponent<Props> = ({
  defaultValue,
  deferOnChange = false,
  max = 100,
  min = 0,
  minLength,
  onChange,
  step = 1,
  ...props
}: Props) => {
  const adjustedMin = normalizeStepValue(min, step);
  const adjustedMax = normalizeStepValue(max, step);
  const draggingRef = useRef<boolean>(false);
  const [range, setRange] = useState<InputRange>([
    defaultValue ? defaultValue[0] : adjustedMin,
    defaultValue ? defaultValue[1] : Math.max(adjustedMax, adjustedMin),
  ]);

  const handleInputChange = (index: number, evt: Event) => {
    evt.preventDefault();
    const adjustedMinLength = typeof minLength === 'number' ? minLength : step;
    let value = parseFloat((evt.target as HTMLInputElement).value);
    value =
      index === 0
        ? Math.min(value, range[1] - adjustedMinLength)
        : Math.max(value, range[0] + adjustedMinLength);

    setRange((prev) => {
      const updatedRange = [...prev] as InputRange;
      updatedRange[index] = normalizeStepValue(value, step);
      return updatedRange;
    });

    if ((deferOnChange && !draggingRef.current) || !deferOnChange) {
      onChange?.(range);
    }
  };

  const handleInputMouseDown = () => {
    draggingRef.current = true;
  };

  const handleInputMouseUp = () => {
    draggingRef.current = false;
    if (deferOnChange) {
      onChange?.(range);
    }
  };

  const percentageMin = ((range[0] - min) / (adjustedMax - adjustedMin)) * 100;
  const percentageMax = ((range[1] - min) / (adjustedMax - adjustedMin)) * 100;

  return (
    <Grid
      cols={`2rem 1fr 2rem`}
      alignItems="center"
      gap={3}
      css={`
        user-select: none;
        width: 100%;
      `}
    >
      <Typography
        variant="body4"
        css-color="var(--fg-muted)"
        css-textAlign="left"
        css-mt={1}
      >
        {parseDisplayValue(range[0], step)}
      </Typography>
      <div
        css={`
          position: relative;
        `}
      >
        <StyledTrackBackground />
        <StyledTrackSelectedBackground
          style={{
            left: `${percentageMin}%`,
            right: `${100 - percentageMax}%`,
          }}
        />
        <StyledInput
          type="range"
          min={adjustedMin}
          max={adjustedMax}
          value={range[0]}
          step={step}
          onInput={(evt: InputEvent) => handleInputChange(0, evt)}
          onMouseDown={handleInputMouseDown}
          onMouseUp={handleInputMouseUp}
          {...props}
        />
        <StyledInput
          type="range"
          min={adjustedMin}
          max={adjustedMax}
          value={range[1]}
          step={step}
          onInput={(evt: InputEvent) => handleInputChange(1, evt)}
          onMouseDown={handleInputMouseDown}
          onMouseUp={handleInputMouseUp}
          {...props}
        />
      </div>
      <Typography
        variant="body4"
        css-color="var(--fg-muted)"
        css-mt={1}
        css-textAlign="right"
      >
        {parseDisplayValue(range[1], step)}
      </Typography>
    </Grid>
  );
};

const normalizeStepValue = (value: number, step: number) => {
  const roundedValue = Math.round(value / step) * step;
  return roundedValue;
};

const parseDisplayValue = (value: number, step: Props['step']) => {
  if (step === 1) {
    return value.toFixed(0);
  }
  if (step === 0.1) {
    return value.toFixed(1);
  }
  if (step === 0.01) {
    return value.toFixed(2);
  }
  return value.toFixed(2);
};

const StyledTrackBackground = styled.div`
  background: var(--border-muted);
  height: 0.25rem;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1;
`;

const StyledTrackSelectedBackground = styled.div`
  background: var(--primary50);
  height: 0.25rem;
  position: absolute;
  top: 50%;
  z-index: 1;
`;

const thumbStyles = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: var(--primary50);
  border-radius: var(--radius-round);
  cursor: pointer;
  height: 1.25rem;
  position: relative;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 1.25rem;
  z-index: 2;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  height: 0.25rem;
  position: absolute;
  top: 0;
  width: 100%;

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &::-webkit-slider-thumb {
    ${thumbStyles}
  }

  &:focus {
    outline: none;
  }
`;
