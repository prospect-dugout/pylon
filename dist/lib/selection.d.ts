type SelectionRange = {
    start: number;
    end: number;
};
export declare function saveSelection(el: any): SelectionRange | null;
export declare function restoreSelection(el: Element, selection: SelectionRange): void;
export {};
