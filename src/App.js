import React, { Component } from "react";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./App.module.css";
import Layout from "./container/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders/Orders";
import Auth from "./container/auth/auth";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            {this.props.isAuthenticated && (
              <Route path="/checkout" component={Checkout} />
            )}
            {this.props.isAuthenticated && (
              <Route path="/orders" component={Orders} />
            )}
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
            <Redirect from="/" to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.userData !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
