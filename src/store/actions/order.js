export const PLACE_ORDER = "PLACE_ORDER";

export const PLACE_ORDER_START = "PLACE_ORDER_START";

export const ORDER_SUCCESS = "ORDER_SUCCESS";

export const ORDER_FAIL = "ORER_FAIL";

export const ORDER_START = "ORDER_START";

export const PURCHASE_START = "PURCHASE_START";

export const FETCH_ALL_ORDER_START = "FETCH_ORDER_START";

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

export const fetchAllOrders = (token, userId) => {
  return {
    type: FETCH_ALL_ORDER_START,
    payload: {
      token,
      userId
    }
  };
};

export const placeOrder = (payload, token) => {
  return {
    type: PLACE_ORDER_START,
    payload: {
      data: payload,
      token
    }
  };
};
