import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {InputFile} from './InputFile';

export default {
  title: 'InputFile',
  component: InputFile,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <InputFile />;

export const Default = Template.bind({});
