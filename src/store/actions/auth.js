export const AUTH_INIT = "AUTH_INIT";

export const AUTH_START = "AUTH_START";

export const AUTH_SUCCESS = "AUTH_SUCCESS";

export const AUTH_FAIL = "AUTH_FAIL";

export const INIT_AUTO_SIGNIN = "INIT_AUTO_SIGNIN";

export const INIT_AUTO_LOGOUT = "INIT_AUTO_LOGOUT";

export const AUTH_INIT_LOGOUT = "AUTH_INIT_LOGOUT";

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
  // localStorage.clear();
  return {
    type: AUTH_INIT_LOGOUT
  };
};

export const logOutSucceed = () => {
  return {
    type: LOGOUT
  };
};

export const checkAuthTimeOut = expTime => {
  return {
    type: INIT_AUTO_LOGOUT,
    payload: {
      expTime: expTime
    }
  };
};

export const auth = (email, password, signIn) => {
  return {
    type: AUTH_INIT,
    payload: {
      email,
      password,
      signIn
    }
  };
};

export const autoSingin = () => {
  return {
    type: INIT_AUTO_SIGNIN
  };
};
