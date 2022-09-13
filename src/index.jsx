import React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';

import { createStore } from '@src/redux/storeConfig';

import { App } from '@src/app/App';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App/></Provider>);