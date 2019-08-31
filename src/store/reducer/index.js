import { combineReducers } from "redux";

import burgerReducer from "./burgerBuilder";
import orderReducer from "./order";

export default combineReducers({
  burgerReducer,
  orderReducer
});
