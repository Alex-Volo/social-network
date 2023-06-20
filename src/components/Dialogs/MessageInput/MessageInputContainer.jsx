import MessageInput from "./MessageInput";
import {
    addMessageActionCreator,
    updateMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";

const MessageInputContainer = () => {
    const dispatch = useDispatch();
    const addMessage = () => {
        dispatch(addMessageActionCreator());
    };
    const sendChanges = (text) => {
        dispatch(updateMessageActionCreator(text));
    };
    const messageInput = useSelector((state) => state.dialogsPage.messageInput);

    return (
        <MessageInput
            sendChanges={sendChanges}
            messageInput={messageInput}
            addMessage={addMessage}
        />
    );
};

// const mapStateToProps = (state) => {
//     return {
//         dialogsState: state.dialogsPage,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator());
//         },
//         sendChanges: (text) => {
//             dispatch(updateMessageActionCreator(text));
//         },
//     };
// };

// const MessageInputContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MessageInput);

export default MessageInputContainer;
