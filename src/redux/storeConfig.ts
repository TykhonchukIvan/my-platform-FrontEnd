import rootSaga from './rootSaga';
import {configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';


const isDevelopmentMode = (): boolean => process.env.MY_PLATFORM_FRONT_NODE_ENV !== 'production';

export const createStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const middlewares = [sagaMiddleWare]
  const store = configureStore({
    reducer: rootReducer,
    devTools: isDevelopmentMode(),
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  })
  sagaMiddleWare.run(rootSaga)
  return store;
}