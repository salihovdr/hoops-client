
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

// export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
// export const fetchEventsRequest = () => ({
//   type: FETCH_EVENTS_REQUEST
// });

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

export const FETCH_SINGLE_EVENT_SUCCESS = 'FETCH_SINGLE_EVENT_SUCCESS';
export const fetchSingleEventSuccess = singleEvent => ({
  type: FETCH_SINGLE_EVENT_SUCCESS,
  singleEvent
});

export const FETCH_SINGLE_EVENT_ERROR = 'FETCH_SINGLE_EVENT_ERROR';
export const fetchSingleEventError = error => ({
  type: FETCH_SINGLE_EVENT_ERROR,
  error
});

export const CREATE_EVENT = 'CREATE_EVENT';
export const createEvent = (title, description, date, time, courtId) => ({
  type: CREATE_EVENT,
  title,
  description,
  date,
  time,
  courtId
});

export const fetchEvents = () => dispatch => {
  return fetch(`${API_BASE_URL}/events`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchEventsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchEventsError(err));
    });
};

export const fetchSingleEvent = id => dispatch => {
  //dispatch(fetchEventsRequest(id));
  return fetch(`${API_BASE_URL}/events/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchSingleEventSuccess(data));
    })
    .catch(err => {
      dispatch(fetchSingleEventError(err));
    });
};

export const postEvent = (title, description, timestamp, courtId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      'Authorization': `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, timestamp, courtId })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(event => {
      dispatch(createEvent(event));
    })
    .catch(err => {
      dispatch(fetchEventsError(err));
    });
};