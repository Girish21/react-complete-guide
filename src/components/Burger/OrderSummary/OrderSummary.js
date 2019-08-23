import React from "react";

import PropTypes from "prop-types";

import Aux from "../../../AuxHOC";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";

const orderSummary = ({
  ingredients,
  showModal,
  click,
  checkoutHandler,
  totalPrice
}) => (
  <Modal click={click} show={showModal}>
    <Aux>
      <h4>Your Order</h4>
      <p>A delicious Burger with:</p>
      <ul>
        {Object.keys(ingredients).map((igKey, i) => {
          if (ingredients[igKey] !== 0) {
            return (
              <li key={i}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
                {ingredients[igKey]}
              </li>
            );
          } else return null;
        })}
      </ul>
      <p>
        <strong>Order Total: {totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button click={click} type={"Success"}>
        Continue
      </Button>
      <Button click={click} type={"Danger"}>
        Cancel
      </Button>
    </Aux>
  </Modal>
);

orderSummary.prototype = {
  ingredients: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  checkoutHandler: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default orderSummary;
