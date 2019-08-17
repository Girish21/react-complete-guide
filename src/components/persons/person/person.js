import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.delete}>Hi {props.name}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
