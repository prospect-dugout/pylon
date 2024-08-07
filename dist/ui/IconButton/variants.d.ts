import { css } from 'styled-components';
export type IconButtonVariant = 'unstyled' | 'default' | 'muted' | 'outline' | 'outline-muted' | 'outline-primary' | 'primary' | 'primary-soft' | 'secondary' | 'secondary-soft' | 'error' | 'error-soft';
export declare const variantsStyles: {
    [_key in IconButtonVariant]: ReturnType<typeof css>;
};
