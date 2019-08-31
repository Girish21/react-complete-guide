import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from "../actions/auth";

const initState = {
  userData: {},
  error: "",
  isLoading: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        userData: {},
        error: "",
        isLoading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLoading: false
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default reducer;
