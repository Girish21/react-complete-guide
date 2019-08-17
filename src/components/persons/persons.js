import React from "react";
import Person from "./person/person";

const persons = props => (
  <Person name={props.person.name} change={props.change} delete={props.click} />
);

export default persons;
