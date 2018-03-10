import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {weatherReducer} from 'store/weather';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk';

import App from 'components/App';

import './index.css';

// Add the reducer to your store on the `routing` key
const store = createStore(combineReducers({weatherReducer, routing: routerReducer}), compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// Define the provider for the Redux store
const AppProvider = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    <AppProvider/>, document.getElementById('root'));
registerServiceWorker();
