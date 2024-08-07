import {ComponentChildren, FunctionalComponent, JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';

type IconCustomProps = CustomCSSProperties<{
  children: ComponentChildren;
  size?: number | string;
}>;

export type IconElementProps = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  keyof IconCustomProps
> &
  IconCustomProps;

export const IconElement: FunctionalComponent<IconElementProps> = forwardRef(
  ({children, size, ...props}: IconElementProps, ref) => {
    const _size = typeof size === 'number' ? `${size}px` : size;
    return (
      <div
        ref={ref}
        css={`
          display: inline-flex;
          ${_size &&
          `
            & svg {
              height: ${_size};
              width: ${_size};
            }
          `}
          ${customCSSPropertiesRule(props)}
        `}
        {...nonCustomCSSProps(props)}
      >
        {children}
      </div>
    );
  },
);
