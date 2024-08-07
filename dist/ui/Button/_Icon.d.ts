import { FunctionalComponent, JSX } from 'preact';
import { IconName } from '../Icon';
import { ButtonProps } from './Button';
type Props = {
    buttonSize: NonNullable<ButtonProps['buttonSize']>;
    direction: 'leading' | 'trailing';
    icon?: IconName | JSX.Element;
} & Pick<ButtonProps, 'iconSize' | 'iconCss'>;
export declare const Button_Icon: FunctionalComponent<Props>;
export {};
