import axios from "axios";

import { delay } from "redux-saga/effects";
import { put } from "redux-saga/effects";

import {
  authFail,
  authStart,
  authSuccess,
  checkAuthTimeOut,
  logOutSucceed,
  logOut
} from "../actions/auth";

export function* logoutSaga(action) {
  yield localStorage.clear();
  yield put(logOutSucceed());
}

export function* checkAuthTimeOutSaga(action) {
  yield delay(action.payload.expTime * 1000);
  yield put(logOutSucceed());
}

export function* authSaga(action) {
  yield put(authStart());
  const url = !action.payload.signIn
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
  try {
    const result = yield axios.post(url, {
      email: action.payload.email,
      password: action.payload.password,
      returnSecureToken: true
    });
    const expDate = new Date(
      new Date().getTime() + result.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", result.data.idToken);
    yield localStorage.setItem("expiresIn", expDate);
    yield localStorage.setItem("userId", result.data.localId);
    yield put(authSuccess(result.data));
    yield put(checkAuthTimeOut(result.data.expiresIn));
  } catch (e) {
    yield put(authFail(e.response.data.error.message));
  }
}

export function* autoSinginSaga(action) {
  const idToken = localStorage.getItem("token");
  const expiresIn = localStorage.getItem("expiresIn");
  const localId = localStorage.getItem("userId");
  const obj = {
    idToken,
    localId,
    expiresIn
  };
  if (idToken !== null) yield put(authSuccess(obj));
  else yield put(logOut());
  yield put(
    checkAuthTimeOut(
      (new Date(expiresIn).getTime() - new Date().getTime()) / 1000
    )
  );
}
