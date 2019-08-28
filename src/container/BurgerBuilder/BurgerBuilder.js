import React from "react";

import { connect } from "react-redux";
import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../../store/actions/actions";

import Aux from "../../HOC/AuxHOC/AuxHOC";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrderSummary: false
    };
  }

  orderHandler = () => {
    this.setState({ showOrderSummary: true });
  };

  backdropClickHandler = () => {
    this.setState({ showOrderSummary: false });
  };

  checkoutHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const decrementDisabled = { ...this.props.ingredients };
    let orderDisabled = false;
    Object.keys(decrementDisabled).forEach(key => {
      decrementDisabled[key] = decrementDisabled[key] === 0;
      orderDisabled = orderDisabled || !decrementDisabled[key];
    });
    return (
      <Aux>
        <Burger ingredients={this.props.ingredients} />
        <br />
        <BurgerControls
          addIngredient={this.props.onClickAddIngredient}
          deleteIngredient={this.props.onClickDeleteIngredient}
          disabledArray={decrementDisabled}
          totalPrice={this.props.totalPrice}
          disableOrder={orderDisabled}
          order={this.orderHandler}
        />
        <OrderSummary
          click={this.backdropClickHandler}
          showModal={this.state.showOrderSummary}
          ingredients={this.props.ingredients}
          checkoutHandler={this.checkoutHandler}
          totalPrice={this.props.totalPrice}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAddIngredient: ingredient =>
      dispatch({ type: ADD_INGREDIENT, payload: { ingredient: ingredient } }),
    onClickDeleteIngredient: ingredient =>
      dispatch({
        type: DELETE_INGREDIENT,
        payload: { ingredient: ingredient }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
