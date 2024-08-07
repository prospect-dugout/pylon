export type Gap =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 'auto';

export const gapMap: {[key in Gap]: string} = {
  0: '',
  0.5: 'var(--gap-0-5)',
  1: 'var(--gap-1)',
  1.5: 'var(--gap-1-5)',
  2: 'var(--gap-2)',
  2.5: 'var(--gap-2-5)',
  3: 'var(--gap-3)',
  4: 'var(--gap-4)',
  5: 'var(--gap-5)',
  6: 'var(--gap-6)',
  7: 'var(--gap-7)',
  8: 'var(--gap-8)',
  9: 'var(--gap-9)',
  10: 'var(--gap-10)',
  11: 'var(--gap-11)',
  12: 'var(--gap-12)',
  13: 'var(--gap-13)',
  14: 'var(--gap-14)',
  15: 'var(--gap-15)',
  16: 'var(--gap-16)',
  17: 'var(--gap-17)',
  18: 'var(--gap-18)',
  19: 'var(--gap-19)',
  20: 'var(--gap-20)',
  21: 'var(--gap-21)',
  22: 'var(--gap-22)',
  23: 'var(--gap-23)',
  24: 'var(--gap-24)',
  25: 'var(--gap-25)',
  26: 'var(--gap-26)',
  27: 'var(--gap-27)',
  28: 'var(--gap-28)',
  29: 'var(--gap-29)',
  30: 'var(--gap-30)',
  31: 'var(--gap-31)',
  32: 'var(--gap-32)',
  auto: 'auto',
};

export type CustomCSSProperties<T = {}> = T & {
  // margin
  'css-mb'?: Gap;
  'css-ml'?: Gap;
  'css-mr'?: Gap;
  'css-mt'?: Gap;
  'css-m'?: Gap | Gap[];
  // padding
  'css-pb'?: Gap;
  'css-pl'?: Gap;
  'css-pr'?: Gap;
  'css-pt'?: Gap;
  'css-p'?: Gap | Gap[];
  // color
  'css-color'?: string;
  // text align
  'css-textAlign'?: 'left' | 'center' | 'right';
};

export const customCSSPropertiesRule = (props: CustomCSSProperties): string => {
  let styles = '';

  // margin
  if (props['css-mb'])
    styles += `margin-bottom: ${gapMap[props['css-mb']] || props['css-mb']};`;
  if (props['css-ml'])
    styles += `margin-left: ${gapMap[props['css-ml']] || props['css-ml']};`;
  if (props['css-mr'])
    styles += `margin-right: ${gapMap[props['css-mr']] || props['css-mr']};`;
  if (props['css-mt'])
    styles += `margin-top: ${gapMap[props['css-mt']] || props['css-mt']};`;
  if (props['css-m']) {
    const margin = Array.isArray(props['css-m'])
      ? props['css-m'].map((gap) => gapMap[gap] || gap).join(' ')
      : gapMap[props['css-m']] || props['css-m'];
    styles += `margin: ${margin};`;
  }

  // padding
  if (props['css-pb'])
    styles += `padding-bottom: ${gapMap[props['css-pb']] || props['css-pb']};`;
  if (props['css-pl'])
    styles += `padding-left: ${gapMap[props['css-pl']] || props['css-pl']};`;
  if (props['css-pr'])
    styles += `padding-right: ${gapMap[props['css-pr']] || props['css-pr']};`;
  if (props['css-pt'])
    styles += `padding-top: ${gapMap[props['css-pt']] || props['css-pt']};`;
  if (props['css-p']) {
    const padding = Array.isArray(props['css-p'])
      ? props['css-p'].map((gap) => gapMap[gap] || gap).join(' ')
      : gapMap[props['css-p']] || props['css-p'];
    styles += `padding: ${padding};`;
  }

  // color
  if (props['css-color']) styles += `color: ${props['css-color']};`;
  // text-align
  if (props['css-textAlign'])
    styles += `text-align: ${props['css-textAlign']};`;

  return styles;
};

export const nonCustomCSSProps = (props: {[key: string]: any}) => {
  const nonCustomProps: {[key: string]: any} = {};
  for (const [key, value] of Object.entries(props)) {
    if (!key.startsWith('css-')) {
      nonCustomProps[key] = value;
    }
  }
  return nonCustomProps;
};
