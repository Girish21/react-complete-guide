import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = props =>
  props.show ? (
    <div onClick={props.click} className={classes.BackDrop} />
  ) : null;

export default backdrop;
