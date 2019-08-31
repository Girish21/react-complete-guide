import React, { Component } from "react";

import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

import Aux from "../../HOC/AuxHOC/AuxHOC";

import { purchaseStart } from "../../store/actions/order";

import CheckoutSummay from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  componentDidMount() {
    this.props.startPurchasing();
  }
  render() {
    let ingredients = Object.keys(this.props.ingredients)
      .map((ingredient, i) => {
        return [...Array(this.props.ingredients[ingredient])].map((ele, j) => {
          return ele;
        });
      })
      .reduce((arr, ele) => [...arr, ...ele], []);
    return (
      <Aux>
        {ingredients.length > 0 && (
          <div>
            <CheckoutSummay ingredients={this.props.ingredients} />
            <Route
              path={this.props.match.url + "/contact-data"}
              component={ContactData}
            />
          </div>
        )}
        {ingredients.length === 0 && <Redirect to="/" />}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startPurchasing: () => dispatch(purchaseStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
