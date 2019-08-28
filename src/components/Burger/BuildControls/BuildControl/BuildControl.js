import React from "react";

import PropTypes from "prop-types";

import classes from "./BuildControl.module.css";

const burgerControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.More}
        onClick={() => props.addIngredient(props.label.toLowerCase())}
      >
        More
      </button>
      <button
        disabled={props.disabled}
        className={classes.Less}
        onClick={() => props.deleteIngredient(props.label.toLowerCase())}
      >
        Less
      </button>
    </div>
  );
};

burgerControl.prototype = {
  label: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default burgerControl;
