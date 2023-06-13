import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store._state}
          addPost={store.addPost.bind(store)}
          transmitText={store.transmitText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderEntireTree(store);
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
