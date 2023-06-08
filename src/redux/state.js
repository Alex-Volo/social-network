import ava1 from './ava1.jpg';
import ava2 from './ava2.jpg';
import ava3 from './ava3.jpg';
import ava4 from './ava4.jpg';
import ava5 from './ava5.jpg';

const state = {
  dialogsPage: {
    dialogsData: [
      { name: "Artur", id: "1", ava: ava1 },
      { name: "Alex", id: "2", ava: ava2 },
      { name: "Dmitriy", id: "3", ava: ava3 },
      { name: "Fedor", id: "4", ava: ava4 },
      { name: "Evgeniy", id: "5", ava: ava5 },
    ],
    messagesData: [
      { message: "Message", id: "1" },
      { message: "Message", id: "2" },
      { message: "Message", id: "3" },
      { message: "Message", id: "4" },
    ],
  },
  profilePage: {
    postsData: [
      { text: "Пусть здесь будет текст", likesCount: 0 },
      { text: "Разные посты", likesCount: 20 },
      { text: "Будут лежать", likesCount: 5 },
      { text: "Здесь", likesCount: 7 },
    ],
  },
  sidebar: {
    friends: [
      {name: "Artur",
      ava: ava1,},
      {name: "Alex",
      ava: ava2,},
      {name: "Dmitriy",
      ava: ava3,},
    ]
  }
};

export default state;
