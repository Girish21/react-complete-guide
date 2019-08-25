import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import classes from "./App.module.css";
import Layout from "./container/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Redirect from="/" to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
