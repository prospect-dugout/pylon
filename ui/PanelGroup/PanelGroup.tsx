import {
  ComponentChildren,
  Fragment,
  FunctionalComponent,
  cloneElement,
  h,
} from 'preact';
import {useCallback, useRef, useState} from 'preact/hooks';
import {TrackEventData} from '../../lib';
import {PanelGroup_ResizeHandle} from './_ResizeHandle';
import {PanelGroup_Tabs} from './_Tabs';
import {useStoredLayout} from './use-stored-layout';

type InternalProps = {
  _panelSize?: number;
};

export type PanelGroupProps = {
  children: ComponentChildren;
  direction?: 'row' | 'column';
  id: string;
  localStorageId?: string;
  tabsCustomRender?: (content: ComponentChildren) => ComponentChildren;
  tabName?: string;
  useTabs?: boolean;
};

export const PanelGroup: FunctionalComponent<PanelGroupProps> = ({
  children,
  direction = 'row',
  id,
  localStorageId,
  tabsCustomRender,
  useTabs,
  ...restProps
}: PanelGroupProps) => {
  const initialSize = useRef<{prev: number; next: number} | null>(null);
  const childrenList = Array.isArray(children) ? children : [children];
  const {_panelSize} = restProps as InternalProps;
  const childsRef = useRef<HTMLElement[]>([]);
  const [storedLayout, updateLocalStorage] = useStoredLayout({
    localStorageId,
    childsRef,
    panelGroupId: id,
  });
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTrack = useCallback(
    (idx: number, data: TrackEventData) => {
      const prevChild = childsRef.current[idx];
      const nextChild = childsRef.current[idx + 1];

      if (!prevChild || !nextChild) return;
      if (!initialSize.current) {
        initialSize.current = {
          prev: prevChild[direction === 'row' ? 'offsetWidth' : 'offsetHeight'],
          next: nextChild[direction === 'row' ? 'offsetWidth' : 'offsetHeight'],
        };
      }
      let totalContainerSize = 0;
      for (let i = 0; i < childsRef.current.length; i++) {
        const child = childsRef.current[i];
        if (child) {
          totalContainerSize +=
            child[direction === 'row' ? 'offsetWidth' : 'offsetHeight'];
        }
      }
      const {prev, next} = initialSize.current;
      const deltaSize = direction === 'row' ? data.dx : data.dy;
      const newSizePrev = prev + deltaSize;
      const newSizeNext = next - deltaSize;
      if (newSizePrev >= 100 && newSizeNext >= 100) {
        const prevChildNewPct = (newSizePrev / totalContainerSize) * 100;
        const nextChildNewPct = (newSizeNext / totalContainerSize) * 100;
        prevChild.style.flex = `${prevChildNewPct} 0 0%`;
        nextChild.style.flex = `${nextChildNewPct} 0 0%`;
        prevChild.style.pointerEvents = 'none';
        nextChild.style.pointerEvents = 'none';
      }
    },
    [childsRef, direction, initialSize],
  );

  const handleTrackEnd = () => {
    initialSize.current = null;
    updateLocalStorage();
    childsRef.current.forEach((child) => {
      if (!child) return;
      child.style.pointerEvents = '';
    });
  };

  const handleDblClick = () => {
    childsRef.current.forEach((child) => {
      if (!child) return;
      child.style.flex = `${100 / childrenList.length} 0 0%`;
    });
    updateLocalStorage();
  };

  let content: ComponentChildren;

  if (useTabs) {
    const child = childrenList[selectedTab];
    const tabsContent = (
      <PanelGroup_Tabs
        childrenList={childrenList}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    );

    content = (
      <>
        {tabsCustomRender ? tabsCustomRender(tabsContent) : tabsContent}
        {cloneElement(child, {
          _panelSize: 100,
          localStorageId,
        })}
      </>
    );
  } else {
    content = childrenList.map((child, idx) => {
      const storedSize = storedLayout?.[idx];
      const childPanelSize = parseFloat(
        storedSize ?? 100 / childrenList.length,
      );

      return (
        <Fragment key={`${id}:${idx}`}>
          {cloneElement(child, {
            ref: (el: any) => {
              if (el) {
                childsRef.current[idx] = el.base as HTMLElement;
              }
            },
            _panelSize: childPanelSize,
            localStorageId,
          })}
          {idx < childrenList.length - 1 && (
            <PanelGroup_ResizeHandle
              direction={direction}
              onTrack={(d: any) => handleTrack(idx, d)}
              onTrackEnd={handleTrackEnd}
              ondblclick={handleDblClick}
            />
          )}
        </Fragment>
      );
    });
  }

  return (
    <div
      css={`
        display: flex;
        flex-direction: ${useTabs ? 'column' : direction};
        height: 100%;
        width: 100%;
        min-height: 0;
        min-width: 0;
        overflow: hidden;
        ${typeof _panelSize === 'number' ? `flex: ${_panelSize} 0;` : ''}
      `}
    >
      {content}
    </div>
  );
};
