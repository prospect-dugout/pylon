import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import {Button} from '../Button';
import {Checkbox} from './Checkbox';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  defaultChecked?: Option['value'][];
  onChange?: (value: Option['value'][]) => void;
  maxOptions?: number;
};

export const CheckboxGroup: FunctionalComponent<Props> = ({
  options,
  defaultChecked = [],
  onChange,
  maxOptions = Infinity,
  ...props
}: Props) => {
  const [displayAll, setDisplayAll] = useState(false);
  const [state, setState] = useState(defaultChecked);

  const handleCheckboxChange = (evt: Event) => {
    const value = (evt.target as HTMLInputElement).value;
    const newState = state.includes(value)
      ? state.filter((v) => v !== value)
      : [...state, value];
    setState(newState);
    onChange?.(newState);
  };

  const filteredOptions = displayAll ? options : options.slice(0, maxOptions);

  return (
    <div {...props}>
      {filteredOptions.map((option) => (
        <div key={option.value}>
          <Checkbox
            value={option.value}
            label={option.label}
            defaultChecked={
              defaultChecked.includes(option.value) ||
              state.includes(option.value)
            }
            onChange={handleCheckboxChange}
          />
        </div>
      ))}
      {options.length > maxOptions && (
        <Button
          variant="unstyled"
          onClick={() => setDisplayAll(!displayAll)}
          css={`
            color: var(--primary50);
            &:hover {
              color: var(--primary80);
            }
          `}
        >
          View {displayAll ? 'less' : 'more'}
        </Button>
      )}
    </div>
  );
};
