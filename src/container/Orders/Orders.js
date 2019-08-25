import React, { Component } from "react";

import classes from "./Orders.module.css";

import axios from "../../AxiosOrders";

import Order from "../../components/Order/Order";

class Orders extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    const orders = await axios.get("orders.json");
    const orderArray = [];
    Object.keys(orders.data).forEach(key => orderArray.push(orders.data[key]));
    this.setState({ orders: orderArray });
  }

  render() {
    return (
      <div>
        {this.state.orders.length > 0 &&
          this.state.orders.map((obj, i) => (
            <Order key={i} ingredients={obj.ingredients} />
          ))}
      </div>
    );
  }
}

export default Orders;
