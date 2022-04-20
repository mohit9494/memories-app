import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App.js";

const composeEnhancer = composeWithDevTools({});
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
