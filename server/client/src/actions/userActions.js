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

// Get a user by id
export const getUser = userId => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(`/api/users/${userId}`)
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(
      dispatch({
        type: GET_USER,
        payload: null
      })
    );
};

// Profile loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
