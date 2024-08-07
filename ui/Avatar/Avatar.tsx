import {FunctionalComponent, h} from 'preact';

const defaultColors: Array<[string, string]> = [
  ['#697fff', '#ff9ada'],
  ['#ff5900', '#ff9ada'],
  ['#697fff', '#00d192'],
  ['#ff5900', '#e6ff00'],
  ['#00d192', '#e6ff00'],
  ['#0061ff', '#60efff'],
  ['#ba42c0', '#deb8f5'],
  ['#01dbff', '#0f971c'],
  ['#ff51eb', '#ede342'],
  ['#a106f4', '#00d192'],
  ['#697fff', '#8752a3'],
  ['#f40752', '#ff9ada'],
  ['#f19e18', '#ff5900'],
  ['#6c35c8', '#ef566a'],
  ['#00d192', '#46b83d'],
  ['#ff9ada', '#ed5c86'],
  ['#ff9ada', '#00458e'],
  ['#01dbff', '#f55c7a'],
  ['#ff5900', '#f90c71'],
  ['#00d192', '#affcaf'],
];

// https://en.wikipedia.org/wiki/Linear_congruential_generator
const stringAsciiPRNG = (value: string, m: number): number => {
  const charCodes = value.split('').map((letter) => letter.charCodeAt(0));
  const len = charCodes.length;
  const a = (len % (m - 1)) + 1;
  const c = charCodes.reduce((current, next) => current + next) % m;

  let random = charCodes[0] % m;
  for (let i = 0; i < len; i++) random = (a * random + c) % m;

  return random;
};

/**
 * Get a value based color.
 * The reason for this is we want colors to be consistent for the same value.
 */
const getRandomGradient = (
  value: string,
  colors: string[][] = defaultColors,
): string => {
  if (!value) return 'transparent';
  const idx = stringAsciiPRNG(value, colors.length);
  const [colorA, colorB] = colors[idx > -1 ? idx : 0];
  return `linear-gradient(to bottom, ${colorA}, ${colorB})`;
};

type AvatarSize = 'xl' | 'lg' | 'md' | 'sm';

export type AvatarProps = {
  email?: string | null;
  size?: AvatarSize;
  src?: string | null;
  username?: string | null;
};

export const Avatar: FunctionalComponent<AvatarProps> = ({
  email,
  size = 'md',
  src,
  username,
  ...restProps
}: AvatarProps) => {
  const displayName = username || email || 'O';

  return (
    <div
      css={`
        align-items: center;
        background-position: center;
        background-size: cover;
        border-radius: 100%;
        box-shadow: inset 0 0 0 0.0625rem hsl(0deg 0% 100% / 20%);
        color: var(--white);
        display: flex;
        flex-shrink: 0;
        font-size: ${sizeStyleMap[size].fontSize};
        font-weight: 500;
        height: ${sizeStyleMap[size].height};
        justify-content: center;
        text-transform: uppercase;
        width: ${sizeStyleMap[size].width};
        ${src
          ? `
          background-image: url(${src});
        `
          : `
          background: ${getRandomGradient(displayName)};
        `}
      `}
      {...restProps}
    >
      {src ? null : displayName.charAt(0)}
    </div>
  );
};

const sizeStyleMap = {
  xl: {
    fontSize: '2rem',
    height: '5rem',
    width: '5rem',
  },
  lg: {
    fontSize: '1.25rem',
    height: '3rem',
    width: '3rem',
  },
  md: {
    fontSize: '0.8125rem',
    height: '2rem',
    width: '2rem',
  },
  sm: {
    fontSize: '0.5rem',
    height: '1.5rem',
    width: '1.5rem',
  },
};
