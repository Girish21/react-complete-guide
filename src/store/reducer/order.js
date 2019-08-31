import {
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_START,
  PURCHASE_START,
  FETCH_ALL_ORDERS_SUCCESS,
  FETCH_ALL_ORDERS_FAIL
} from "../actions/order";

const initState = {
  orders: [],
  isLoading: false,
  purchased: false,
  error: "",
  fetchOrdersError: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ORDER_START: {
      return { ...state, isLoading: true };
    }
    case PURCHASE_START:
      return { ...state, purchased: false };
    case ORDER_SUCCESS:
      const order = {
        ...action.payload.orderData,
        id: action.payload.orderId
      };
      return {
        ...state,
        error: "",
        isLoading: false,
        purchased: true,
        orders: state.orders.concat(order)
      };
    case ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FETCH_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        orders: state.orders.concat([...action.payload]),
        fetchOrdersError: ""
      };
    case FETCH_ALL_ORDERS_FAIL:
      return {
        ...state,
        fetchOrdersError: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
