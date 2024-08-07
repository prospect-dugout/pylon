import {Fragment, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from './Stack';

export default {
  title: 'Stack',
  component: Stack,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Fragment>
    <Stack
      css={`
        justify-content: space-between;
        padding: 5rem;
        width: 100%;
      `}
    >
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Stack>
  </Fragment>
);

export const Default = Template.bind({});
