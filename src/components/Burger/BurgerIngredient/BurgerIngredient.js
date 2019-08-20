import React from "react";

import PropTypes from "prop-types";

import classes from "./BurgerIngredient.module.css";

import IngredientType from "./IngredientType";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case IngredientType.breadBottom:
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case IngredientType.breadTop:
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case IngredientType.meat:
      ingredient = <div className={classes.Meat} />;
      break;
    case IngredientType.bacon:
      ingredient = <div className={classes.Bacon} />;
      break;
    case IngredientType.cheese:
      ingredient = <div className={classes.Cheese} />;
      break;
    case IngredientType.salad:
      ingredient = <div className={classes.Salad} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngredient.prototype = {
  type: PropTypes.number.isRequired
};

export default burgerIngredient;
