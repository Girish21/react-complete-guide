import React, { Component } from "react";
import "./App.css";
import UserUnput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    userName: ""
  };

  userInputHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserUnput change={this.userInputHandler} value={this.state.userName} />
        <UserOutput name={this.state.userName} />
        <UserOutput name={this.state.userName} />
        <UserOutput name={this.state.userName} />
      </div>
    );
  }
}

export default App;
