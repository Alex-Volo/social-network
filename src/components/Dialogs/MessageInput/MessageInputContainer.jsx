import MessageInput from "./MessageInput";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsState: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    sendChanges: (text) => {
      dispatch(updateMessageActionCreator(text));
    },
  };
};

const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);

export default MessageInputContainer;
