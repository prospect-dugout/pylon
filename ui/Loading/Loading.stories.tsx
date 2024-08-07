import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Loading} from './Loading';

export default {
  title: 'Loading',
  component: Loading,
  decorators: [ProvidersDecorator],
};

const Template = () => {
  return <Loading size="lg" />;
};

export const Default = Template.bind({});
