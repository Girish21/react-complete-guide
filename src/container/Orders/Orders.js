import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { fetchAllOrders } from "../../store/actions/order";
import httpErrorHandler from "../../HOC/Error/ErrorHandler";

import Order from "../../components/Order/Order";

class Orders extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchOrders(this.props.token, this.props.localId);
    }, 0);
  }

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
    orders: state.orderReducer.orders,
    token: state.authReducer.userData.idToken,
    localId: state.authReducer.userData.localId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(fetchAllOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(httpErrorHandler(withRouter(Orders)));
