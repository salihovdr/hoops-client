import * as actions from '../actions/users';

const initialState = {
  error: null,
  user: null,
  loading: false
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_USER_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  if (action.type === actions.FETCH_USER_SUCCESS) {
    return Object.assign({}, state, { user: action.user, error: null, loading: false });
  }

  else if (action.type === actions.FETCH_USER_ERROR) {
    return Object.assign({}, state, { error: action.error, user: null, loading: false });
  }
  
  else {
    return state;
  }
};