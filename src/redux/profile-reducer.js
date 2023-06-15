const ADD_POST = "ADD-POST";
const TRANSMIT_TEXT = "TRANSMIT-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case "TRANSMIT-TEXT":
            state.textareaValue = action.str;
            break;
        case "ADD-POST":
            const post = {
                text: state.textareaValue,
                likesCount: 0,
            };
            state.postsData.push(post);
            state.textareaValue = "";
            break;
        default:
            break;
    }
    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const transmitTextActionCreator = (text) => ({
    type: TRANSMIT_TEXT,
    str: text,
});

export default profileReducer;
