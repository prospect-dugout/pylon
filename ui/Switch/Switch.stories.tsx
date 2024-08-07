import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Switch} from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <Switch label="Switch" {...args} />;

export const Default = Template.bind({});
