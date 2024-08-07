import {Fragment, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Icon} from '../Icon';
import {Stack} from '../Stack';
import {Typography} from '../Typography';
import {Input} from './Input';

export default {
  title: 'Input',
  component: Input,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <>
    <Stack direction="column" alignItems="center" gap={6} css-mt={10}>
      <Typography variant="h6">Types</Typography>
      <Stack direction="column" alignItems="center" gap={4}>
        <Input placeholder="Write here..." />
        <Input placeholder="Write here... (Disabled)" disabled />
        <Input value="invalid value" invalid />
        <Input
          placeholder="With startAdornment"
          startAdornment={<Icon icon="help-circle-outline" size={16} />}
        />
        <Input placeholder="With endAdornment" endAdornment=".domain.com" />
        <Input
          disabled
          placeholder="With endAdornment"
          endAdornment=".domain.com"
        />
      </Stack>
      <Typography variant="h6">Sizes</Typography>
      <Stack direction="column" alignItems="center" gap={4}>
        <Input placeholder="This is sm" size="sm" />
        <Input placeholder="This is md" size="md" />
        <Input placeholder="This is lg" size="lg" />
      </Stack>
      <Typography variant="h6">Variant search</Typography>
      <Stack direction="column" alignItems="center" gap={4}>
        <Input
          placeholder="Search"
          size="sm"
          variant="search"
          type="search"
          startAdornment={<Icon icon="search" size={16} />}
        />
        <Input
          placeholder="Search"
          size="md"
          variant="search"
          type="search"
          startAdornment={<Icon icon="search" size={16} css-pl={1} />}
        />
        <Input
          placeholder="Search"
          size="lg"
          variant="search"
          type="search"
          startAdornment={<Icon icon="search" size={16} css-pl={2} />}
        />
      </Stack>
    </Stack>
  </>
);

export const Default = Template.bind({});
