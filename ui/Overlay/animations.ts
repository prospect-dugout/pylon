import {css} from 'styled-components';

export type OverlayAnimation =
  | 'move-down'
  | 'move-right'
  | 'scale-in'
  | 'opacity'
  | 'pop';

const moveDown = css`
  transform: translateY(-10px);
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease,
    visibility 0s 0s;

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`;

const moveRight = css`
  transform: translateX(-10px);
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease,
    visibility 0s 0s;

  &.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = css`
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 300ms,
    transform 300ms;

  &.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
`;

const opacity = css`
  opacity: 0;
  transition: opacity 300ms;

  &.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pop = css`
  opacity: 0;
  transform: rotateX(-30deg);
  transition:
    transform 0.25s ease 0s,
    opacity 0.25s ease 0s;

  &.animate-in {
    opacity: 1;
    transform: rotateX(0);
  }
`;

export const getAnimationCss = (
  animation: OverlayAnimation | undefined,
): ReturnType<typeof css> | null => {
  switch (animation) {
    case 'move-down':
      return moveDown;
    case 'move-right':
      return moveRight;
    case 'scale-in':
      return scaleIn;
    case 'opacity':
      return opacity;
    case 'pop':
      return pop;
    default:
      return null;
  }
};
