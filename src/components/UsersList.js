import React, { Component } from "react";
import { connect } from "react-redux";

class UsersList extends Component {
  render() {
    const users = this.props.users;

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        {users.map((user, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td>{user.username}</td>
                <td>{user.age}</td>
              </tr>
            </tbody>
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
