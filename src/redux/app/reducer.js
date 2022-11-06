import { createSlice, createAction } from '@reduxjs/toolkit';
import { reduxModules } from '@src/global-constants';

const initialState = {
  themeName: 'light',
  theme: {},
};

export const AppTypes = {
  INIT_APP: `${reduxModules.appPage}/init`,
}

const appSlice = createSlice({
  name: reduxModules.appPage,
  initialState,
  reducers: {
    setThemeName: (state, action) => {
      state.themeName = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  },
});

export const appActions = {
  ...appSlice.actions,
  init: createAction(AppTypes.INIT_APP),
};

export const appReducer = appSlice.reducer;