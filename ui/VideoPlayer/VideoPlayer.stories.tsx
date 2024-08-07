import {h} from 'preact';
import {css} from 'styled-components';
import {ProvidersDecorator} from '.storybook/Providers';
import {VideoPlayer} from './VideoPlayer';

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <VideoPlayer
    containerCss={css`
      width: 800px;
      height: auto;
    `}
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  />
);

export const Default = Template.bind({});
