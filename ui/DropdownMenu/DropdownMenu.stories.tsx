import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Button} from '../Button';
import {menuItemVariant} from '../Button/custom-variants';
import {DropdownMenu} from './DropdownMenu';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <DropdownMenu>
    <Button customVariant={menuItemVariant}>Menu 1</Button>
    <Button customVariant={menuItemVariant}>Menu 2</Button>
    <Button customVariant={menuItemVariant}>Menu 3</Button>
    <Button customVariant={menuItemVariant}>Menu 4</Button>
  </DropdownMenu>
);

export const Default = Template.bind({});
