import React from "react";

import classes from "./Order.module.css";

const order = props => (
  <div className={classes.Order}>
    <div>
      <h4>Ingredients</h4>
      <ul>
        {Object.keys(props.ingredients).map((key, i) => (
          <li key={i}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>:
            {" " + props.ingredients[key]}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default order;
