import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import './index.css';
import { createLogger } from "redux-logger";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {viewRecoProfilesAll} from './reducers';

const logger=createLogger();
const store = createStore(viewRecoProfilesAll, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
