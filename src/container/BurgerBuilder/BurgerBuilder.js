import React from "react";

import Aux from "../../AuxHOC";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacaon: 1,
        cheese: 1,
        meat: 1
      }
    };
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <br />
        <code>Burger Control</code>
      </Aux>
    );
  }
}

export default BurgerBuilder;
