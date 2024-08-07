import { FunctionalComponent } from 'preact';
export interface Breadcrumb {
    href?: string;
    title: string;
}
type Props = {
    items: Breadcrumb[];
};
export declare const Breadcrumbs: FunctionalComponent<Props>;
export {};
