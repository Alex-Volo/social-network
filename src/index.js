import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderEntireTree(store);
store.subscribe(() => renderEntireTree(store));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
