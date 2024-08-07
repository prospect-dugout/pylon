import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {TabMenu} from './TabMenu';

export default {
  title: 'TabMenu',
  component: TabMenu,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={20} alignItems="center">
    <TabMenu
      noAnimation
      items={[
        {content: 'Profile', href: ''},
        {content: 'Invites', href: '/invites'},
        {content: 'Account settings', href: '/account-settings'},
      ]}
    />

    <TabMenu
      direction="column"
      items={[
        {content: 'Profile', href: ''},
        {content: 'Invites', href: '/'},
        {content: 'Account settings', href: '/'},
      ]}
    />
  </Stack>
);

export const Default = Template.bind({});
