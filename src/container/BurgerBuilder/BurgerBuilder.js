import React from "react";

import Aux from "../../AuxHOC";

import OperatorType from "./BurgerOperations";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDINT_PRICE = Object.freeze({
  salad: 0.5,
  bacaon: 0.8,
  cheese: 0.6,
  meat: 1.3
});

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacaon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 0
    };
  }

  updateIngredient = (type, operator) => {
    let newIngredients = { ...this.state.ingredients };
    let newTotalPrice = this.state.totalPrice;
    switch (operator) {
      case OperatorType.increment:
        newIngredients[type] += 1;
        newTotalPrice += INGREDINT_PRICE[type];
        break;
      case OperatorType.decrement:
        if (newIngredients[type] > 0) {
          newIngredients[type] -= 1;
          newTotalPrice -= INGREDINT_PRICE[type];
        }
        break;
      default:
    }
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });
  };

  render() {
    const disabled = { ...this.state.ingredients };
    Object.keys(disabled).forEach(key => {
      disabled[key] = disabled[key] === 0;
    });
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <br />
        <BurgerControls
          changeHandler={this.updateIngredient}
          disabledArray={disabled}
          totalPrice={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
