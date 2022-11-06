import { takeEvery, call, put } from 'redux-saga/effects';

import { getTheme } from '@src/themes/getTheme';
import { appActions, AppTypes } from '@src/redux/app/reducer';

import { getItemLocalStorage, setItemLocalStorage } from '@src/utils/controllerStorage';

const { setTheme, setThemeName } = appActions;


function* initSaga() {
  const themeName = yield call(getItemLocalStorage, 'theme');
  if(!themeName) {
    yield call(setItemLocalStorage, 'theme', 'light');
  }
  yield call(setThemeStore, themeName || 'light')
}

function* setThemeStore(themeName) {
  const theme = yield call(getTheme, themeName);
  yield put(setTheme(theme));
  yield put(setThemeName(themeName));
}

export const appSagas = [
  takeEvery(AppTypes.INIT_APP, initSaga),
];