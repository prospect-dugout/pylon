import {h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Typography} from './Typography';

export default {
  title: 'Typography',
  component: Typography,
  decorators: [ProvidersDecorator],
};

const Template = () => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `}
  >
    <Typography variant="h1">h1. Heading</Typography>
    <Typography variant="h2">h2. Heading</Typography>
    <Typography variant="h3">h3. Heading</Typography>
    <Typography variant="h4">h4. Heading</Typography>
    <Typography variant="h5">h5. Heading</Typography>
    <Typography variant="h6">h6. Heading</Typography>
    <Typography variant="subtitle1">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body4">
      body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
  </div>
);

export const Default = Template.bind({});
