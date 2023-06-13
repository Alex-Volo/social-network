import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { state } from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
const addPost = () => {
  const post = {
    text: state.profilePage.textareaValue,
    likesCount: 0,
  }
  state.profilePage.postsData.push(post);
  state.profilePage.textareaValue = '';
  renderEntireTree(state);
}

const transmitText = (str) => {
  state.profilePage.textareaValue = str;
  renderEntireTree(state);
}

export const renderEntireTree = (state) => {
    

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} transmitText={transmitText} />
            </BrowserRouter>
        </React.StrictMode>
    );
};
