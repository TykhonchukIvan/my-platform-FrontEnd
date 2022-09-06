import { createSlice, createAction } from '@reduxjs/toolkit';
import {IAppState} from '@src/redux/app/types';
import {reduxModules} from '@src/global-interfaces';

const initialState: IAppState = {};

export const AppTypes = {
  INIT_APP : `${reduxModules.appPage}/init`,
}

const appSlice = createSlice({
  name: reduxModules.appPage,
  initialState,
  reducers: {},
});

export const appActions = {
  init: createAction(AppTypes.INIT_APP),
};

export const appReducer = appSlice.reducer;