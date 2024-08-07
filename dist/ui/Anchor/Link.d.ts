import { JSX } from 'preact';
interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
    activeClass?: string;
    activeClassName?: string;
    class?: string;
    className?: string;
}
export declare const Link: ({ class: c, className, activeClass, activeClassName, ...props }: Props) => JSX.Element;
export {};
