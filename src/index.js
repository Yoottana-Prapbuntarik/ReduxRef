import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import dataReducer from './reducers/dataReducer';
const Store = createStore(
    dataReducer,
    {
        hn: '',
        pcucode: '',
        fname: '',
        cabogroup: [],
        footer:'CoppyRight 2018 By Yoottana'
    }
);

ReactDOM.render(
<Provider store={Store}>
<App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
