import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import allReducers from "./AllReducers";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();




export const store = createStore(allReducers, applyMiddleware(thunk,logger));

ReactDOM.render(
<Provider store={store} >
        <BrowserRouter history={history} >
            <App />
        </BrowserRouter>
    </Provider>
	, document.getElementById('root'));
registerServiceWorker();
