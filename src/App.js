import "./Main.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <main className="app__main">
          <Routes>
            {}
            <Route path="/" Component={Profile} />
            <Route path="/profile" Component={Profile} />
            <Route path="/dialogs" Component={Dialogs} />
            {/* <Dialogs /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
