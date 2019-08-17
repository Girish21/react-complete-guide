import React from "react";
import Aux from "../AuxHOC";

const charComponent = ({ arr }) => {
  const customStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  let length = arr.length;
  let charArray = [];

  for (let i = 0; i < length; i++) charArray.push(arr.charAt(i));

  return (
    <Aux>
      {charArray.map((ele, index) => (
        <div style={customStyle} key={index}>
          {ele}
        </div>
      ))}
    </Aux>
  );
};

export default charComponent;
