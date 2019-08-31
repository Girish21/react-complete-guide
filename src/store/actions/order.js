import Axios from "../../AxiosOrders";

export const PLACE_ORDER = "PLACE_ORDER";

export const ORDER_SUCCESS = "ORDER_SUCCESS";

export const ORDER_FAIL = "ORER_FAIL";

export const ORDER_START = "ORDER_START";

export const PURCHASE_START = "PURCHASE_START";

export const FETCH_ALL_ORDERS_SUCCESS = "FETCH_ALL_ORDERS_SUCCESS";

export const FETCH_ALL_ORDERS_FAIL = "FETCH_ALL_ORDERS_FAIL";

export const orderSuccess = (id, orderData) => {
  return {
    type: ORDER_SUCCESS,
    payload: {
      orderId: id,
      orderData: orderData
    }
  };
};

export const orderFail = err => {
  return {
    type: ORDER_FAIL,
    payload: err
  };
};

export const orderStart = () => {
  return {
    type: ORDER_START
  };
};

export const purchaseStart = () => {
  return {
    type: PURCHASE_START
  };
};

export const fetchAllOrdersSuccess = payload => {
  return {
    type: FETCH_ALL_ORDERS_SUCCESS,
    payload: payload
  };
};

export const fetchAllOrderFail = error => {
  return {
    type: FETCH_ALL_ORDERS_FAIL,
    payload: error
  };
};

export const fetchAllOrders = () => {
  return async dispatch => {
    try {
      const orders = await Axios.get("orders.json");
      const orderArray = [];
      Object.keys(orders.data).forEach(key =>
        orderArray.push({ ...orders.data[key], id: key })
      );
      dispatch(fetchAllOrdersSuccess(orderArray));
    } catch (e) {
      console.log(e);
      dispatch(fetchAllOrderFail(e.response.data.error));
    }
  };
};

export const placeOrder = payload => {
  return async dispatch => {
    dispatch(orderStart());
    try {
      const id = await Axios.post("orders.json", payload);
      dispatch(orderSuccess(id.data.name, payload));
      console.log(payload);
    } catch (e) {
      console.log(e);
      dispatch(orderFail(e));
    }
  };
};
