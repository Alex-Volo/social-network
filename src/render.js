import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { state } from "./redux/state";

const addPost = (text) => {
  const post = {
    text: text,
    likesCount: 0,
  }
  state.profilePage.postsData.push(post);
  renderEntireTree(state);
}

export const renderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );
};
