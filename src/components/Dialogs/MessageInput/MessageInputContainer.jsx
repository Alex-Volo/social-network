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
    const dialogsState = useSelector((state) => state.dialogsPage);

    return (
        <MessageInput
            sendChanges={sendChanges}
            dialogsState={dialogsState}
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
