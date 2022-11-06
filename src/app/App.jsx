import React  from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@src/app/globalStyle';

import { appStore } from '@src/redux/app/selector';

import { Main } from '@src/modules/Main';


export const App = () => {
  const theme = useSelector(appStore.getTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
};