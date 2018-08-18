import * as actions from '../actions/courts';
import * as eventActions from '../actions/events';

const initialState = {
  filter: '',
  courts: [],
  loading: false,
  error: null,
  singleCourt: null
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_COURTS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  else if (action.type === eventActions.CREATE_EVENT) {
    return Object.assign({}, state,
      { courts: state.courts.map(court => {
        if (court.id === action.courtId){
          return Object.assign({}, court, { events: [...court.events, { title: action.title, description: action.description, courtId: action.courtId, time: action.time, date: action.date }]});
        }
        return court;
      })
      }
    );
  }

  else if (action.type === actions.FETCH_COURTS_SUCCESS) {
    return Object.assign({}, state, { courts: [...action.courts], loading: false, error: null });
  }

  else if (action.type === actions.FETCH_COURTS_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  }

  else if (action.type === actions.FETCH_SINGLE_COURT_SUCCESS) {
    return Object.assign({}, state, { singleCourt: action.singleCourt, error: null, loading: false });
  }

  else if (action.type === actions.FETCH_SINGLE_COURT_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  }

  else if (action.type === actions.SET_FILTER) {
    return Object.assign({}, state, { filter: action.filter });
  }
  else if (action.type === actions.RESET_FILTER) {
    return Object.assign({}, state, { filter: action.filter });
  }

  else {
    return state;
  }
};