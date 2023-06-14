import "./Main.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

function App({ state, dispatch, }) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navigation sidebar={state.sidebar} />
            <main className="app__main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Profile
                                profilePage={state.profilePage}
                                dispatch={dispatch}
                            />
                        }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/dialogs/*"
                        element={<Dialogs dialogsState={state.dialogsPage} dispatch={dispatch} />}
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
