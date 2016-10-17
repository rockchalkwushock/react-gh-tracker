import redux from 'redux';
import reducers from '../reducers/reducers';
let createStore = redux.createStore;

export const store = createStore(reducers.repositoryReducer);
