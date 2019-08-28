import React, { Component } from "react";

import { connect } from "react-redux";

import { Route } from "react-router-dom";

import CheckoutSummay from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  render() {
    return (
      <div>
        <CheckoutSummay ingredients={this.props.ingredients} />
        <Route
          path={this.props.match.url + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

export default connect(
  mapStateToProps,
  null
)(Checkout);
