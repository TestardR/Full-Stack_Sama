import axios from 'axios';

import { GET_USERS, USER_LOADING, GET_USER } from './types';

// Get all Users
export const getUsers = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get('/api/users')
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_USERS,
        payload: null
      })
    );
};

// Get a user
export const getUser = id => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USER,
      payload: { status: err.response.status }
    });
  }
};

// Profile loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
