import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Snackbar} from './Snackbar';
import {SnackbarProvider} from './SnackbarProvider';

export default {
  title: 'Snackbar',
  component: Snackbar,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <SnackbarProvider>
    <Snackbar
      severity="success"
      opened
      setOpened={() => false}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      Success
    </Snackbar>
    <Snackbar
      severity="info"
      opened
      setOpened={() => false}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      info
    </Snackbar>
    <Snackbar
      severity="error"
      opened
      setOpened={() => false}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      Error
    </Snackbar>
    <Snackbar
      severity="warning"
      opened
      setOpened={() => false}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      Warning
    </Snackbar>
  </SnackbarProvider>
);

export const Default = Template.bind({});
