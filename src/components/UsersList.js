import React, { Component } from "react";
import { connect } from "react-redux";

class UsersList extends Component {
  render() {
    const users = this.props.users;

    return (
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
        {users.map((user, key) => {
          return (
            <tr key={key}>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UsersList);
