import {takeEvery} from 'redux-saga/effects';
import {AppTypes} from '@src/redux/app/reducer';

function* initSaga () {
  yield console.log(123);
}

export const appSagas = [
  takeEvery(AppTypes.INIT_APP, initSaga),
];