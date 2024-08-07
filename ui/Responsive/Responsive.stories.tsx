import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Responsive} from './Responsive';

export default {
  title: 'Responsive',
  component: Responsive,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Responsive>
    <div
      css={`
        background: red;
        width: 100%;
        height: 100px;
      `}
    />
  </Responsive>
);

export const Default = Template.bind({});
