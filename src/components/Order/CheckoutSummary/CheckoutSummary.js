import React from "react";

import { withRouter } from "react-router-dom";

import classes from "./CheckoutSummary.module.css";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope that it tastes well!</h1>
    <div style={{ width: "100%", margin: "auto" }}>
      <Burger ingredients={props.ingredients} />
      <Button
        type="Success"
        click={() => props.history.push(props.match.url + "/contact-data")}
      >
        Continue
      </Button>
      <Button type="Danger" click={() => props.history.goBack()}>
        Cancel
      </Button>
    </div>
  </div>
);

export default withRouter(checkoutSummary);
