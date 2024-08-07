type ReturnType<T> = [T | undefined, (value: T | ((prev: T) => T)) => void];
export declare function useLocalStorage<T>(key?: string, initialValue?: T): ReturnType<T>;
export {};
