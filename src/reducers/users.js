import * as actions from '../actions/users';

const initialState = {
  error: null,
  user: null
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_USER_SUCCESS) {
    return Object.assign({}, state, { user: action.user, error: null });
  }

  else if (action.type === actions.FETCH_USER_ERROR) {
    return Object.assign({}, state, { error: action.error, user: null });
  }
  
  else {
    return state;
  }
};