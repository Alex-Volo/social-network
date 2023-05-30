import logo from "./logo.svg";
import "./Main.css";

function App() {
    return (
        <wrapper className="wrapper">
            <header>
                <img className="header__logo" src={logo} alt="logo"></img>
            </header>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                </ul>
            </nav>
            <main></main>
        </wrapper>
    );
}

export default App;
