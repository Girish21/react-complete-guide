import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import classes from "./ContactData.module.css";

import Aux from "../../../HOC/AuxHOC/AuxHOC";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    ingredients: null,
    price: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({
      ingredients: this.props.ingredients,
      price: this.props.price
    });
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.props.history.replace("/");
    }, 3000);
    // await Axios.post("orders.json", order);
  };

  render() {
    return (
      <div className={classes.ContactData}>
        {!this.state.isLoading && (
          <Aux>
            <h4>Enter your Contact Details</h4>
            <form>
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Your email" />
              <input type="text" name="street" placeholder="Your street" />
              <Button type="Success" click={this.submitHandler}>
                Submit
              </Button>
            </form>
          </Aux>
        )}
        {this.state.isLoading && <Spinner />}
      </div>
    );
  }
}

export default withRouter(ContactData);
