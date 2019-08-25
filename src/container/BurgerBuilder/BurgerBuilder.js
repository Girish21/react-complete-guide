import React from "react";

import Aux from "../../HOC/AuxHOC/AuxHOC";

import OperatorType from "./BurgerOperations";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

// import Axios from "../../AxiosOrders";

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
      totalPrice: 0,
      showOrderSummary: false,
      isRequestSent: false
    };
  }

  orderHandler = () => {
    this.setState({ showOrderSummary: true });
  };

  backdropClickHandler = () => {
    this.setState({ showOrderSummary: false });
  };

  checkoutHandler = async () => {
    try {
      // const order = {
      //   ingredients: { ...this.state.ingredients },
      //   totalPrice: this.state.ingredients
      // };
      // this.setState({ isRequestSent: true });
      // await Axios.post("orders.json", order);
      // this.setState({ isRequestSent: false, showOrderSummary: false });
      // console.log(this.props);
      const state = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice
      };
      this.props.history.push("/checkout", state);
    } catch (e) {
      console.log(e);
      this.setState({
        isRequestSent: false,
        showOrderSummary: false
      });
    }
  };

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
      totalPrice: newTotalPrice,
      showOrderSummary: false
    });
  };

  render() {
    const decrementDisabled = { ...this.state.ingredients };
    let orderDisabled = false;
    Object.keys(decrementDisabled).forEach(key => {
      decrementDisabled[key] = decrementDisabled[key] === 0;
      orderDisabled = orderDisabled || !decrementDisabled[key];
    });
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <br />
        <BurgerControls
          changeHandler={this.updateIngredient}
          disabledArray={decrementDisabled}
          totalPrice={this.state.totalPrice}
          disableOrder={orderDisabled}
          order={this.orderHandler}
        />
        <OrderSummary
          click={this.backdropClickHandler}
          showModal={this.state.showOrderSummary}
          ingredients={this.state.ingredients}
          checkoutHandler={this.checkoutHandler}
          totalPrice={this.state.totalPrice}
          requestSent={this.state.isRequestSent}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
