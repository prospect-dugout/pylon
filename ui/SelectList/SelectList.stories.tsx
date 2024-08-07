import {h} from 'preact';
import {useState} from 'preact/hooks';
import {ProvidersDecorator} from '.storybook/Providers';
import {Input} from '../Input';
import {Stack} from '../Stack';
import {SelectList} from './SelectList';

export default {
  title: 'SelectList',
  component: SelectList,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <Stack
      direction="column"
      gap={4}
      css={`
        border-radius: var(--radius-2);
        border: 1px solid var(--border-muted);
        padding: var(--gap-2);
      `}
    >
      <Input placeholder="Search" onInput={handleOnInput} />
      <SelectList
        propertyForLabel="title"
        propertyForValue="value"
        searchValue={searchValue}
        weights={{about1: 1, about0: 0, about2: 2}}
        items={[
          {title: 'Overview', value: 'overview'},
          {title: 'Projects', value: 'projects'},
          {title: 'About Weight 1', value: 'about1'},
          {title: 'About Weight 0', value: 'about0'},
          {title: 'About Weight 2', value: 'about2'},
        ]}
      />
    </Stack>
  );
};

export const Default = Template.bind({});
