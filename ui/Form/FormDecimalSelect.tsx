import {FunctionalComponent, h} from 'preact';
import {TargetedEvent} from 'preact/compat';
import {css} from 'styled-components';
import {toFloatOrNull} from '../../lib';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
} from '../../lib/custom-css-properties-rule';
import {Grid} from '../Grid';
import {Select} from '../Select';
import {Fieldset, FieldsetProps} from './Fieldset';

type Props = CustomCSSProperties<
  Pick<
    FieldsetProps,
    'fullWidth' | 'helpText' | 'invalidText' | 'label' | 'size'
  > & {
    fieldsetCss?: ReturnType<typeof css>;
    id?: string;
    invalid?: boolean;
    maxFractionalNumber?: number;
    minFractionalNumber?: number;
    maxWholeNumber?: number;
    minWholeNumber?: number;
    name?: string;
    onChange?: (evt: TargetedEvent<HTMLSelectElement, Event>) => void;
    value?: number | string | null;
  }
>;

export const FormDecimalSelect: FunctionalComponent<Props> = (props: Props) => {
  const {
    fieldsetCss,
    fullWidth = false,
    helpText,
    id,
    invalid,
    invalidText,
    label,
    maxFractionalNumber = 99,
    minFractionalNumber = 0,
    maxWholeNumber = 99,
    minWholeNumber = 0,
    onChange,
    size,
    value,
    ...restProps
  } = props;
  const parsedValue = toFloatOrNull(value);
  const values = String(parsedValue === null ? '' : parsedValue).split('.');
  const wholeNumberOptions = Array.from(
    {length: maxWholeNumber - minWholeNumber + 1},
    (_, i) => ({
      label: String(minWholeNumber + i),
      value: String(minWholeNumber + i),
    }),
  );

  const fractionalNumberOptions = Array.from(
    {length: maxFractionalNumber - minFractionalNumber + 1},
    (_, i) => ({
      label: (minFractionalNumber + i).toString().padStart(2, '0'),
      value: (minFractionalNumber + i).toString().padStart(2, '0'),
    }),
  );

  const handleOnChange = (
    evt: TargetedEvent<HTMLSelectElement, Event>,
    value: string,
  ) => {
    const modifiedTarget = {
      name: restProps.name,
      value,
    };
    const modifiedEvt = Object.assign({}, evt, {
      currentTarget: modifiedTarget,
      target: modifiedTarget,
    });
    onChange?.(modifiedEvt);
  };

  return (
    <Fieldset
      fullWidth={fullWidth}
      helpText={helpText}
      invalidText={invalidText}
      label={label}
      size={size}
      css={`
        ${fieldsetCss}
        ${customCSSPropertiesRule(restProps)}
      `}
    >
      <Grid
        id={id}
        cols="1fr max-content 1fr"
        alignItems="center"
        gap={2}
        css={`
          width: 100%;
        `}
      >
        <Select
          options={wholeNumberOptions}
          size={size}
          placeholder={'-'}
          invalid={invalid}
          {...(values[0] && {
            defaultValue: values[0],
          })}
          onChange={(evt) => {
            handleOnChange(evt, `${evt.currentTarget.value}.${values[1]}`);
          }}
          css={`
            width: 100%;
            min-width: 0;
          `}
        />
        <span>:</span>
        <Select
          options={fractionalNumberOptions}
          size={size}
          placeholder={'-'}
          invalid={invalid}
          {...(values[1] && {
            defaultValue: values[1],
          })}
          onChange={(evt) => {
            handleOnChange(evt, `${values[0]}.${evt.currentTarget.value}`);
          }}
          css={`
            width: 100%;
            min-width: 0;
          `}
        />
      </Grid>
    </Fieldset>
  );
};
