import { ComponentChildren, FunctionalComponent } from 'preact';
export declare enum ThemeEnum {
    LIGHT = "light",
    DARK = "dark"
}
export declare const DEFAULT_THEME = ThemeEnum.LIGHT;
type ThemeContextType = {
    theme: ThemeEnum;
    toggleTheme: (theme?: ThemeEnum) => void;
};
export declare const ThemeContext: import("preact").Context<ThemeContextType>;
export declare const useThemeContext: () => ThemeContextType;
type ThemeProviderProps = {
    children: ComponentChildren;
    defaultTheme?: ThemeEnum;
};
export declare const ThemeProvider: FunctionalComponent<ThemeProviderProps>;
export {};
