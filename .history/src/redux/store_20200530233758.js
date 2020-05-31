import { createStore, combineReducers } from 'redux';
import { } from './reducers'
const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
