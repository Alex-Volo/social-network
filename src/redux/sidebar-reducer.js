import ava1 from "./img/ava1.jpg";
import ava2 from "./img/ava2.jpg";
import ava3 from "./img/ava3.jpg";

const initialState = {
  friends: [
    { id: 1, name: "Artur", ava: ava1 },
    { id: 2, name: "Alex", ava: ava2 },
    { id: 3, name: "Dmitriy", ava: ava3 },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
