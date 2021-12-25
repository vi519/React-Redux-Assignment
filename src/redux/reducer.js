import * as types from "./actionType";

const intialState = {
  user: [],
  users: {},
  loading: true,
};

const usersReducers = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USERS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_USER_BY_ID:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.UPDATE_USER_BY_ID:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
