import axios from "axios";

export const AUTH_START = "AUTH_START";

export const AUTH_SUCCESS = "AUTH_SUCCESS";

export const AUTH_FAIL = "AUTH_FAIL";

export const LOGOUT = "LOGOUT";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = payload => {
  return {
    type: AUTH_SUCCESS,
    payload: payload
  };
};

export const authFail = payload => {
  return {
    type: AUTH_FAIL,
    payload: payload
  };
};

export const logOut = () => {
  return {
    type: LOGOUT
  };
};

export const checkAuthTimeOut = expTime => {
  return dispatch => {
    setTimeout(() => dispatch(logOut()), +expTime * 1000);
  };
};

export const auth = (email, password, signIn) => {
  return async dispatch => {
    dispatch(authStart());
    try {
      const url = !signIn
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
      const result = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
      });
      dispatch(authSuccess(result.data));
      dispatch(checkAuthTimeOut(result.data.expiresIn));
    } catch (e) {
      console.log(e.response);
      dispatch(authFail(e.response.data.error.message));
    }
  };
};
