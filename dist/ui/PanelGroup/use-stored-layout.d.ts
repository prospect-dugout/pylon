import { RefObject } from 'preact';
type Props = {
    childsRef: RefObject<HTMLElement[]>;
    localStorageId?: string;
    panelGroupId: string;
};
export declare const useStoredLayout: ({ childsRef, localStorageId, panelGroupId, }: Props) => [Record<string, any> | null, () => void];
export {};
