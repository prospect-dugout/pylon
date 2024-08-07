import {FunctionalComponent, h} from 'preact';
import {Typography, TypographyProps} from '../Typography';

interface Props extends TypographyProps {
  disabled?: boolean;
  position: 'start' | 'end';
}

export const Input_Adorment: FunctionalComponent<Props> = ({
  disabled,
  position,
  ...props
}: Props) => {
  return (
    <Typography
      className="input-adornment"
      css={`
        align-items: center;
        color: ${disabled ? 'var(--fg-disabled)' : 'var(--fg-subtle)'};
        display: flex;
        height: 100%;
        justify-content: center;
        padding: 0 var(--gap-3);
        pointer-events: none;
        ${position === 'start'
          ? 'padding: 0 0 0 var(--gap-3);'
          : 'padding: 0 var(--gap-3) 0 0;'}/*         ${position === 'start'
          ? 'border-right: 1px solid var(--input-border-color)'
          : 'border-left: 1px solid var(--input-border-color)'}
 */
      `}
      {...props}
    />
  );
};
