import "./Main.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation sidebar={props.state.sidebar} />
      <main className="app__main">
        <Routes>
          <Route
            path="/"
            element={<Profile profilePage={props.state.profilePage} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/dialogs/*"
            element={<Dialogs dialogsState={props.state.dialogsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Dialogs /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
