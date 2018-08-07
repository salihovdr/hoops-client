import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Landing from './components/landing';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Landing />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
