import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { appActions } from '@src/redux/app/reducer';

import { getTheme } from '@src/themes/getTheme';



export const App = () => {
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(appActions.init())
  }, [])

  return (
    <ThemeProvider theme={getTheme('theme')}>

    </ThemeProvider>
  )
};