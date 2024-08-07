import {Fragment, h} from 'preact';
import {ProvidersDecorator} from '.storybook/Providers';
import {Panel} from './Panel';
import {PanelGroup} from './PanelGroup';

export default {
  title: 'PanelGroup',
  component: PanelGroup,
  decorators: [ProvidersDecorator],
};

const Template = () => {
  return (
    <div
      css={`
        height: 500px;
        width: 100%;
      `}
    >
      <PanelGroup id="panelGroup1" useTabs localStorageId="panelGroup1">
        <PanelGroup id="panelGrou2" tabName="General" direction="row">
          <Panel tabName="Panel 1">
            <div>
              Panel 1{' '}
              <div>
                <input placeholder="Write here..." />
              </div>
            </div>
          </Panel>
          <Panel tabName="Panel 2">
            <div>Panel 2</div>
          </Panel>
        </PanelGroup>
        <Panel tabName="Readme">Readme</Panel>
      </PanelGroup>
    </div>
  );
};

export const Default = Template.bind({});
