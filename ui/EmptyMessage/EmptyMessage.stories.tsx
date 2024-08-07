import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {EmptyMessage} from './EmptyMessage';

export default {
  title: 'EmptyMessage',
  component: EmptyMessage,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <EmptyMessage>Empty message</EmptyMessage>;

export const Default = Template.bind({});
