import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware,combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import './index.css';
import { createLogger } from "redux-logger";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {viewRecoProfilesAll} from './reducers';
import { onSignin,onSignOut } from "./Components/LandingPage/reducers";
// import { onSignOut } from "./Components/Navigation/reducers";

const logger=createLogger();
const rootReducer = combineReducers({viewRecoProfilesAll,onSignin,onSignOut});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
