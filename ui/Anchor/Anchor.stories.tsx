import {Fragment, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Anchor} from './Anchor';

export default {
  title: 'Anchor',
  component: Anchor,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={2} alignItems="flex-start">
    <Anchor href="#" variant="unstyled">
      unstyled
    </Anchor>

    <Anchor href="#" variant="default">
      default
    </Anchor>

    <Anchor href="#" variant="muted">
      muted
    </Anchor>

    <Anchor href="#" variant="hoverUnderline">
      hoverUnderline
    </Anchor>

    <Anchor href="#" variant="hoverBg">
      hoverBg
    </Anchor>

    <Anchor href="#" variant="underline">
      underline
    </Anchor>

    <Anchor href="#" variant="primary">
      primary
    </Anchor>

    <Anchor href="#" variant="secondary">
      secondary
    </Anchor>
  </Stack>
);

export const Default = Template.bind({});
