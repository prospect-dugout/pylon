import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {css} from 'styled-components';
import {mediaQuery} from '../../lib';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Icon} from '../Icon';
import {Tooltip, TooltipProps} from '../Tooltip';

type Props = CustomCSSProperties<{
  children?: ComponentChildren;
  cols?: string;
  contentCss?: ReturnType<typeof css>;
  title?: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}>;

export const DescriptionListItem: FunctionalComponent<Props> = ({
  children,
  cols,
  contentCss,
  title,
  tooltipProps,
  ...props
}: Props) => {
  return (
    <dl
      css={`
        display: grid;
        gap: var(--gap-4);
        grid-template-columns: ${cols ? cols : '35% 1fr'};
        padding: var(--gap-3) var(--gap-6);
        ${mediaQuery(
          'md>',
          css`
            grid-template-columns: ${cols ? cols : '20% 1fr'};
          `,
        )}
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    >
      <dt
        css={`
          align-items: center;
          color: var(--fg-subtle);
          display: flex;
        `}
      >
        {title}
        {!!tooltipProps && (
          <Tooltip
            overlayPosition={{
              horizontalAlign: 'right',
              horizontalOffset: 6,
              noHorizontalOverlap: true,
              noVerticalOverlap: false,
              verticalAlign: 'bottom',
              verticalOffset: -16,
            }}
            {...tooltipProps}
          >
            <Icon icon="info-circle-outline" css-ml={2} size={20} />
          </Tooltip>
        )}
      </dt>
      <dd css={contentCss}>{children}</dd>
    </dl>
  );
};
