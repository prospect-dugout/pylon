import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Typography} from '../Typography';
import {ICONS, Icon, IconName} from './Icon';

export default {
  title: 'Icons',
  component: Icon,
  decorators: [ProvidersDecorator],
};

const Template = () => {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--gap-4);
        padding: var(--gap-8);
      `}
    >
      {Object.keys(ICONS).map((key) => (
        <div
          key={key}
          css={`
            align-items: center;
            display: flex;
            padding: var(--gap-2);
          `}
        >
          <Icon icon={key as IconName} size={20} />
          <Typography variant="body2" css-ml={4}>
            {key}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export const Default = Template.bind({});
