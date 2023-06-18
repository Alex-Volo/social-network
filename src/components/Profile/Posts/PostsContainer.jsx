import Posts from "./Posts";
import {
  transmitTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    textareaValue: state.profilePage.textareaValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    sendChanges: (textareaValue) => {
      dispatch(transmitTextActionCreator(textareaValue));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
