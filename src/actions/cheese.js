
import { API_BASE_URL } from '../config';

export const ADD_CHEESE = 'ADD_CHEESE';
export const addCheese = (name) => ({
  type: ADD_CHEESE,
  name
})

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  return fetch(`${API_BASE_URL}/cheeses`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then (data => {
      dispatch(fetchCheesesSuccess(data))
    })
    .catch(err => {
      dispatch(fetchCheesesError(err))
    })
}

export const postCheese = (name) => dispatch => {
  return fetch(`${API_BASE_URL}/cheeses`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name })
  })
  .then(res => res.json())
  .then(cheese => dispatch(addCheese(cheese)));
}