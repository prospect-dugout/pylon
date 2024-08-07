import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Img} from './Img';

export default {
  title: 'Img',
  component: Img,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Img
    src="https://cramgaming.com/wp-content/uploads/2017/06/Xbox-Avatars.jpg"
    sizing="cover"
    css={`
      width: 200px;
      height: 200px;
    `}
  />
);

export const Default = Template.bind({});
