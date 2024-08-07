import {ComponentChildren, FunctionalComponent, createContext, h} from 'preact';
import {useContext, useEffect, useState} from 'preact/hooks';

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export const DEFAULT_THEME = ThemeEnum.LIGHT;

type ThemeContextType = {
  theme: ThemeEnum;
  toggleTheme: (theme?: ThemeEnum) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ComponentChildren;
  defaultTheme?: ThemeEnum;
};

export const ThemeProvider: FunctionalComponent<ThemeProviderProps> = ({
  children,
  defaultTheme,
}: ThemeProviderProps) => {
  const [activeTheme, setActiveTheme] = useState<ThemeEnum>(
    defaultTheme ?? DEFAULT_THEME,
  );

  const toggleTheme = (themeParam?: ThemeEnum) => {
    const newTheme =
      themeParam && validateTheme(themeParam)
        ? themeParam
        : activeTheme === ThemeEnum.LIGHT
          ? ThemeEnum.DARK
          : ThemeEnum.LIGHT;
    localStorage.setItem('theme', newTheme);
    setActiveTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeEnum;
    if (validateTheme(storedTheme)) {
      setActiveTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.firstElementChild?.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function validateTheme(theme: any): theme is ThemeEnum {
  return Object.values(ThemeEnum).includes(theme);
}
