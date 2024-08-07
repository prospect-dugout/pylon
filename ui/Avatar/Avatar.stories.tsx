import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Avatar} from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={2}>
    <Avatar size="sm" email="aoo@bar.com" />
    <Avatar email="foo@bar.com" />
    <Avatar
      size="lg"
      src="https://cramgaming.com/wp-content/uploads/2017/06/Xbox-Avatars.jpg"
    />
    <Avatar size="xl" email="aoo@bar.com" />
  </Stack>
);

export const Default = Template.bind({});
