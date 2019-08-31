import * as Actions from "../actions/burgerBuilder";

const initState = {
  ingredients: {
    salad: 0,
    bacaon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 3
};

const INGREDINT_PRICE = Object.freeze({
  salad: 0.5,
  bacaon: 0.8,
  cheese: 0.6,
  meat: 1.3
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]:
            state.ingredients[action.payload.ingredient] + 1
        },
        totalPrice:
          state.totalPrice + INGREDINT_PRICE[action.payload.ingredient]
      };
    case Actions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]:
            state.ingredients[action.payload.ingredient] - 1
        },
        totalPrice:
          state.totalPrice - INGREDINT_PRICE[action.payload.ingredient]
      };
    case Actions.CLEAR_INGREDIENTS:
      return {
        ...state,
        ingredients: initState.ingredients,
        totalPrice: initState.totalPrice
      };
    default:
      return state;
  }
};

export default reducer;
