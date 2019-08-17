import React, { Component } from "react";
import classes from "./App.module.css";

import Cockpit from "./components/cockpit/cockpit";
import Persons from "./components/persons/persons";

class App extends Component {
  state = {
    persons: [{ name: "lorem" }, { name: "ipsum" }],
    canShowPersons: false
  };

  onChangeHandler = (event, id) => {
    const person = { ...this.state.persons[id] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[id] = person;

    this.setState({ persons: persons });
  };

  deleteHandler = id => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);

    this.setState({ persons: persons });
  };

  toggleHandler = () => {
    const state = this.state.canShowPersons;

    this.setState({ canShowPersons: !state });
  };

  render() {
    let persons;

    if (this.state.canShowPersons) {
      persons = this.state.persons.map((ele, id) => (
        <Persons
          key={id}
          person={ele}
          click={() => {
            this.deleteHandler(id);
          }}
          change={event => {
            this.onChangeHandler(event, id);
          }}
        />
      ));
    }

    return (
      <div className={classes.App}>
        <Cockpit
          toggle={this.toggleHandler}
          persons={this.state.persons}
          canShow={this.state.canShowPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
