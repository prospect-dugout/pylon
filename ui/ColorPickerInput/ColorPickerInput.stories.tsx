import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {ColorPickerInput} from './ColorPickerInput';

export default {
  title: 'ColorPickerInput',
  component: ColorPickerInput,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <ColorPickerInput />;

export const Default = Template.bind({});
