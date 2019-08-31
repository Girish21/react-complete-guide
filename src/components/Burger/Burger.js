import React from "react";

import classes from "./Burger.module.css";

import IngredientTypes from "./BurgerIngredient/IngredientType";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let ingredients = [];
  if (props.ingredients) {
    ingredients = Object.keys(props.ingredients)
      .map((ingredient, i) => {
        return [...Array(props.ingredients[ingredient])].map((ele, j) => {
          return (
            <BurgerIngredient
              type={IngredientTypes[ingredient]}
              key={Math.random()}
            />
          );
        });
      })
      .reduce((arr, ele) => [...arr, ...ele], []);
  }

  if (ingredients.length === 0)
    ingredients = <h4>Please start adding ingredients to the Burger</h4>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={IngredientTypes.breadTop} />
      {ingredients}
      <BurgerIngredient type={IngredientTypes.breadBottom} />
    </div>
  );
};

export default burger;
