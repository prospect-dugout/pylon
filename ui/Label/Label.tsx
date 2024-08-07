import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {Typography} from '../Typography';

type Props = {
  children: ComponentChildren;
};

export const Label: FunctionalComponent<Props> = ({
  children,
  ...props
}: Props) => {
  return (
    <Typography
      weight="bold"
      tagName="label"
      css={`
        display: block;
        margin-bottom: var(--gap-1);
      `}
      {...props}
    >
      {children}
    </Typography>
  );
};
