import {Fragment, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Typography} from '../Typography';
import {IconButton} from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Variants</Typography>
      <Stack alignItems="center" gap={4}>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="unstyled" withArrow />
          unstyled
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="default" />
          default
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="muted" />
          muted
        </Stack>
      </Stack>
      <Stack alignItems="center" gap={4}>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="primary" />
          primary
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="secondary" />
          secondary
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="primary-soft" />
          primary-soft
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="secondary-soft" />
          secondary-soft
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="error" />
          error
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="error-soft" />
          error-soft
        </Stack>
      </Stack>
      <Stack alignItems="center" gap={4}>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="outline" />
          outline
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="outline-muted" />
          outline-muted
        </Stack>
        <Stack alignItems="center" direction="column" gap={1}>
          <IconButton icon="info-circle-outline" variant="outline-primary" />
          outline-primary
        </Stack>
      </Stack>
    </Stack>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Sizes</Typography>
      <Stack alignItems="center" gap={4}>
        <IconButton icon="info-circle-outline" buttonSize="sm" />
        <IconButton icon="info-circle-outline" buttonSize="md" />
        <IconButton icon="info-circle-outline" buttonSize="lg" />
      </Stack>
    </Stack>
  </>
);

export const Default = Template.bind({});
