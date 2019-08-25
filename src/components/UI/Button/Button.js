import React from "react";

import classes from "./Button.module.css";

const button = props => (
  <button
    className={[classes.Button, classes[props.type]].join(" ")}
    disabled={props.disabled}
    onClick={props.click}
  >
    {props.children}
  </button>
);

export default button;
