import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos } from "./reducers";
//stops resetting from a refresh
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//thunk
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'dev-tools-extension';


const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(
    persistedReducer,
    composeWithDevTools
    
  );
