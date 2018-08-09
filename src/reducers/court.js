import * as actions from '../actions/court';

const initialState = {
  filter: '',
  courts: [],
  loading: false,
  error: null,
  events: []
};

export default (state=initialState, action) => {

  if (action.type === actions.FETCH_COURTS_REQUEST){
    return Object.assign({}, state, {loading: true});
  }

  else if (action.type === actions.FETCH_COURTS_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {courts: action.courts, loading: false, error: null});
  }

  else if (action.type === actions.FETCH_COURTS_ERROR) {
    return Object.assign({}, state, {loading: false, error: action.error});
  }

  else if (action.type === actions.CREATE_EVENT) {
    return Object.assign(
      {}, state,
      { events: [...state.events, { title: action.title, description: action.description, time: action.time, date: action.date }] });
  }

  else if (action.type === actions.FETCH_EVENTS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  else if (action.type === actions.FETCH_EVENTS_SUCCESS) {
    return Object.assign({}, state, { events: [...action.events], loading: false, error: null });
  }

  else if (action.type === actions.FETCH_EVENTS_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  }

  else if (action.type === actions.SET_FILTER) {
    return Object.assign({}, state, { filter: action.filter });
  }

  else {
    return state;
  }
};