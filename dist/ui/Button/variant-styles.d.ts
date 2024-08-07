import { css } from 'styled-components';
export type ButtonVariant = 'unstyled' | 'default' | 'muted' | 'primary' | 'primary-soft' | 'primary-with-shadow' | 'secondary' | 'secondary-soft' | 'error' | 'error-soft' | 'outline' | 'outline-primary' | 'outline-muted';
export declare const variantsStyles: {
    [key in ButtonVariant]: ReturnType<typeof css>;
};
