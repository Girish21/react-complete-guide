import React from "react";

import PropTypes from "prop-types";

import Aux from "../../../HOC/AuxHOC/AuxHOC";
import withErrorMessage from "../../../HOC/Error/ErrorHandler";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";
import Axios from "../../../AxiosOrders";

class OrderSummary extends React.Component {
  shouldComponentUpdate(nextProp, nextState) {
    return nextProp.showModal !== this.props.show;
  }
  render() {
    return (
      this.props.ingredients && (
        <Modal click={this.props.click} show={this.props.showModal}>
          {!this.props.requestSent && (
            <Aux>
              <h4>Your Order</h4>
              <p>A delicious Burger with:</p>
              <ul>
                {Object.keys(this.props.ingredients).map((igKey, i) => {
                  if (this.props.ingredients[igKey] !== 0) {
                    return (
                      <li key={i}>
                        <span style={{ textTransform: "capitalize" }}>
                          {igKey}
                        </span>{" "}
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
              <Button click={this.props.checkoutHandler} type={"Success"}>
                Continue
              </Button>
              <Button click={this.props.click} type={"Danger"}>
                Cancel
              </Button>
            </Aux>
          )}
          {this.props.requestSent && <Spinner />}
        </Modal>
      )
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  checkoutHandler: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default withErrorMessage(OrderSummary, Axios);
