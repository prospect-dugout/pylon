import {FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

export type NativeSelectProps = CustomCSSProperties<{
  defaultValue?: string;
  id?: string;
  invalid?: boolean;
  options?: Array<{
    [key: string]: string;
  }>;
  propertyForLabel?: string;
}>;

type Props = JSX.HTMLAttributes<HTMLSelectElement> & NativeSelectProps;

export const NativeSelect: FunctionalComponent<Props> = forwardRef(
  (
    {
      id,
      invalid = false,
      defaultValue,
      propertyForLabel = 'label',
      options = [],
      ...props
    }: Props,
    ref: any,
  ) => {
    return (
      <select
        id={id}
        ref={ref}
        css={`
          background: var(--input-bg);
          border: ${invalid
            ? '1px solid var(--input-outline-error-color)'
            : '1px solid var(--input-border-color)'};
          border-radius: var(--input-radius-md);
          color: var(--input-color);
          display: inline-block;
          height: var(--input-height-md);
          outline: 0;
          padding: var(--input-padding-md);
          text-decoration: none;
          text-overflow: ellipsis;
          &:focus {
            border-color: ${invalid
              ? 'var(--input-outline-error-color)'
              : 'var(--input-outline-color)'};
            box-shadow: inset 0 0 0 1px
              ${invalid
                ? 'var(--input-outline-error-color)'
                : 'var(--input-outline-color)'};
          }
          ${customCSSPropertiesRule(props)}
        `}
        {...nonCustomCSSProps(props)}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={defaultValue === option.value}
          >
            {option[propertyForLabel]}
          </option>
        ))}
      </select>
    );
  },
);
