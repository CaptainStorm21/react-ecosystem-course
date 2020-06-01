import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';
//stops resetting from a refresh
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from ''reduxt-persist/

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
