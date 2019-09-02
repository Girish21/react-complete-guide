import Axios from "../../AxiosOrders";

import { put } from "redux-saga/effects";

import {
  fetchAllOrdersSuccess,
  fetchAllOrderFail,
  orderStart,
  orderSuccess,
  orderFail
} from "../actions/order";

export function* fetchAllOrdersSaga(action) {
  try {
    const orders = yield Axios.get(
      `orders.json?auth=${action.payload.token}&orderBy="userId"&equalTo="${action.payload.userId}"`
    );

    const orderArray = [];
    Object.keys(orders.data).forEach(key =>
      orderArray.push({ ...orders.data[key], id: key })
    );

    yield put(fetchAllOrdersSuccess(orderArray));
  } catch (e) {
    console.log(e, e.response);
    yield put(fetchAllOrderFail(e.response.data.error));
  }
}

export function* placeOrderSaga(action) {
  yield put(orderStart());
  try {
    const id = yield Axios.post(
      `orders.json?auth=${action.payload.token}`,
      action.payload.data
    );
    yield put(orderSuccess(id.data.name, action.payload.data));
  } catch (e) {
    console.log(e, e.response);
    yield put(orderFail(e.response));
  }
}
