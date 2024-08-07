import {ComponentChildren, FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import {ToastMessage} from '../ToastMessage';

type Props = {
  children: ComponentChildren;
  onSubmit: () => void;
};

export type FormProps = Props;

export const Form: FunctionalComponent<Props> = ({
  children,
  onSubmit,
  ...props
}: Props) => {
  const [networkError, setNetworkError] = useState<any>(null);

  return (
    <form
      onSubmit={(evt: any) => {
        evt.preventDefault();
        try {
          onSubmit();
        } catch (error: any) {
          setNetworkError(error);
        }
      }}
      {...props}
    >
      {!!networkError?.message && (
        <ToastMessage severity="error" css-mb={6}>
          {networkError.message}
        </ToastMessage>
      )}
      {children}
    </form>
  );
};
