import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Stat} from './Stat';

export default {
  title: 'Stat',
  component: Stat,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={10}>
    <Stat title="Title 1" value="200" />
    <Stat title="Title 2" value="100" />
    <Stat loading title="Loading Title" value={0} />
  </Stack>
);

export const Default = Template.bind({});
