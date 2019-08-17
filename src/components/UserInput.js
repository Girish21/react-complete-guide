import React from "react";

const userInput = props => {
  return (
    <div>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default userInput;
