import {JSX, h} from 'preact';
import {useLocation} from 'preact-iso';

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
  activeClass?: string;
  activeClassName?: string;
  class?: string;
  className?: string;
}

export const Link = ({
  class: c,
  className,
  activeClass,
  activeClassName,
  ...props
}: Props) => {
  const inactive = [c, className].filter(Boolean).join(' ');
  const active = [c, className, activeClass, activeClassName]
    .filter(Boolean)
    .join(' ');
  const matches = useLocation().url === props.href;

  return <a {...props} class={matches ? active : inactive} />;
};
