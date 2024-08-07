import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Stack} from '../Stack';
import {Checkbox} from './Checkbox';
import {CheckboxGroup} from './CheckboxGroup';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Stack direction="column" gap={4}>
    <Checkbox label="This is a label" defaultChecked />
    <Checkbox disabled label="disabled" />

    <Stack direction="column">
      Group
      <CheckboxGroup
        maxOptions={2}
        options={[
          {label: 'Option 1', value: '1'},
          {label: 'Option 2', value: '2'},
          {label: 'Option 3', value: '3'},
        ]}
      />
    </Stack>
  </Stack>
);

export const Default = Template.bind({});
