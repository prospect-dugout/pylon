import {FunctionalComponent, JSX, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import {css} from 'styled-components';
import {
  CustomCSSProperties,
  customCSSPropertiesRule,
  nonCustomCSSProps,
} from '../../lib/custom-css-properties-rule';
import {Typography} from '../Typography';

type ImgCustomProps = CustomCSSProperties<{
  placeholder?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  preload?: boolean;
  sizing?:
    | 'contain'
    | 'cover'
    | 'auto'
    | 'revert'
    | 'unset'
    | 'inherit'
    | 'initial'
    | 'revert-layer';
}>;

export type ImgProps = Omit<
  JSX.HTMLAttributes<HTMLImageElement>,
  keyof ImgCustomProps
> &
  ImgCustomProps;

export const Img: FunctionalComponent<ImgProps> = ({
  placeholder,
  position = 'center',
  preload = true,
  sizing = 'contain',
  src,
  ...restProps
}: ImgProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (preload && src) {
      setError(false);
      const image = new Image();
      image.onload = () => {
        setError(false);
        setLoaded(true);
      };
      image.onerror = () => {
        setError(true);
      };
      image.src = src as string;
    } else {
      setError(false);
    }
  }, [src, preload]);

  const displyPlaceholder = (error || !src) && placeholder;

  return (
    <div
      css={`
        background-color: var(--gray10);
        background-image: url(${src});
        background-position: ${position};
        background-repeat: no-repeat;
        background-size: ${sizing};
        display: inline-flex;
        height: auto;
        width: auto;
        opacity: ${loaded ? 1 : 0};
        transition: opacity 0.5s ease;
        ${displyPlaceholder &&
        css`
          align-items: center;
          display: flex;
          justify-content: center;
        `}
        ${customCSSPropertiesRule(restProps)}
      `}
      {...nonCustomCSSProps(restProps)}
    >
      {displyPlaceholder && (
        <Typography variant="body2" weight="medium" css-color="var(--fg-muted)">
          {placeholder}
        </Typography>
      )}
    </div>
  );
};
