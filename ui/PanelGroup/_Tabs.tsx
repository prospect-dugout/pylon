import {FunctionalComponent, h} from 'preact';
import {css} from 'styled-components';
import {Button} from '../Button';

type Props = {
  setSelectedTab: (idx: number) => void;
  selectedTab: number;
  childrenList: any[];
};

export const PanelGroup_Tabs: FunctionalComponent<Props> = ({
  selectedTab,
  setSelectedTab,
  childrenList,
}: Props) => {
  return (
    <div
      css={`
        height: 2.5rem;
        display: flex;
        flex-wrap: nowrap;
      `}
    >
      {childrenList.map((child, idx) => {
        const isActive = selectedTab === idx;

        return (
          <Button
            variant="unstyled"
            key={child.props.tabName}
            css={`
              align-items: center;
              background: ${isActive
                ? 'var(--panel-group-bg ,var(--bg-minimal))'
                : 'none'};
              color: var(--fg-default);
              display: inline-flex;
              height: 100%;
              padding: 0 1rem;
              position: relative;
              ${isActive &&
              css`
                &:before {
                  background: var(--primary50);
                  content: '';
                  height: 2px;
                  left: 0;
                  position: absolute;
                  right: 0;
                  top: -1px;
                  z-index: 1;
                }
              `}
              &:hover {
                background: var(--panel-group-bg-hover, var(--bg-subtle));
              }
            `}
            onClick={() => {
              setSelectedTab(idx);
            }}
          >
            {child.props.tabName}
          </Button>
        );
      })}
    </div>
  );
};
