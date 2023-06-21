import Users from "./Users";
import { useDispatch, useSelector } from "react-redux";
import { followAC, unfollowAC } from "../../redux/users-reducer";

const PostsContainer = () => {
    const usersData = useSelector((state) => state.usersPage);
    const dispatch = useDispatch();
      const follow = (id) => dispatch(followAC(id));
      const unfollow = (id) => dispatch(unfollowAC(id));
    //   const sendChanges = (textareaValue) =>
    //     dispatch(transmitTextActionCreator(textareaValue));
    //   const postsData = useSelector((state) => state.profilePage.postsData);
    //   const textareaValue = useSelector((state) => state.profilePage.textareaValue);

    return <Users follow={follow} unfollow={unfollow} usersData={usersData} />;
};

export default PostsContainer;
