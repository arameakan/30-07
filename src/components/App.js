import React from "react";
import User from "./User";
import UsersList from "./UsersList";

class App extends React.Component {
  render() {
    return (
      <div>
        <User title={"Student"} />

        <UsersList />
      </div>
    );
  }
}

export default App;
