import {h} from 'preact';
import {useContext} from 'preact/hooks';
import {useEffect} from 'react';
import {ThemeContext, ThemeEnum, ThemeProvider} from '../lib';
import './index.css';

export const ProvidersDecorator = (Story: any, props: any) => {
  return (
    <ThemeProvider>
      <_ThemeInner theme={props.globals.theme}>
        <Story />
      </_ThemeInner>
    </ThemeProvider>
  );
};

const _ThemeInner = ({children, theme}: any) => {
  const {toggleTheme} = useContext(ThemeContext);

  useEffect(() => {
    toggleTheme(theme === 'dark' ? ThemeEnum.DARK : ThemeEnum.LIGHT);
  }, [theme]);

  return children;
};
