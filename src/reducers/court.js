import * as actions from '../actions/court';

const initialState = {
  filter: '',
  courts: [],
  loading: false,
  error: null
};

export default (state=initialState, action) => {

  if (action.type === actions.FETCH_COURTS_REQUEST){
    return Object.assign({}, state, {loading: true});
  }
  else if(action.type === actions.SET_FILTER) {
    return Object.assign({}, state, { filter: action.filter });
  }

  else if (action.type === actions.FETCH_COURTS_SUCCESS) {
    return Object.assign({}, state, {courts: [...action.courts], loading: false, error: null});
  }

  else if (action.type === actions.FETCH_COURTS_ERROR) {
    return Object.assign({}, state, {loading: false, error: action.error});
  }

  else {
    return state;
  }
};