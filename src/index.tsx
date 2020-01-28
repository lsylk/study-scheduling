import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import generalReducer from './store/reducers/general';
import patientReducer from './store/reducers/patient';
import procedureReducer from './store/reducers/procedure';
import doctorReducer from './store/reducers/doctor';
import roomReducer from './store/reducers/room';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    tab: generalReducer,
    patients: patientReducer,
    procedures: procedureReducer,
    doctors: doctorReducer,
    rooms: roomReducer
});

console.log(rootReducer, 'rootReducer');

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();