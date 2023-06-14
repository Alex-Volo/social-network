import ava1 from "./ava1.jpg";
import ava2 from "./ava2.jpg";
import ava3 from "./ava3.jpg";
import ava4 from "./ava4.jpg";
import ava5 from "./ava5.jpg";

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const TRANSMIT_TEXT = "TRANSMIT-TEXT";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const transmitTextActionCreator = (text) => ({
  type: TRANSMIT_TEXT,
  str: text,
});
export const addMessageActionCreator = (str) => ({
  type: ADD_MESSAGE,
  message: str,
});
export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE,
  message: text,
});

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
    switch (action.type) {
      case "TRANSMIT-TEXT":
        this._state.profilePage.textareaValue = action.str;
        this._runSubscriber(this);
        break;
      case "ADD-POST":
        const post = {
          text: this._state.profilePage.textareaValue,
          likesCount: 0,
        };
        this._state.profilePage.postsData.push(post);
        this._state.profilePage.textareaValue = "";
        this._runSubscriber(this);
        break;
      case "ADD-MESSAGE":
        const message = {
          message: action.message,
          id: this._state.dialogsPage.messagesData.length + 1,
        };
        this._state.dialogsPage.messagesData.push(message);
        this._state.dialogsPage.messageInput = "";
        this._runSubscriber(this);
        break;
      case "UPDATE-MESSAGE":
        this._state.dialogsPage.messageInput = action.message;
        this._runSubscriber(this);
        break;
      default:
        break;
    }
  },

  subscribe(observer) {
    this._runSubscriber = observer;
  },
};
