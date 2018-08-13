import * as actions from '../actions/events';

const initialState = {
  error: null,
  events: [],
  singleEvent: null
};

export default (state = initialState, action) => {

  if (action.type === actions.CREATE_EVENT) {
    return Object.assign(
      {}, state,
      { events: [...state.events, { title: action.title, description: action.description, courtId: action.courtId, time: action.time, date: action.date }] });
  }

  else if (action.type === actions.FETCH_EVENTS_SUCCESS) {
    return Object.assign({}, state, { events: [...action.events], singleEvent: null, error: null });
  }

  else if (action.type === actions.FETCH_EVENTS_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }

  else if (action.type === actions.FETCH_SINGLE_EVENT_SUCCESS) {
    return Object.assign({}, state, { singleEvent: action.singleEvent, error: null });
  }

  else if (action.type === actions.FETCH_SINGLE_EVENT_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }


  else {
    return state;
  }
};