import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import classes from "./ContactData.module.css";

import { CLEAR_INGREDIENT } from "../../../store/actions/actions";

import Aux from "../../../HOC/AuxHOC/AuxHOC";

import Axios from "../../../AxiosOrders";

import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import httpErrorHandler from "../../../HOC/Error/ErrorHandler";

class ContactData extends Component {
  state = {
    customerDetails: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name",
          name: "name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
          name: "email"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        value: ""
      },
      address: {
        street: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Street",
            name: "street"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false,
          value: ""
        },
        pincode: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Pincode",
            name: "pincode"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false,
          value: ""
        },
        country: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Country",
            name: "country"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false,
          value: ""
        }
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", name: "Fastest" },
            { value: "cheapest", name: "Cheapest" }
          ],
          name: "deliveryMethod",
          placeholder: "Delivery Method"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        value: ""
      }
    },
    isLoading: false
  };

  componentDidMount() {
    this.setState({
      ingredients: this.props.ingredients,
      price: this.props.price
    });
  }

  submitHandler = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const userData = {};
    Object.keys(this.state.customerDetails).forEach(key => {
      if (!this.state.customerDetails[key].elementType) {
        userData[key] = {};
        Object.keys(this.state.customerDetails[key]).forEach(addrKey => {
          userData[key][addrKey] = this.state.customerDetails[key][
            addrKey
          ].value;
        });
      } else {
        userData[key] = this.state.customerDetails[key].value;
      }
    });

    const uploadObject = {};
    uploadObject["ingredients"] = this.props.ingredients;
    uploadObject["totalPrice"] = this.props.price;
    uploadObject["userData"] = userData;

    try {
      await Axios.post("orders.json", uploadObject);
      this.setState({ isLoading: false });
      this.props.clearIngredients();
      this.props.history.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  touchHandler = (event, inputIdentifier, isAddress = false) => {
    const updatedDetails = { ...this.state.customerDetails };
    if (isAddress) {
      const updatedAddress = { ...updatedDetails["address"][inputIdentifier] };
      updatedAddress.touched = true;
      updatedDetails["address"][inputIdentifier] = updatedAddress;
      this.setState({ customerDetails: updatedDetails });
    } else {
      const updatedField = { ...updatedDetails[inputIdentifier] };
      updatedField.touched = true;
      updatedDetails[inputIdentifier] = updatedField;
      this.setState({ customerDetails: updatedDetails });
    }
  };

  inputHandler = (event, inputIdentifier, isAddress = false) => {
    const updatedDetails = { ...this.state.customerDetails };
    if (isAddress) {
      const updatedAddress = { ...updatedDetails["address"][inputIdentifier] };
      updatedAddress.value = event.target.value;
      if (updatedAddress.validation.required)
        updatedAddress.valid = updatedAddress.value.trim() !== "";
      updatedDetails["address"][inputIdentifier] = updatedAddress;
      this.setState({ customerDetails: updatedDetails });
    } else {
      const updatedField = { ...updatedDetails[inputIdentifier] };
      updatedField.value = event.target.value;
      if (updatedField.validation.required)
        updatedField.valid = updatedField.value.trim() !== "";
      updatedDetails[inputIdentifier] = updatedField;
      this.setState({ customerDetails: updatedDetails });
    }
  };

  render() {
    let inner = 0;
    let formValid = true;
    const t = Object.keys(this.state.customerDetails)
      .map((key, i) => {
        if (!this.state.customerDetails[key].elementType) {
          return Object.keys(this.state.customerDetails[key]).map(
            (addrKey, j) => {
              inner = i + j + 1;
              formValid =
                formValid && this.state.customerDetails[key][addrKey].valid;
              return (
                <Input
                  key={inner}
                  elementType={
                    this.state.customerDetails[key][addrKey].elementType
                  }
                  elementConfig={
                    this.state.customerDetails[key][addrKey].elementConfig
                  }
                  valid={this.state.customerDetails[key][addrKey].valid}
                  value={this.state.customerDetails[key][addrKey].value}
                  change={event =>
                    this.inputHandler(
                      event,
                      this.state.customerDetails[key][addrKey].elementConfig
                        .name,
                      true
                    )
                  }
                  required={
                    this.state.customerDetails[key][addrKey].validation.required
                  }
                  touched={this.state.customerDetails[key][addrKey].touched}
                  touchedHandler={event =>
                    this.touchHandler(
                      event,
                      this.state.customerDetails[key][addrKey].elementConfig
                        .name,
                      true
                    )
                  }
                />
              );
            }
          );
        } else {
          formValid = formValid && this.state.customerDetails[key].valid;
          return (
            <Input
              key={inner + i}
              elementType={this.state.customerDetails[key].elementType}
              elementConfig={this.state.customerDetails[key].elementConfig}
              value={this.state.customerDetails[key].value}
              valid={this.state.customerDetails[key].valid}
              required={this.state.customerDetails[key].validation.required}
              touched={this.state.customerDetails[key].touched}
              change={event =>
                this.inputHandler(
                  event,
                  this.state.customerDetails[key].elementConfig.name
                )
              }
              touchedHandler={event =>
                this.touchHandler(
                  event,
                  this.state.customerDetails[key].elementConfig.name
                )
              }
            />
          );
        }
      })
      .reduce((arr, cur) => arr.concat(cur), []);
    return (
      <div className={classes.ContactData}>
        {!this.state.isLoading && (
          <Aux>
            <h4>Enter your Contact Details</h4>
            <form>
              {t}
              <Button
                type="Success"
                disabled={!formValid}
                click={this.submitHandler}
              >
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

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearIngredients: () => dispatch({ type: CLEAR_INGREDIENT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(httpErrorHandler(withRouter(ContactData), Axios));
