import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/users";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addUser(this.state);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null;

const actionCreators = {
  addUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(User);
