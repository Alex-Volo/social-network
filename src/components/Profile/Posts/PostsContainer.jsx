import Posts from "./Posts";
import {
    transmitTextActionCreator,
    addPostActionCreator,
} from "../../../redux/profile-reducer";
import { useDispatch, useSelector } from "react-redux";

const PostsContainer = () => {
    const dispatch = useDispatch();
    const addPost = () => dispatch(addPostActionCreator());
    const sendChanges = (textareaValue) =>
        dispatch(transmitTextActionCreator(textareaValue));
    const postsData = useSelector((state) => state.profilePage.postsData);
    const textareaValue = useSelector(
        (state) => state.profilePage.textareaValue
    );

    return (
        <Posts
            postsData={postsData}
            textareaValue={textareaValue}
            addPost={addPost}
            sendChanges={sendChanges}
        />
    );
};

export default PostsContainer;
