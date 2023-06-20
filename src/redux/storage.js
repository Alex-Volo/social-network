import ava1 from "./img/ava1.jpg";
import ava2 from "./img/ava2.jpg";
import ava3 from "./img/ava3.jpg";
import ava4 from "./img/ava4.jpg";
import ava5 from "./img/ava5.jpg";

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export const store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { name: "Artur", id: "1", ava: ava1 },
        { name: "Alex", id: "2", ava: ava2 },
        { name: "Dmitriy", id: "3", ava: ava3 },
        { name: "Fedor", id: "4", ava: ava4 },
        { name: "Evgeniy", id: "5", ava: ava5 },
      ],
      messagesData: [
        { message: "Message", id: "1" },
        { message: "Message", id: "2" },
        { message: "Message", id: "3" },
        { message: "Message", id: "4" },
      ],
      messageInput: "",
    },
    profilePage: {
      postsData: [
        { text: "Пусть здесь будет текст", likesCount: 0 },
        { text: "Разные посты", likesCount: 20 },
        { text: "Будут лежать", likesCount: 5 },
        { text: "Здесь", likesCount: 7 },
      ],
      textareaValue: "lkjl",
    },
    sidebar: {
      friends: [
        { name: "Artur", ava: ava1 },
        { name: "Alex", ava: ava2 },
        { name: "Dmitriy", ava: ava3 },
      ],
    },
  },

  _runSubscriber() {},

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._runSubscriber(this);
  },

  subscribe(observer) {
    this._runSubscriber = observer;
  },
};