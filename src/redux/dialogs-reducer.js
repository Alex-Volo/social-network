const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const message = {
                message: action.message,
                id: state.messagesData.length + 1,
            };
            state.messagesData.push(message);
            state.messageInput = "";
            break;
        case "UPDATE-MESSAGE":
            state.messageInput = action.message;
            break;
        default:
            break;
    }
    return state;
};

export const addMessageActionCreator = (str) => ({
    type: ADD_MESSAGE,
    message: str,
});
export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    message: text,
});

export default dialogsReducer;
