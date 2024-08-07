import {
  ComponentChildren,
  Fragment,
  FunctionalComponent,
  JSX,
  Ref,
  h,
} from 'preact';
import {forwardRef} from 'preact/compat';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Anchor} from '../Anchor';
import {Icon, IconName} from '../Icon';
import {Button_Icon} from './_Icon';
import {ButtonVariant, variantsStyles} from './variant-styles';

type CustomVariant = (
  props: Pick<ButtonProps, 'buttonSize' | 'iconTrailing' | 'iconLeading'>,
) => ReturnType<typeof css>;

export type ButtonProps = CustomCSSProperties<{
  buttonSize?: 'sm' | 'md' | 'lg';
  children?: ComponentChildren;
  customVariant?: CustomVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  iconCss?: ReturnType<typeof css>;
  iconLeading?: IconName | JSX.Element;
  iconSize?: number;
  iconTrailing?: IconName | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  withArrow?: boolean;
}>;

type Props = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'icon'> & ButtonProps;

export const Button: FunctionalComponent<Props> = forwardRef(
  (
    {
      buttonSize = 'md',
      children,
      customVariant,
      disabled = false,
      fullWidth = false,
      href,
      iconCss,
      iconLeading,
      iconSize,
      iconTrailing,
      type = 'button',
      variant = 'default',
      withArrow = false,
      ...restProps
    }: Props,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const content = (
      <>
        <Button_Icon
          icon={iconLeading}
          direction="leading"
          buttonSize={buttonSize}
          iconCss={iconCss}
          iconSize={iconSize}
        />
        {children}
        <Button_Icon
          icon={iconTrailing}
          direction="trailing"
          buttonSize={buttonSize}
          iconCss={iconCss}
          iconSize={iconSize}
        />
        {withArrow ? (
          <Icon
            icon="chevron-down"
            size="1rem"
            css={`
              & svg {
                margin-left: var(--gap-2);
              }
            `}
          />
        ) : null}
      </>
    );

    const commonStyles = css`
      align-items: center;
      cursor: pointer;
      display: inline-flex;
      text-align: left;
      text-decoration: none;
      user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: ${fullWidth ? '100%' : 'auto'};

      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid var(--input-outline-color);
      }

      &[disabled] {
        cursor: default;
        filter: grayscale(1) opacity(0.7);
        pointer-events: none;
      }

      ${customVariant
        ? customVariant({buttonSize, iconTrailing, iconLeading})
        : variant !== 'unstyled'
          ? css`
              border-radius: var(--button-radius-${buttonSize});
              font-size: var(--button-font-size-${buttonSize});
              font-weight: var(--button-weight-${buttonSize});
              height: var(--button-height-${buttonSize});
              justify-content: center;
              padding: var(--button-padding-${buttonSize});
              ${variantsStyles[variant]};
            `
          : null}
      ${customCSSPropertiesRule(restProps)}
    `;

    if (href) {
      return (
        <Anchor
          ref={ref}
          type={type}
          variant="unstyled"
          href={href}
          disabled={disabled}
          css={commonStyles}
          {...(nonCustomCSSProps(restProps) as any)}
        >
          {content}
        </Anchor>
      );
    } else {
      return (
        <button
          ref={ref}
          type={type}
          disabled={disabled}
          css={commonStyles}
          {...nonCustomCSSProps(restProps)}
        >
          {content}
        </button>
      );
    }
  },
);
