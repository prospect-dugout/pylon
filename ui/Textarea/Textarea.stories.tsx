import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Textarea} from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <Textarea highlightLinks />;

export const Default = Template.bind({});
