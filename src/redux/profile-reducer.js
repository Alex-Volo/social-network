const ADD_POST = "ADD_POST";
const TRANSMIT_TEXT = "TRANSMIT_TEXT";

const initialState = {
    postsData: [
        { id: 1, text: "Пусть здесь будет текст", likesCount: 0 },
        { id: 2, text: "Разные посты", likesCount: 20 },
        { id: 3, text: "Будут лежать", likesCount: 5 },
        { id: 4, text: "Здесь", likesCount: 7 },
    ],
    textareaValue: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TRANSMIT_TEXT":
            const newState = { ...state, textareaValue: action.str };
            return newState;

        case "ADD_POST":
            const post = {
                text: state.textareaValue,
                likesCount: 0,
                id: state.postsData.longth + 1,
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
