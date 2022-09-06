import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@src/app/App';
import { Provider } from 'react-redux';
import {createStore} from '@src/redux/storeConfig';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App/></Provider>);