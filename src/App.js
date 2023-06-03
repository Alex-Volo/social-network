import "./Main.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <main className="app__main">
        <Profile />
      </main>
    </div>
  );
}

export default App;
