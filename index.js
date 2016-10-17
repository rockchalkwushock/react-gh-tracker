import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './src/store/store';
import RepositoryList from './src/components/RepositoryList';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <RepositoryList />
    </Provider>,
    document.getElementById('app'));
});
