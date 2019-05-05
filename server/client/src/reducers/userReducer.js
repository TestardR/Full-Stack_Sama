import { GET_USERS, USER_LOADING, GET_USER } from '../actions/types';

const initialState = {
  users: null,
  user: null,
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    default:
      return state;
  }
}
