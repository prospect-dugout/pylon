import {Fragment, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Typography} from '../Typography';
import {Button} from './Button';
import {menuItemVariant} from './custom-variants';

export default {
  title: 'Button',
  component: Button,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Variants</Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="unstyled">unstyled</Button>
        <Button variant="default">default</Button>
        <Button variant="muted">muted</Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="outline">outline</Button>
        <Button variant="outline-primary">outline-primary</Button>
        <Button variant="outline-muted">outline-muted</Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="primary">primary</Button>
        <Button variant="primary-soft">primary-soft</Button>
        <Button variant="primary-with-shadow">primary-with-shadow</Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="secondary">secondary</Button>
        <Button variant="secondary-soft">secondary-soft</Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="error">error</Button>
        <Button variant="error-soft">error-soft</Button>
      </Stack>
    </Stack>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Sizes</Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <Button buttonSize="sm">Size sm</Button>
        <Button buttonSize="md">Size md</Button>
        <Button buttonSize="lg">Size lg</Button>
      </Stack>
    </Stack>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Icons</Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <Button buttonSize="sm" iconLeading="close">
          Icon leading
        </Button>
        <Button buttonSize="md" iconTrailing="help-circle-outline">
          Icon trailing
        </Button>
        <Button
          variant="primary"
          buttonSize="lg"
          iconLeading="info-circle-outline"
          withArrow
        >
          Leading withArrow
        </Button>
      </Stack>
    </Stack>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Custom Variants</Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <Button customVariant={menuItemVariant}>menu-item</Button>
      </Stack>
    </Stack>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Disabled</Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="unstyled" disabled>
          unstyled
        </Button>
        <Button variant="default" disabled>
          default
        </Button>
        <Button variant="muted" disabled>
          muted
        </Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="outline" disabled>
          outline
        </Button>
        <Button variant="outline-primary" disabled>
          outline-primary
        </Button>
        <Button variant="outline-muted" disabled>
          outline-muted
        </Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="primary" disabled>
          primary
        </Button>
        <Button variant="primary-soft" disabled>
          primary-soft
        </Button>
        <Button variant="primary-with-shadow" disabled>
          primary-with-shadow
        </Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="secondary" disabled>
          secondary
        </Button>
        <Button variant="secondary-soft" disabled>
          secondary-soft
        </Button>
      </Stack>
      <Stack direction="row" gap={4} alignItems="center">
        <Button variant="error" disabled>
          error
        </Button>
        <Button variant="error-soft" disabled>
          error-soft
        </Button>
      </Stack>
    </Stack>
  </>
);

export const Default = Template.bind({});
