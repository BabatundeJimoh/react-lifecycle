import React, { Component } from "react";

class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log("users:", users);
        this.setState({ users: users });
      });
  }

  render() {
    return (
      <div>
        <h1>UsersClass</h1>
        <hr />
        <div>
          {this.state.users.map((user) => (
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
  }
}

export default UsersClass;
