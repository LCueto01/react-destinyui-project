import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Base from "./components/Base";
import Vault from "./components/Vault";
import reportWebVitals from "./reportWebVitals";

import { applyMiddleware } from "redux";
import { StoreProvider, createStore } from "easy-peasy";
import { model } from "./components/model";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(model, composeWithDevTools(applyMiddleware(logger)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider store={store}>
    <Base />
    {/*<Vault />*/}
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
