import { css } from 'styled-components';
export type OverlayAnimation = 'move-down' | 'move-right' | 'scale-in' | 'opacity' | 'pop';
export declare const getAnimationCss: (animation: OverlayAnimation | undefined) => ReturnType<typeof css> | null;
