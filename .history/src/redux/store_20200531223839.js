import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';
//stops resetting from a refresh

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
