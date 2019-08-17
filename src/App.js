import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    value: ""
  };

  valueChangeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.valueChangeHandler}
          value={this.state.value}
        />
        <ValidationComponent length={this.state.value.length} />
        <CharComponent arr={this.state.value} />
      </div>
    );
  }
}

export default App;
