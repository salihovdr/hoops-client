import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CourtList from './components/court-list';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <CourtList />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
