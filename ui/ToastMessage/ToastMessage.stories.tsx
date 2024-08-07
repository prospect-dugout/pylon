import {h} from 'preact';
import {css} from 'styled-components';
import {ProvidersDecorator} from '.storybook/Providers';
import {Button} from '../Button';
import {Stack} from '../Stack';
import {ToastMessage} from './ToastMessage';

export default {
  title: 'ToastMessage',
  component: ToastMessage,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack
    direction="column"
    gap={10}
    css={`
      padding: var(--gap-10);
      max-width: 600px;
      margin: 0 auto;
    `}
  >
    <ToastMessage severity="default">default</ToastMessage>
    <ToastMessage severity="info">info</ToastMessage>
    <ToastMessage severity="warning">warning</ToastMessage>
    <ToastMessage severity="error">error</ToastMessage>
    <ToastMessage severity="success">success</ToastMessage>
    <ToastMessage
      severity="error"
      contentCss={css`
        gap: var(--gap-3);
      `}
      onClickClose={() => {}}
    >
      success lorem ipsum dolor sit amet success lorem ipsum dolor sit amet
      success lorem ipsum dolor sit amet
      <Button variant="error">Sign up</Button>
    </ToastMessage>
    <ToastMessage
      severity="error"
      contentCss={css`
        gap: var(--gap-3);
      `}
      onClickClose={() => {}}
    >
      success lorem ipsum dolor sit amet
      <Button variant="error">Sign up</Button>
    </ToastMessage>
  </Stack>
);

export const Default = Template.bind({});
