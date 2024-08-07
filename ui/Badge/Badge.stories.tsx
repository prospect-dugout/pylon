import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Badge} from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={4} alignItems="flex-start">
    <Badge variant="success" withDot>
      Success
    </Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="success-dark">Success dark</Badge>
    <Badge variant="error-dark">Error dark</Badge>
    <Badge variant="warning-dark">Warning dark</Badge>
    <Badge variant="info-dark">Info dark</Badge>
  </Stack>
);

export const Default = Template.bind({});
