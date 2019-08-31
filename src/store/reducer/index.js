import { combineReducers } from "redux";

import burgerReducer from "./burgerBuilder";
import orderReducer from "./order";
import authReducer from "./auth";

export default combineReducers({
  burgerReducer,
  orderReducer,
  authReducer
});
