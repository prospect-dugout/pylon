import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Breadcrumbs} from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Breadcrumbs
    items={[
      {title: 'Title 1', href: '/'},
      {title: 'Title 2', href: '/'},
      {title: 'Title 3'},
    ]}
  />
);

export const Default = Template.bind({});
