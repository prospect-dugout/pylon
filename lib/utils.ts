/* eslint-disable @typescript-eslint/ban-types */

export function afterNextRender(cb: () => void) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      cb();
    });
  });
}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>),
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T['removeEventListener']>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>),
    );
  }
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
  const a = x1 - x2;
  const b = y1 - y2;

  return Math.hypot(a, b);
}

export function ensureLeadingSlash(url: string) {
  return typeof url === 'string' ? (url[0] !== '/' ? `/${url}` : url) : url;
}

export function toFloatOrNull(value: any) {
  if (value === null || typeof value === 'undefined') return null;
  if (typeof value === 'number') return value;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}
