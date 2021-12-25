import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USERS,
});
const EditUser = (user) => ({
  type: types.GET_USER_BY_ID,
  payload: user.data,
});

const updatedUser = () => ({
  type: types.UPDATE_USER_BY_ID,
});
export const loadUser = () => {
  return function (dispatch) {
    axios
      .get(`https://reqres.in/api/users`)
      .then((response) => {
        console.log("response from api", response);
        dispatch(getUsers(response.data));
      })
      .catch((error) => console.log("ERROR" + error));
  };
};

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log("response from api", response);
        dispatch(userDeleted());
        // dispatch(getUsers(response.data));
      })
      .catch((error) => console.log("ERROR" + error));
  };
};

export const getUserById = (id) => {
  return function (dispatch) {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log("response from api", response);
        dispatch(EditUser(response.data));
        // dispatch(getUsers(response.data));
      })
      .catch((error) => console.log("ERROR" + error));
  };
};

export const UpdateById = (user, id) => {
  return function (dispatch) {
    axios
      .put(`https://reqres.in/api/users/${id}`, user)
      .then((response) => {
        console.log("response from api", response);
        dispatch(updatedUser());
        // dispatch(getUsers(response.data));
      })
      .catch((error) => console.log("ERROR" + error));
  };
};
