import React, { Component } from "react";

import { Route } from "react-router-dom";

import CheckoutSummay from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacaon: 0,
      cheese: 0,
      meat: 0
    },
    price: null
  };

  componentDidMount() {
    console.log(this.props);
    const { ingredients, price } = this.props.history.location.state;
    this.setState({ ingredients: ingredients, price: price });
  }

  render() {
    return (
      <div>
        <CheckoutSummay ingredients={this.state.ingredients} />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
