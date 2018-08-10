
import { API_BASE_URL } from '../config';

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST
});

export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  events
});

export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const fetchEventsError = error => ({
  type: FETCH_EVENTS_ERROR,
  error
});

export const CREATE_EVENT = 'CREATE_EVENT';
export const createEvent = (title, description, date, time) => ({
  type: CREATE_EVENT,
  title,
  description,
  date,
  time
});

export const fetchEvents = () => dispatch => {
  dispatch(fetchEventsRequest());
  let fetchURL = `${API_BASE_URL}/events`;
  return fetch(fetchURL)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      dispatch(fetchEventsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchEventsError(err));
    });
};

export const fetchSingleEvent = id => dispatch => {
  dispatch(fetchEventsRequest(id));
  let fetchURL = `${API_BASE_URL}/events/${id}`;

  return fetch(fetchURL)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      dispatch(fetchEventsSuccess([data]));
    })
    .catch(err => {
      dispatch(fetchEventsError(err));
    });
};

export const postEvent = (title, description, date, time) => dispatch => {
  return fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, date, time })
  })
    .then(res => res.json())
    .then(event => dispatch(createEvent(event)));
};

