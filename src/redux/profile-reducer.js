const ADD_POST = "ADD-POST";
const TRANSMIT_TEXT = "TRANSMIT-TEXT";

const initialState = {
    postsData: [
        { text: "Пусть здесь будет текст", likesCount: 0 },
        { text: "Разные посты", likesCount: 20 },
        { text: "Будут лежать", likesCount: 5 },
        { text: "Здесь", likesCount: 7 },
    ],
    textareaValue: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TRANSMIT-TEXT":
            const newState = { ...state, textareaValue: action.str };
            return newState;

        case "ADD-POST":
            const post = {
                text: state.textareaValue,
                likesCount: 0,
            };
            state.textareaValue = "";
            return { ...state, postsData: [...state.postsData, post] };

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
