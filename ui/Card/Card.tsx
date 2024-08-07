import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type Props = CustomCSSProperties<{
  children?: ComponentChildren;
  noBorder?: boolean;
}>;

export const Card: FunctionalComponent<Props> = ({
  children,
  noBorder,
  ...restProps
}: Props) => {
  return (
    <div
      css={`
        background: var(--card-bg, var(--bg-surface));
        border-radius: var(--radius-3);
        border: ${noBorder ? '' : '0.0625rem solid var(--border-muted)'};
        overflow: hidden;
        padding: var(--gap-6);
        ${customCSSPropertiesRule(restProps)}
      `}
      {...nonCustomCSSProps(restProps)}
    >
      {children}
    </div>
  );
};
