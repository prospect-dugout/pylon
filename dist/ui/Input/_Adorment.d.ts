import { FunctionalComponent } from 'preact';
import { TypographyProps } from '../Typography';
interface Props extends TypographyProps {
    disabled?: boolean;
    position: 'start' | 'end';
}
export declare const Input_Adorment: FunctionalComponent<Props>;
export {};
