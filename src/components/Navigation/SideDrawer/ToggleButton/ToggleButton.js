import React from "react";

import classes from "./ToggleButton.module.css";

const toggle = props => {
  return (
    <div onClick={props.open} className={classes.ToggleButton}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default toggle;
