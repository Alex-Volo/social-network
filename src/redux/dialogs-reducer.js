import ava1 from "./img/ava1.jpg";
import ava2 from "./img/ava2.jpg";
import ava3 from "./img/ava3.jpg";
import ava4 from "./img/ava4.jpg";
import ava5 from "./img/ava5.jpg";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const message = {
                message: state.messageInput,
                id: state.messagesData.length + 1,
            };
            state.messageInput = "";
            return { ...state, messagesData: [...state.messagesData, message] };
        case "UPDATE-MESSAGE":
            state.messageInput = action.message;
            return { ...state, messageInput: action.message };
        default:
            break;
    }
    return state;
};

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});
export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    message: text,
});

export default dialogsReducer;
