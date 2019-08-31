import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = store => {
//   return next => {
//     return action => {
//       console.log("[Middleware] dispatching action", action);
//       const result = next(action);
//       console.log("[Middleware] updated state", store.getState());
//       return result;
//     };
//   };
// };

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
