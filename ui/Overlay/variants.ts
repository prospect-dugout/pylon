import {css} from 'styled-components';

export const overlayPopupCss = css`
  background: var(--bg-overlay);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  max-height: 100%;
  max-width: var(--breakpoint-sm);
  overflow-y: auto;
  padding: var(--gap-8);
  width: 100%;
`;

export const overlayCenteredCss = css`
  background: var(--bg-overlay);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  max-height: 100%;
  max-width: 43.75rem;
  overflow-y: auto;
  padding: var(--gap-8);
  width: 100%;
`;

export const dropdownOverlayCss = css`
  background: var(--bg-overlay);
  border-radius: var(--radius-2);
  box-shadow: 0 2px 12px rgb(0 0 0 / 12%);
  min-width: 15rem;
  padding: var(--gap-1-5);
`;
