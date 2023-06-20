import { ava1, ava2, ava3, ava4 } from "./dialogs-reducer";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      isFollow: true,
      name: "Alex",
      avatar: ava1,
      status: "Learning React",
      locate: { county: "Russia", city: "Novosibirsk" },
    },
    {
      id: 2,
      isFollow: false,
      name: "Valerian",
      avatar: ava2,
      status: "Know React",
      locate: { county: "Russia", city: "Pskov" },
    },
    {
      id: 3,
      isFollow: false,
      name: "Zimba",
      avatar: ava3,
      status: "Learning JS",
      locate: { county: "Russia", city: "Moscow" },
    },
    {
      id: 4,
      isFollow: true,
      name: "David",
      avatar: ava4,
      status: "Learning Survival",
      locate: { county: "Australia", city: "Canberra" },
    },
  ],
  textareaValue: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, isFollow: true };
          }
          return user;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, isFollow: false };
          }
          return user;
        }),
      };

    case "SET_USERS":
      return { ...state, textareaValue: action.str };

    default:
      break;
  }
  return state;
};

export const followAC = (id) => ({ type: FOLLOW, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
