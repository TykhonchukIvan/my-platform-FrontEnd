import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { createStore } from '@src/redux/storeConfig';

import { App } from '@src/app/App';
import { appActions } from '@src/redux/app/reducer';


const store = createStore();

store.dispatch(appActions.init());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
  <App/>
</Provider>);