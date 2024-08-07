import { FunctionalComponent } from 'preact';
type AvatarSize = 'xl' | 'lg' | 'md' | 'sm';
export type AvatarProps = {
    email?: string | null;
    size?: AvatarSize;
    src?: string | null;
    username?: string | null;
};
export declare const Avatar: FunctionalComponent<AvatarProps>;
export {};
