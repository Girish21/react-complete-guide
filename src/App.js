import React, { Component } from "react";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./App.module.css";

import asyncComponent from "./HOC/asyncComponent/asyncComponent";

import Layout from "./container/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

const ordersComponent = asyncComponent(() =>
  import("./container/Orders/Orders")
);

const checkoutComponent = asyncComponent(() =>
  import("./container/Checkout/Checkout")
);

const authComponent = asyncComponent(() => import("./container/auth/auth"));

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            {this.props.isAuthenticated && (
              <Route path="/checkout" component={checkoutComponent} />
            )}
            {this.props.isAuthenticated && (
              <Route path="/orders" component={ordersComponent} />
            )}
            <Route path="/auth" component={authComponent} />
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
