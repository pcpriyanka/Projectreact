import React, { Component } from "react";



export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      post: false,
     
    };
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ users: [...result] });
      });

  };
  
  render() {
    return (
      <div>
        <h3>list of users</h3>
        <button onClick={this.getUsers}>click me to get the users list</button>

        <table className="table">
          {this.state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street},
                {user.address.suite},
                {user.address.city},
                {user.address.zipcode},
                {user.address.geo.lat},
                {user.address.geo.lng}
              </td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                {user.company.name},
                {user.company.catchphrase},
                {user.company.bs}
              </td>
            </tr>

          ))}
        </table>
        
</div>
    );
  }
}
