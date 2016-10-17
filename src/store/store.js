import redux from 'redux';
import reducers from '../reducers/reducers';
import {createStore} from 'redux';

let store = createStore(reducers.repositoryReducer);

export default store;
