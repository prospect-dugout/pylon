import {FunctionalComponent, JSX, h} from 'preact';
import {css} from 'styled-components';
import {computedStyleValue} from '../../lib/css';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Icon, IconName} from '../Icon';
import {Skeleton} from '../Loading';
import {Stack} from '../Stack';
import {Tooltip, TooltipProps} from '../Tooltip';
import {Typography} from '../Typography';

type Props = CustomCSSProperties<{
  iconColor?: string;
  icon?: IconName | JSX.Element;
  loading?: boolean;
  title: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
  value: string | number;
}>;

export const Stat: FunctionalComponent<Props> = ({
  iconColor = 'inherit',
  icon,
  loading,
  title,
  tooltipProps,
  value,
  ...props
}: Props) => {
  return (
    <div
      css={`
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      <Stack direction="row" justifyContent="space-between" css-mb={4}>
        {!!icon && (
          <div
            css={`
              border-radius: var(--radius-2);
              display: inline-flex;
              padding: var(--gap-2);
              ${iconColor &&
              css`
                color: ${iconColor};
                background: ${computedStyleValue(iconColor) + '1A'};
              `}
            `}
          >
            {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
          </div>
        )}
        <Typography variant="h5" tagName="div">
          {loading ? (
            <Skeleton
              width="80px"
              height="24px"
              css={`
                margin-top: var(--gap-2);
              `}
            />
          ) : (
            value
          )}
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        tagName="div"
        css-color="var(--fg-muted)"
        css={`
          display: flex;
          align-items: center;
        `}
      >
        {title}
        {tooltipProps && (
          <Tooltip {...tooltipProps}>
            <Icon
              icon="info-circle-outline"
              css-ml={1}
              css-color="var(--fg-muted)"
              size={20}
            />
          </Tooltip>
        )}
      </Typography>
    </div>
  );
};
