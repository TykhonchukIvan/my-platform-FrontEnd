import { createSelector } from '@reduxjs/toolkit';


const appState = (state) => state.app;

export const appStore = {
  getTheme: createSelector(appState, (state) => state.theme),
}