import {css} from 'styled-components';

export const openedScaleMixin = ({
  opened,
  zoom,
}: {
  zoom?: number;
  opened: boolean;
}) => css`
  transform: scale(1) translateZ(0);
  transition: transform 0.2s ease;
  ${opened &&
  `
    --webkit-font-smoothing: subpixel-antialiased;
    backfaceVisibility: hidden;
    position: relative;
    transform: scale(${zoom || 1.025}) translateZ(0);
    zIndex: 1;
  `}
`;

export const hoverScaleMixin = ({zoom = 1.025}: {zoom?: number} = {}) => css`
  transform: scale(1) translateZ(0);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s;

  &:hover {
    --webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
    position: relative;
    transform: scale(${zoom || 1.025}) translateZ(0);
    z-index: 1;
  }
`;

export const overlayDropdownMixin = css`
  background: var(--bg-overlay);
  border-radius: var(--radius-3);
  box-shadow: 0 1.75rem 4.5rem rgb(0 0 0 / 12%);
  min-width: 15rem;
  padding: 0.625rem;
`;

export const scrollBarMixin = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--scroll-track-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-thumb-color);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  :root[data-theme='dark'] {
  }
`;
