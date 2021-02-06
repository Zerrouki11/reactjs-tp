import * as reducers from './reducers';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const todosReducer = combineReducers(reducers) 
const store = createStore(todosReducer);

export default store;