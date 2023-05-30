import logo from "./logo.svg";
import "./Main.css";
import mainImage from './img/main-top.jpg'

function App() {
    return (
        <wrapper className="app-wrapper">
            <header className="header">
                <img className="header__logo" src={logo} alt="logo"></img>
            </header>
            <nav className="navigation">
                <ul className="navigation__ul">
                    <li className="navigation__li">
                        <a href="# ">Profile</a>
                    </li>
                    <li className="navigation__li">
                        <a href="# ">Messages</a>
                    </li>
                    <li className="navigation__li">
                        <a href="# ">News</a>
                    </li>
                    <li className="navigation__li">
                        <a href="# ">Music</a>
                    </li>
                    <li className="navigation__li">
                        <a href="# ">Settings</a>
                    </li>
                </ul>
            </nav>
            <main className="main">
              <img className="main__img" src={mainImage} alt="main" />
            </main>
        </wrapper>
    );
}

export default App;
