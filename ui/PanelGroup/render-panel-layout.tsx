import {h} from 'preact';
import {Panel, PanelGroup} from '.';
import {PanelGroupProps} from './PanelGroup';

export type PanelLayoutConfig = {
  component?: PanelGroupProps['children'];
  direction?: PanelGroupProps['direction'];
  panels?: PanelLayoutConfig[];
  tabsCustomRender?: PanelGroupProps['tabsCustomRender'];
  tabName?: PanelGroupProps['tabName'];
  useTabs?: PanelGroupProps['useTabs'];
};

/** @recursive */
export const renderPanelLayout = (
  config: PanelLayoutConfig,
  {localStorageId, path}: {localStorageId?: string; path?: string} = {},
) => {
  const id = path || '0';

  if (config.panels) {
    return (
      <PanelGroup
        id={id}
        tabName={config.tabName}
        direction={config.direction}
        useTabs={config.useTabs}
        {...(config.tabsCustomRender
          ? {tabsCustomRender: config.tabsCustomRender}
          : {})}
        {...(localStorageId ? {key: localStorageId, localStorageId} : {})}
      >
        {config.panels.map((c, idx) =>
          renderPanelLayout(c, {path: `${id ? `${id}-` : ''}${idx}`}),
        )}
      </PanelGroup>
    );
  } else {
    return <Panel tabName={config.tabName}>{config.component}</Panel>;
  }
};
