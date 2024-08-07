import {ComponentChildren, FunctionalComponent, h} from 'preact';
import styled from 'styled-components';
import {Tooltip} from '../Tooltip';

type Props = {
  children?: ComponentChildren;
  fullWidth?: boolean;
  helpText?: string | ComponentChildren;
  invalidText?: string;
  label?: string | ComponentChildren;
  labelFor?: string | h.JSX.SignalLike<string | undefined> | undefined;
  showInvalidTextInTooltip?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export type {Props as FieldsetProps};

export const Fieldset: FunctionalComponent<Props> = ({
  children,
  fullWidth = false,
  helpText,
  invalidText,
  label,
  labelFor,
  showInvalidTextInTooltip = false,
  size = 'md',
  ...restProps
}: Props) => {
  return (
    <StyledFieldset $fullWidth={fullWidth} {...restProps}>
      {label && (
        <StyledLabel for={labelFor} $size={size}>
          {label}
        </StyledLabel>
      )}
      {showInvalidTextInTooltip && !!invalidText ? (
        <Tooltip
          text={invalidText}
          severity="error"
          keepOpenedOnChildFocus
          overlayPosition={{
            horizontalAlign: 'right',
            verticalOffset: 2,
          }}
        >
          {children}
        </Tooltip>
      ) : (
        children
      )}
      {!!invalidText && !showInvalidTextInTooltip && (
        <StyledInvalidText $size={size}>{invalidText}</StyledInvalidText>
      )}
      {!!helpText && <StyledHelpText $size={size}>{helpText}</StyledHelpText>}
    </StyledFieldset>
  );
};

const StyledFieldset = styled.fieldset<{$fullWidth: Props['fullWidth']}>`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap-2);
  min-width: 0;
  width: ${(p) => (p.$fullWidth ? '100%' : '')};
`;

const StyledLabel = styled.label<{$size: Props['size']}>`
  font-size: var(--input-font-size-${(p) => p.$size});
  font-weight: var(--font-weight-bold);
  width: 100%;
`;

const StyledInvalidText = styled.p<{$size: Props['size']}>`
  color: var(--error-dark);
  font-size: var(--input-font-size-${(p) => p.$size});
  font-weight: var(--font-weight-bold);
`;

const StyledHelpText = styled.p<{$size: Props['size']}>`
  color: var(--fg-muted);
  font-size: var(--input-font-size-${(p) => p.$size});
  font-weight: var(--font-weight-medium);
`;
