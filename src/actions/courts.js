
import { API_BASE_URL } from '../config';

export const SET_FILTER = 'SET_FILTER';
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const RESET_FILTER = 'SET_FILTER';
export const resetFilter = (filter='') => ({
  type: SET_FILTER,
  filter
});

export const FETCH_COURTS_REQUEST = 'FETCH_COURTS_REQUEST';
export const fetchCourtsRequest = (filter) => ({
  type: FETCH_COURTS_REQUEST,
  filter
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

export const FETCH_SINGLE_COURT_SUCCESS = 'FETCH_SINGLE_COURT_SUCCESS';
export const fetchSingleCourtSuccess = singleCourt => ({
  type: FETCH_SINGLE_COURT_SUCCESS,
  singleCourt
});

export const FETCH_SINGLE_COURT_ERROR = 'FETCH_SINGLE_COURT_ERROR';
export const fetchSingleCourtError = error => ({
  type: FETCH_SINGLE_COURT_ERROR,
  error
});

export const fetchCourts = filter => dispatch => {
  // dispatch(fetchCourtsRequest(filter)); --- DO I NEED THIS CODE?
  let fetchURL = `${API_BASE_URL}/courts`;
  if (filter) {
    fetchURL = `${API_BASE_URL}/courts?zip=${filter}`;
  }
  return fetch(fetchURL)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchCourtsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCourtsError(err));
    });
};

export const fetchSingleCourt = id => dispatch => {
  //dispatch(fetchCourtsRequest(id));
  return fetch(`${API_BASE_URL}/courts/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchSingleCourtSuccess(data));
    })
    .catch(err => {
      dispatch(fetchSingleCourtError(err));
    });
};