import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {SegmentedControls} from './SegmentedControls';

export default {
  title: 'SegmentedControls',
  component: SegmentedControls,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={4} alignItems="flex-start">
    <SegmentedControls
      segmentWidth={85}
      size="sm"
      items={[
        {title: 'Overview', value: 'overview'},
        {title: 'Projects', value: 'projects'},
        {title: 'About', value: 'about'},
      ]}
    />
    <SegmentedControls
      segmentWidth={75}
      items={[
        {title: 'Upload', value: 'overview'},
        {title: 'Added', value: 'projects'},
      ]}
    />
  </Stack>
);

export const Default = Template.bind({});
