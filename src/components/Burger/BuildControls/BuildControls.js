import React from "react";

import PropTypes from "prop-types";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad" },
  { label: "Bacaon" },
  { label: "Cheese" },
  { label: "Meat" }
];

const buildControls = ({ changeHandler, disabledArray, totalPrice }) => {
  return (
    <div className={classes.BuildControls}>
      <div>
        Total Price: <strong>{totalPrice.toFixed(2)}</strong>
      </div>
      {controls.map((ele, i) => (
        <BuildControl
          label={ele.label}
          key={i}
          changeHandler={changeHandler}
          disabled={disabledArray[ele.label.toLowerCase()]}
        />
      ))}
    </div>
  );
};

buildControls.prototype = {
  changeHandler: PropTypes.func.isRequired,
  disabledArray: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default buildControls;
