import {Fragment, h} from 'preact';
import {useState} from 'preact/hooks';
import {css} from 'styled-components';
import {ProvidersDecorator} from '.storybook/Providers';
import {Button} from '../Button';
import {Stack} from '../Stack';
import {Overlay} from './Overlay';

export default {
  title: 'Overlay',
  component: Overlay,
  decorators: [ProvidersDecorator],
};

const Template = () => {
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  return (
    <>
      <Stack direction="column" alignItems="center" css-mt={10} gap={4}>
        <Button onMouseDown={() => setOpened1((p) => !p)}>
          animation="pop", position={`{{centered: true}}`}
        </Button>
      </Stack>
      <Overlay
        animation="scale-in"
        opened={opened1}
        setOpened={setOpened1}
        cancelOnEscKey
        cancelOnOutsideClick
        disableBodyScroll
        withBackdrop
        position={{
          mode: 'centered',
        }}
        rootCss={css`
          padding: 20px;
        `}
        css={`
          background: var(--bg-overlay);
          border-radius: var(--radius-3);
          box-shadow: var(--shadow-3);
          max-height: 100%;
          max-width: 43.75rem;
          overflow-y: auto;
          padding: var(--gap-8);
          width: 100%;
        `}
      >
        <Button onMouseDown={() => setOpened2((p) => !p)}>Open another</Button>
        <div>Test</div>
      </Overlay>
      <Overlay
        animation="pop"
        opened={opened2}
        setOpened={setOpened2}
        cancelOnEscKey
        cancelOnOutsideClick
        disableBodyScroll
        position={{
          mode: 'centered',
        }}
        css={`
          background: var(--bg-overlay);
          border-radius: var(--radius-3);
          box-shadow: var(--shadow-3);
          max-height: 100%;
          max-width: 43.75rem;
          overflow-y: auto;
          padding: var(--gap-8);
          width: 100%;
        `}
      >
        <div>overlay2</div>
        <Button
          onClick={() => {
            setOpened1(false);
          }}
        >
          close overlay1
        </Button>
      </Overlay>
    </>
  );
};

export const Default = Template.bind({});
