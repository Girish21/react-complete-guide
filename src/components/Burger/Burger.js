import React from "react";

import classes from "./Burger.module.css";

import IngredientTypes from "./BurgerIngredient/IngredientType";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let ingredients = Object.keys(props.ingredients)
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

  console.log(ingredients);

  if (ingredients.length !== 0)
    ingredients = [
      <BurgerIngredient type={IngredientTypes.breadTop} key={Math.random()} />,
      ...ingredients,
      <BurgerIngredient
        type={IngredientTypes.breadBottom}
        key={Math.random()}
      />
    ];
  else ingredients = <h1>Please start adding ingredients to the Burger</h1>;

  return <div className={classes.Burger}>{ingredients}</div>;
};

export default burger;
