import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersFunction = () => {
  let myUsers = [];
  const [users, setUsers] = useState(myUsers);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  });

  return (
    <div>
      <h1>UsersFuction</h1>
      <hr />
      <div>
        {users.map((user) => (
          <div>
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Username:</b> {user.username}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default UsersFunction;
