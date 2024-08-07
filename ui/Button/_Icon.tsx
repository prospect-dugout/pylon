import {FunctionalComponent, JSX, h} from 'preact';
import {css} from 'styled-components';
import {Icon, IconName} from '../Icon';
import {ButtonProps} from './Button';

type Props = {
  buttonSize: NonNullable<ButtonProps['buttonSize']>;
  direction: 'leading' | 'trailing';
  icon?: IconName | JSX.Element;
} & Pick<ButtonProps, 'iconSize' | 'iconCss'>;

export const Button_Icon: FunctionalComponent<Props> = ({
  buttonSize,
  direction,
  icon,
  iconCss,
  iconSize,
}: Props) => {
  if (!icon) return null;
  const size =
    typeof iconSize === 'number' ? `${iconSize}px` : sizeMap[buttonSize];

  const commonStyles = css`
    ${direction === 'leading'
      ? `margin-right: ${marginMap[buttonSize]};`
      : `margin-left: ${marginMap[buttonSize]};`}
    & svg {
      height: ${size};
      width: ${size};
    }
  `;

  if (typeof icon === 'string') {
    return (
      <Icon
        icon={icon as IconName}
        css={`
          ${commonStyles}
          ${iconCss}
        `}
      />
    );
  } else {
    return (
      <div
        css={`
          display: inline-flex;
          ${commonStyles}
        `}
      >
        {icon}
      </div>
    );
  }
};

const marginMap: {[_key in NonNullable<ButtonProps['buttonSize']>]: string} = {
  sm: 'var(--gap-1-5)',
  md: 'var(--gap-2)',
  lg: 'var(--gap-2)',
};

const sizeMap: {[_key in NonNullable<ButtonProps['buttonSize']>]: string} = {
  sm: '1.125rem',
  md: '1.25rem',
  lg: '1.5rem',
};
