import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/court';
import thunk from 'redux-thunk';

export default createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)
);