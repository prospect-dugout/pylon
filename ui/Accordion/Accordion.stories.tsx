import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Accordion} from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Accordion title="Accordion">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
    tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
    doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
    quidem quibusdam.
  </Accordion>
);

export const Default = Template.bind({});
