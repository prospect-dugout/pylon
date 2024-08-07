import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Skeleton} from './Skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  decorators: [ProvidersDecorator],
};

const Template = () => {
  return <Skeleton width="300px" animation height="300px" variant="circular" />;
};

export const Default = Template.bind({});
