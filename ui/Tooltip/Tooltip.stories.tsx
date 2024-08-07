import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Button} from '../Button';
import {Tooltip} from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [ProvidersDecorator],
};

const Template = (args: any) => (
  <Tooltip
    text="Text"
    title="Title"
    delay={400}
    overlayPosition={{
      verticalOffset: -12,
    }}
  >
    <Button
      css={`
        background: red;
        padding: 10px;
      `}
      onClick={() => console.log('clicked')}
      onMouseEnter={() => console.log('mouse enter')}
      onMouseLeave={() => console.log('mouse leave')}
      onFocus={() => console.log('focus')}
      onBlur={() => console.log('blur')}
      onPointerEnter={() => console.log('pointer enter')}
      onPointerLeave={() => console.log('pointer leave')}
      onAnimationStart={() => console.log('animation start')}
      onAnimationEnd={() => console.log('animation end')}
      onAnimationIteration={() => console.log('animation iteration')}
    >
      Button
    </Button>
  </Tooltip>
);

export const Default = Template.bind({});
