import {ComponentChildren, FunctionalComponent, createContext, h} from 'preact';
import {useState} from 'preact/hooks';
import {Snackbar, type SnackbarProps} from './Snackbar';

type OpenSnackbarProps = Pick<
  SnackbarProps,
  | 'anchorOrigin'
  | 'severity'
  | 'autoHideDuration'
  | 'noIcon'
  | 'customImage'
  | 'noCloseButton'
>;

type Context = {
  openSnackbar: (options: {
    content: string | ComponentChildren;
    snackbarProps?: OpenSnackbarProps;
  }) => void;
  closeSnackbar: () => void;
};

export const SnackbarContext = createContext<Context>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openSnackbar: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeSnackbar: () => {},
});

const DEFAULT_SNACKBAR_PROPS: OpenSnackbarProps = {
  anchorOrigin: {vertical: 'top', horizontal: 'center'},
  severity: 'success',
  autoHideDuration: null,
  noIcon: false,
  noCloseButton: false,
};

type Props = {
  children: ComponentChildren;
};

export const SnackbarProvider: FunctionalComponent<Props> = ({
  children,
}: Props) => {
  const [snackbarState, setSnackbarState] = useState({
    opened: false,
    content: null as string | ComponentChildren | null,
    snackbarProps: undefined as OpenSnackbarProps | undefined,
  });

  const openSnackbar: Context['openSnackbar'] = ({content, snackbarProps}) => {
    setSnackbarState({opened: true, content, snackbarProps});
  };

  const closeSnackbar: Context['closeSnackbar'] = () => {
    setSnackbarState({
      opened: false,
      content: undefined,
      snackbarProps: undefined,
    });
  };

  return (
    <SnackbarContext.Provider value={{openSnackbar, closeSnackbar}}>
      {children}
      {snackbarState.opened && (
        <Snackbar
          opened={snackbarState.opened}
          setOpened={closeSnackbar}
          {...{...DEFAULT_SNACKBAR_PROPS, ...snackbarState.snackbarProps}}
        >
          {snackbarState.content}
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
};
