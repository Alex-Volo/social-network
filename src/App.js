import "./Main.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

function App() {
  return (
    <wrapper className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </wrapper>
  );
}

export default App;
