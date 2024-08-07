import {Fragment, FunctionalComponent, JSX, Ref, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Anchor} from '../Anchor';
import {Icon, IconName, IconProps} from '../Icon';
import {IconButtonVariant, variantsStyles} from './variants';

type CustomIconButtonProps = CustomCSSProperties<{
  buttonSize?: 'sm' | 'md' | 'lg';
  href?: string;
  icon: IconName | JSX.Element;
  iconSize?: number | string;
  variant?: IconButtonVariant;
  withArrow?: boolean;
}>;

export type IconButtonProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  keyof CustomIconButtonProps
> &
  CustomIconButtonProps;

export const IconButton: FunctionalComponent<IconButtonProps> = forwardRef(
  (
    {
      buttonSize = 'lg',
      href,
      icon,
      iconSize,
      variant = 'default',
      withArrow = false,
      ...props
    }: IconButtonProps,
    ref: Ref<any>,
  ) => {
    const customIconSize =
      typeof iconSize === 'number' ? `${iconSize}px` : iconSize;

    const styles = css`
      align-items: center;
      cursor: pointer;
      display: inline-flex;
      text-decoration: none;
      user-select: none;

      & *:not(.arrow-icon) svg {
        height: ${customIconSize || `var(--icon-button-size-${buttonSize})`};
        width: ${customIconSize || `var(--icon-button-size-${buttonSize})`};
      }
      ${variant !== 'unstyled' &&
      css`
        border-radius: var(--icon-button-radius-${buttonSize});
        padding: var(--icon-button-padding-${buttonSize});
        transition: all 0.25s ease;
      `}
      ${variantsStyles[variant]}
      &[disabled] {
        cursor: default;
        opacity: 0.6;
        pointer-events: none;
      }

      ${customCSSPropertiesRule(props)}
    `;
    const content = (
      <>
        {typeof icon === 'string' ? (
          <Icon icon={icon as IconProps['icon']} />
        ) : (
          icon
        )}
        {withArrow && (
          <Icon
            icon="chevron-down"
            className="arrow-icon"
            size="1rem"
            css={`
              & svg {
                margin-left: 0.25rem;
              }
            `}
          />
        )}
      </>
    );

    if (href) {
      return (
        <div ref={ref}>
          <Anchor
            type="button"
            href={href}
            css={styles}
            {...nonCustomCSSProps(props)}
          >
            {content}
          </Anchor>
        </div>
      );
    } else {
      return (
        <button
          ref={ref}
          type="button"
          css={styles}
          {...nonCustomCSSProps(props)}
        >
          {content}
        </button>
      );
    }
  },
);
