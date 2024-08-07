import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Label} from './Label';

export default {
  title: 'Label',
  component: Label,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <Label>Text</Label>;

export const Default = Template.bind({});
