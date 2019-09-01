import React, { Component } from "react";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { auth } from "../../store/actions/auth";

import classes from "./auth.module.css";

import Aux from "../../HOC/AuxHOC/AuxHOC";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {
  state = {
    authForm: {
      emailId: {
        elementType: "input",
        elementConfig: {
          type: "email",
          name: "emailId",
          placeholder: "Email Id"
        },
        validation: {
          required: true,
          email: true
        },
        value: "",
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          name: "password",
          placeholder: "Password"
        },
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
        value: ""
      }
    },
    signIn: false
  };

  validationUtil = (value, validation) => {
    let valid = true;
    if (validation.required) {
      valid = valid && value !== "";
    }
    if (validation.email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      valid = valid && re.test(value);
    }
    if (validation.minLength) {
      valid = valid && value.length >= validation.minLength;
    }

    return valid;
  };

  onTouchHandler = name => {
    const copy = { ...this.state.authForm };
    const inputElement = { ...copy[name] };
    inputElement.touched = true;
    copy[name] = inputElement;
    this.setState({ authForm: copy });
  };

  onInputHandler = (event, name) => {
    const copy = { ...this.state.authForm };
    const inputElement = { ...copy[name] };
    // console.log(copy, inputElement);
    inputElement.value = event.target.value.trim();
    inputElement.valid = this.validationUtil(
      event.target.value.trim(),
      inputElement.validation
    );
    copy[name] = inputElement;
    this.setState({ authForm: copy });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.authenticate(
      this.state.authForm.emailId.value,
      this.state.authForm.password.value,
      this.state.signIn
    );
  };

  toggleAuth = () => {
    this.setState({ signIn: !this.state.signIn });
  };

  render() {
    let formValid = true;
    const form = Object.keys(this.state.authForm).map((key, i) => {
      formValid = formValid && this.state.authForm[key].value;
      return (
        <Input
          key={i}
          elementConfig={this.state.authForm[key].elementConfig}
          value={this.state.authForm[key].value}
          valid={this.state.authForm[key].valid}
          touched={this.state.authForm[key].touched}
          required={this.state.authForm[key].validation.required}
          change={event =>
            this.onInputHandler(
              event,
              this.state.authForm[key].elementConfig.name
            )
          }
          touchedHandler={() =>
            this.onTouchHandler(this.state.authForm[key].elementConfig.name)
          }
        />
      );
    });
    let redirect = null;
    if (this.props.isAuthenticated && this.props.isBuildingBurger)
      redirect = <Redirect to="/checkout" />;
    else if (this.props.isAuthenticated) redirect = <Redirect to="/" />;

    return (
      <Aux>
        {redirect}
        {this.props.loading ? (
          <div className={classes.AuthForm}>
            <Spinner />
          </div>
        ) : (
          <div className={classes.AuthForm}>
            <form onSubmit={this.submitHandler}>
              {form}
              {this.props.errorMessage && (
                <div className={classes.ErrorMessage}>
                  <p>{this.props.errorMessage.split("_").join(" ")}</p>
                </div>
              )}
              <Button
                type="Success"
                disabled={!formValid}
                click={this.submitHandler}
              >
                Submit
              </Button>
            </form>
            <Button type="Danger" click={this.toggleAuth}>
              Switch To Sign-{this.state.signIn ? "Up" : "In"}
            </Button>
          </div>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.isLoading,
    errorMessage: state.authReducer.error,
    isAuthenticated: state.authReducer.userData !== null,
    isBuildingBurger: state.burgerReducer.buildingBurger
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (email, password, signIn) =>
      dispatch(auth(email, password, signIn))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
