import axios from 'axios';

import { GET_USERS, USER_LOADING } from './types';

// Get all Profiles
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

// Profile loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
