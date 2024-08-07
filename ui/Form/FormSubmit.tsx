import {FunctionalComponent, JSX, h} from 'preact';
import {Gap} from '../../lib';
import {Button, ButtonProps} from '../Button';
import {Loading} from '../Loading';

type FormSubmitProps = ButtonProps & {
  submitting?: boolean;
  value?: string;
};

type Props = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'default'> &
  FormSubmitProps;

export const FormSubmit: FunctionalComponent<Props> = ({
  value,
  submitting,
  children,
  ...props
}: Props) => {
  const loadingMargin: {
    [key: string]: Gap[];
  } = {
    sm: [0, 1, 0, 2],
    md: [0, 0, 0, 3],
    lg: [0, 0, 0, 3],
  };

  return (
    <Button type="submit" disabled={submitting} variant="primary" {...props}>
      {value || children}
      {submitting && (
        <Loading
          size="sm"
          css-color="var(--white)"
          css-m={loadingMargin[props.buttonSize || 'md']}
        />
      )}
    </Button>
  );
};
