import React from "react";

import Aux from "../../AuxHOC";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Aux>
        <code>Burger</code>
        <br />
        <code>Build Controls</code>
      </Aux>
    );
  }
}

export default BurgerBuilder;
