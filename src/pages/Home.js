import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, loadUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure, you wanted to delete the user? ")) {
      dispatch(deleteUsers(id));
    }

    dispatch(loadUser());
  };
  return (
    <div>
      <h1 class="text-center">Users Table</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.data &&
            users.data.map((user) => (
              <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.avatar}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => navigate(`/editUser/${user.id}`)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
