import {FunctionalComponent, h} from 'preact';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type Props = CustomCSSProperties<{
  direction?: 'row' | 'column';
}>;

export const Divider: FunctionalComponent<Props> = ({
  direction,
  ...props
}: Props) => {
  if (direction === 'row') {
    return (
      <div
        css={`
          width: 0.0625rem;
          height: 100%;
          background: var(--border-muted);
          ${customCSSPropertiesRule(props)}
        `}
        {...nonCustomCSSProps(props)}
      />
    );
  }

  return (
    <div
      css={`
        height: 0.0625rem;
        width: 100%;
        background: var(--border-muted);
        ${customCSSPropertiesRule(props)}
      `}
      {...nonCustomCSSProps(props)}
    />
  );
};
