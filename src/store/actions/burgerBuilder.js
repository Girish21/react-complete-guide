export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENT";

export const STOPPED_BUILDING_BURGER = "STOPPED_BUILDING_BURGER";

export const addIngredient = payload => {
  return {
    type: ADD_INGREDIENT,
    payload: payload
  };
};

export const deleteIngredient = payload => {
  return {
    type: DELETE_INGREDIENT,
    payload: payload
  };
};

export const stopBuildingBurger = () => {
  return {
    type: STOPPED_BUILDING_BURGER
  };
};

export const clearIngredients = () => {
  return {
    type: CLEAR_INGREDIENTS
  };
};
