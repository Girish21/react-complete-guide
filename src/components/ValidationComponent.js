import React from "react";

const validationComponent = ({ length }) => {
  if (length !== 0) {
    if (length > 5) return <p>Too long!</p>;
    else return <p>Too short!</p>;
  } else return null;
};

export default validationComponent;
