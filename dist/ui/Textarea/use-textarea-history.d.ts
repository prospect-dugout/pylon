export declare const useTextareaHistory: (defaultValue: string, inputRef: any) => {
    updateHistory: (newContent: string) => void;
    undo: () => boolean;
    redo: () => boolean;
};
