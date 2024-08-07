import {useEffect, useRef, useState} from 'preact/hooks';
import {makeid} from './make-id';

type ReturnType<T> = [T | undefined, (value: T | ((prev: T) => T)) => void];

type StorageChangeEvent<T> = CustomEvent<{
  key: string;
  newValue: T;
  instanceId: string;
}>;

export function useLocalStorage<T>(
  key?: string,
  initialValue?: T,
): ReturnType<T> {
  const instanceId = useRef<string>(makeid(10));
  const [storedValue, setStoredValue] = useState<T | undefined>(initialValue);

  const setValue: ReturnType<T>[1] = (valueOrFn) => {
    if (!key) return;
    try {
      const prev = window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key)!)
        : initialValue;
      const newValue =
        valueOrFn instanceof Function ? valueOrFn(prev as T) : valueOrFn;
      setStoredValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
      window.dispatchEvent(
        new CustomEvent('storage-change', {
          detail: {key, newValue, instanceId: instanceId.current},
        } as StorageChangeEvent<T>),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (key) {
      setStoredValue(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
    }

    const handleStorageChange = (e: Event) => {
      const {detail} = e as StorageChangeEvent<T>;
      if (detail.key === key && detail.instanceId !== instanceId.current) {
        setStoredValue(detail.newValue);
      }
    };
    window.addEventListener('storage-change', handleStorageChange);
    return () => {
      window.removeEventListener('storage-change', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
