import React from "react";

import classes from "./cockpit.module.css";

const cockpit = props => {
  let appliedClasses = [];

  let btnClass = "";

  if (props.canShow) btnClass = classes.Red;
  if (props.persons.length <= 2) {
    appliedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    appliedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <p className={appliedClasses.join(" ")}>This really works</p>
      <button className={btnClass} onClick={props.toggle}>
        Toggle
      </button>
    </div>
  );
};

export default cockpit;
