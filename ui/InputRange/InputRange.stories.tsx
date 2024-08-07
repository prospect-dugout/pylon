import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {InputRange} from './InputRange';

export default {
  title: 'InputRange',
  component: InputRange,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack
    direction="column"
    gap={20}
    css={`
      margin: 0 auto;
      max-width: 500px;
      padding: var(--gap-10);
    `}
  >
    <InputRange min={0} max={10.15647} minLength={1} step={0.01} />
  </Stack>
);

export const Default = Template.bind({});
