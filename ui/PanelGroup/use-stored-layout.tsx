import {RefObject} from 'preact';
import {useLocalStorage} from '../../lib';

type Props = {
  childsRef: RefObject<HTMLElement[]>;
  localStorageId?: string;
  panelGroupId: string;
};

export const useStoredLayout = ({
  childsRef,
  localStorageId,
  panelGroupId,
}: Props): [Record<string, any> | null, () => void] => {
  const [storedLayout, setStoredLayout] = useLocalStorage<Record<
    string,
    any
  > | null>(localStorageId, null);

  const updateLocalStorage = () => {
    if (!localStorageId || !childsRef.current) return;
    const sizes: Array<string> = [];

    for (let panelId = 0; panelId < childsRef.current.length; panelId++) {
      const child = childsRef.current[panelId];
      if (!child) return;
      sizes.push(window.getComputedStyle(child).flexGrow);
    }

    setStoredLayout((prev) => {
      return {
        ...prev,
        [panelGroupId]: sizes,
      };
    });
  };

  return [storedLayout?.[panelGroupId], updateLocalStorage];
};
