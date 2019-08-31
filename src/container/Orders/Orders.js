import React, { Component } from "react";

import { connect } from "react-redux";

import Order from "../../components/Order/Order";

class Orders extends Component {
  render() {
    return (
      <div>
        {this.props.orders.length > 0 &&
          this.props.orders.map((obj, i) => (
            <Order key={i} ingredients={obj.ingredients} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orderReducer.orders
  };
};

export default connect(mapStateToProps)(Orders);
