import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Input} from '../Input';
import {Select} from '../Select';
import {Stack} from '../Stack';
import {Fieldset} from './Fieldset';
import {Form} from './Form';
import {FormDecimalSelect} from './FormDecimalSelect';
import {FormSubmit} from './FormSubmit';

export default {
  title: 'Form',
  component: Form,
  decorators: [ProvidersDecorator],
};

export const FormDecimalSelect_ = (args: any) => (
  <Stack direction="column" gap={6}>
    <FormDecimalSelect label="FormDecimalSelect" />
    <FormDecimalSelect
      label="FormDecimalSelect"
      minWholeNumber={2}
      maxWholeNumber={6}
      minFractionalNumber={6}
      maxFractionalNumber={12}
    />
  </Stack>
);

export const Fieldset_ = (args: any) => (
  <Stack direction="column" gap={16} alignItems="flex-start">
    <Fieldset
      label="Fieldset label sm"
      labelFor="sm"
      size="sm"
      helpText="Please, understand this is a help text."
    >
      <Input id="sm" size="sm" />
    </Fieldset>
    <Fieldset
      label="Fieldset label md (fullWidth)"
      labelFor="md"
      size="md"
      helpText="Please, understand this is a help text."
      fullWidth
    >
      <Select
        id="md"
        size="md"
        options={[
          {label: 'Option 1', value: '1'},
          {label: 'Option 2', value: '2'},
          {label: 'Option 3', value: '3'},
        ]}
      />
    </Fieldset>
    <Fieldset
      label="Fieldset label lg"
      labelFor="lg"
      size="lg"
      invalidText="You wrote stuff wrong."
      showInvalidTextInTooltip
      helpText="Please, understand this is a help text."
    >
      <Input id="lg" size="lg" invalid />
    </Fieldset>
  </Stack>
);

export const FormSubmit_ = (args: any) => (
  <Stack direction="row" gap={6}>
    <FormSubmit value="Submit" buttonSize="sm" submitting />
    <FormSubmit value="Submit" submitting />
    <FormSubmit value="Submit" buttonSize="lg" submitting />
  </Stack>
);
