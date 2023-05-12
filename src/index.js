import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// SAGA Imports
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';

// Reducers
const GIFSearch = (state=[], action) => {
    return state;
}
const sagaMiddleware = createSagaMiddleware();
//   Promise.resolve('Hello!');
function* fetchGIFs(action) {
    try {
      const response = yield axios({
        method: 'GET',
        url: `/api/search?search=${action.payload}`
      });
    
      console.log(response.data);
    } catch(error) {
        console.log('something broke in fetchGIFs saga function!', error);
    }
}
// Saga root function
function* rootSaga(){
yield takeLatest('SAGA/FETCH_GIFS', fetchGIFs);
}

// Redux Store
const theStore = createStore(
    combineReducers({
        GIFSearch
    }),

    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

    <Provider store={theStore}>
        <App />
    </Provider>

    </React.StrictMode>
);
