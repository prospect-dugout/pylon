import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {InputVideo} from './InputVideo';

export default {
  title: 'InputVideo',
  component: InputVideo,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <div
    css={`
      margin: auto;
      max-width: 740px;
      padding: var(--gap-10);
    `}
  >
    <InputVideo />
  </div>
);

export const Default = Template.bind({});
