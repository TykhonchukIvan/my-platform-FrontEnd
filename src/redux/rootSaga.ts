import { all } from 'redux-saga/effects';
import { appSagas } from '@src/redux/app/saga';

function* rootSaga(): Generator {
  yield all([...appSagas]);
}

export default rootSaga;