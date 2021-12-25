import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUserById, UpdateById } from "../redux/actions";
function Edit() {

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });
  //const history = useHistory();
  
  const navigate = useNavigate();
  let { id } = useParams();
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  useEffect(() => {
    if (users) {
      setState({ ...users });
    }
  }, [users]);

  function handleChange(e) {
    setState({ ...state, [e.target.id]: e.target.value });
    console.log(state);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(UpdateById(state, id));
    alert("Data is inserted");
    navigate("/");
  }
  function handleBackNavigation() {
  
    navigate("/");
  }

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={handleBackNavigation}
          class="btn btn-warning"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Go Back
        </button>
      </div>
      <h1 class="text-center">Edit User</h1>
      <form class="row mx-md-n5" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first_name"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
            placeholder="Enter email"
            value={state.first_name || ""}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="last_name"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            value={state.last_name || ""}
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            value={state.email || ""}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Avatar</label>
          <input
            type="text"
            class="form-control"
            id="avatar"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            value={state.avatar || ""}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
