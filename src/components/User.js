import React, { Component } from "react";
import { addUser } from "../actions";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        age: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch(addUser(data));
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.data.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.data.age}
            onChange={this.handleChange}
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

export default User;
