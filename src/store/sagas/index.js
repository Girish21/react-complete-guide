import { takeEvery, takeLatest } from "redux-saga/effects";

import {
  logoutSaga,
  checkAuthTimeOutSaga,
  authSaga,
  autoSinginSaga
} from "./auth";

import {
  AUTH_INIT_LOGOUT,
  INIT_AUTO_LOGOUT,
  AUTH_INIT,
  INIT_AUTO_SIGNIN
} from "../actions/auth";

import { fetchAllOrdersSaga, placeOrderSaga } from "./order";

import { FETCH_ALL_ORDER_START, PLACE_ORDER_START } from "../actions/order";

export function* watchAuth() {
  yield takeEvery(AUTH_INIT_LOGOUT, logoutSaga);
  yield takeEvery(INIT_AUTO_LOGOUT, checkAuthTimeOutSaga);
  yield takeEvery(AUTH_INIT, authSaga);
  yield takeEvery(INIT_AUTO_SIGNIN, autoSinginSaga);
}

export function* watchOrders() {
  yield takeLatest(FETCH_ALL_ORDER_START, fetchAllOrdersSaga);
  yield takeLatest(PLACE_ORDER_START, placeOrderSaga);
}
