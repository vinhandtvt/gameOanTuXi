import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux"; //1. add 1
import { Provider } from "react-redux"; //2. add 2
import reducer from "./reducers/reducers";
import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
