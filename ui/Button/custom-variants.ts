import {css} from 'styled-components';
import {ButtonProps} from './Button';

export const menuItemVariant: ButtonProps['customVariant'] = ({
  buttonSize,
  iconTrailing,
}) => css`
  align-items: center;
  border-radius: var(--radius-1-5);
  color: var(--fg-default);
  flex-shrink: 0;
  font-size: var(--button-font-size-${buttonSize});
  height: var(--button-height-${buttonSize});
  padding: var(--button-padding-${buttonSize});

  ${iconTrailing &&
  css`
    justify-content: space-between;
  `};

  & svg {
    color: var(--fg-muted);
    height: 1.25rem;
    width: 1.25rem;
  }

  &:hover {
    background: var(--bg-minimal);
  }
`;
