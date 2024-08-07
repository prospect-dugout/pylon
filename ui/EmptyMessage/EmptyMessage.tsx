import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {Typography} from '../Typography';

type Props = {
  children: ComponentChildren;
};

export const EmptyMessage: FunctionalComponent<Props> = ({
  children,
  ...restProps
}: Props) => {
  return (
    <Typography
      variant="body2"
      weight="medium"
      css-color="var(--fg-muted)"
      css={`
        text-align: center;
        padding: var(--gap-2) 0;
      `}
      {...restProps}
    >
      {children}
    </Typography>
  );
};
