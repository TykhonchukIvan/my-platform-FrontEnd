import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { createStore } from '@src/redux/storeConfig';

import { App } from '@src/app/App';


const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
  <App/>
</Provider>);