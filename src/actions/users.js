import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error
});

export const fetchUser = id => dispatch => {
  return fetch(`${API_BASE_URL}/users/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchUserSuccess(data));
    })
    .catch(err => {
      dispatch(fetchUserError(err));
    });
};

// export const fetchUser = id => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/users/${id}`, {
//     method: 'GET',
//     headers: {
//       // Provide our auth token as credentials
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(user => dispatch(fetchUserSuccess(user)))
//     .catch(err => {
//       dispatch(fetchUserError(err));
//     });
// };

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};
