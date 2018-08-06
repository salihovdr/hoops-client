
import { API_BASE_URL } from '../config';

export const ADD_COURT = 'ADD_COURT';
export const addCourt = (name) => ({
  type: ADD_COURT,
  name
});

export const FETCH_COURTS_REQUEST = 'FETCH_COURTS_REQUEST';
export const fetchCourtsRequest = () => ({
  type: FETCH_COURTS_REQUEST
});

export const FETCH_COURTS_SUCCESS = 'FETCH_COURTS_SUCCESS';
export const fetchCourtsSuccess = courts => ({
  type: FETCH_COURTS_SUCCESS,
  courts
});

export const FETCH_COURTS_ERROR = 'FETCH_COURTS_ERROR';
export const fetchCourtsError = error => ({
  type: FETCH_COURTS_ERROR,
  error
});

export const fetchCourts = () => dispatch => {
  dispatch(fetchCourtsRequest());
  return fetch(`${API_BASE_URL}/courts`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then (data => {
      dispatch(fetchCourtsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCourtsError(err));
    });
};

export const postCourt = (name) => dispatch => {
  return fetch(`${API_BASE_URL}/courts`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name })
  })
    .then(res => res.json())
    .then(court => dispatch(addCourt(court)));
};