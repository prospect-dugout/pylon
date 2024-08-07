import {ComponentChildren, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';

export default {
  title: 'Color Pallete',
  decorators: [ProvidersDecorator],
};

const ColorGroup = ({children}: {children: ComponentChildren}) => (
  <div
    css={`
      display: flex;
      gap: 0.75rem;
      margin-bottom: 2rem;
    `}
  >
    {children}
  </div>
);

const ColorCard = ({color}: {color: string}) => (
  <div
    css={{
      borderRadius: '.5rem',
      boxShadow: '0 0 0 1px var(--border-muted)',
      display: 'inline-flex',
      flexDirection: 'column',
      fontSize: '0.8125rem',
      padding: '0.375rem',
      textAlign: 'center',
      width: 'auto',
    }}
  >
    <div
      css={{
        background: color,
        borderRadius: '.375rem',
        fontWeight: 700,
        height: '4.5rem',
        marginBottom: '0.25rem',
        width: '7.75rem',
      }}
    />
    {color}
  </div>
);

export const Default = () => (
  <div>
    <h1>Primary</h1>
    <ColorGroup>
      <ColorCard color="var(--primary90)" />
      <ColorCard color="var(--primary50)" />
    </ColorGroup>
    <h1>Secondary</h1>
    <ColorGroup>
      <ColorCard color="var(--secondary90)" />
      <ColorCard color="var(--secondary50)" />
    </ColorGroup>
  </div>
);

export const States = () => (
  <div>
    <h1>Error</h1>
    <ColorGroup>
      <ColorCard color="var(--error)" />
    </ColorGroup>
    <h1>Warning</h1>
    <ColorGroup>
      <ColorCard color="var(--warning)" />
    </ColorGroup>
    <h1>Info</h1>
    <ColorGroup>
      <ColorCard color="var(--info)" />
    </ColorGroup>
    <h1>Success</h1>
    <ColorGroup>
      <ColorCard color="var(--success)" />
    </ColorGroup>
  </div>
);
