export declare function afterNextRender(cb: () => void): void;
export declare function on<T extends Window | Document | HTMLElement | EventTarget>(obj: T | null, ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]): void;
export declare function off<T extends Window | Document | HTMLElement | EventTarget>(obj: T | null, ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]): void;
export declare function distance(x1: number, y1: number, x2: number, y2: number): number;
export declare function ensureLeadingSlash(url: string): string;
export declare function toFloatOrNull(value: any): number | null;
