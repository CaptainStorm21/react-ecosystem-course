import { createStore, combineReducers } from 'redux';
import { todos  } from './reducers'
const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
