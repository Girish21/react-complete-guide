import React from "react";

import PropTypes from "prop-types";

import Aux from "../../../AuxHOC";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  shouldComponentUpdate(nextProp, nextState) {
    return nextProp.showModal !== this.props.show;
  }
  render() {
    return (
      <Modal click={this.props.click} show={this.props.showModal}>
        <Aux>
          <h4>Your Order</h4>
          <p>A delicious Burger with:</p>
          <ul>
            {Object.keys(this.props.ingredients).map((igKey, i) => {
              if (this.props.ingredients[igKey] !== 0) {
                return (
                  <li key={i}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>{" "}
                    : {this.props.ingredients[igKey]}
                  </li>
                );
              } else return null;
            })}
          </ul>
          <p>
            <strong>Order Total: {this.props.totalPrice.toFixed(2)}</strong>
          </p>
          <p>Continue to Checkout?</p>
          <Button click={this.props.click} type={"Success"}>
            Continue
          </Button>
          <Button click={this.props.click} type={"Danger"}>
            Cancel
          </Button>
        </Aux>
      </Modal>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  checkoutHandler: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default OrderSummary;
