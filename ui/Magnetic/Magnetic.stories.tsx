import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Magnetic} from './Magnetic';

export default {
  title: 'Magnetic',
  component: Magnetic,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Magnetic>
    <div
      css={`
        height: 100px;
        width: 100px;
        background-color: red;
        border-radius: 50%;
      `}
    />
  </Magnetic>
);

export const Default = Template.bind({});
