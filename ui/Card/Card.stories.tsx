import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Card} from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => <Card>This is a card</Card>;

export const Default = Template.bind({});
