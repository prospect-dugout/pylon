import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {DescriptionList} from './DescriptionList';
import {DescriptionListItem} from './DescriptionListItem';

export default {
  title: 'DescriptionList',
  component: DescriptionList,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <DescriptionList>
    <DescriptionListItem title="Item Title 1">Value</DescriptionListItem>
    <DescriptionListItem
      title="Item Title 2"
      tooltipProps={{
        text: 'Tootlip Text',
      }}
    >
      Value
    </DescriptionListItem>
  </DescriptionList>
);

export const Default = Template.bind({});
