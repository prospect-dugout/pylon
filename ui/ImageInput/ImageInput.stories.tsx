import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {ImageInput} from './ImageInput';

export default {
  title: 'ImageInput',
  component: ImageInput,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <ImageInput />;

export const Default = Template.bind({});
