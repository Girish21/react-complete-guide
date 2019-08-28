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

const buildControls = ({
  addIngredient,
  deleteIngredient,
  disabledArray,
  totalPrice,
  disableOrder,
  order
}) => {
  return (
    <div className={classes.BuildControls}>
      <div>
        Total Price: <strong>{totalPrice.toFixed(2)}</strong>
      </div>
      {controls.map((ele, i) => (
        <BuildControl
          label={ele.label}
          key={i}
          addIngredient={addIngredient}
          deleteIngredient={deleteIngredient}
          disabled={disabledArray[ele.label.toLowerCase()]}
        />
      ))}
      <button
        disabled={!disableOrder}
        className={classes.OrderButton}
        onClick={order}
      >
        Order Now
      </button>
    </div>
  );
};

buildControls.prototype = {
  addIngredient: PropTypes.func.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
  disabledArray: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  disableOrder: PropTypes.bool.isRequired,
  order: PropTypes.func.isRequired
};

export default buildControls;
