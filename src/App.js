import "./Main.css";
import mainImage from "./img/main-top.jpg";
import avatar from "./img/avatar.png";
import Header from "./components/Header";
import Navigation from "./components/Navigstion";

function App() {
    return (
        <wrapper className="app-wrapper">
            <Header />
            <Navigation />

            <main className="main">
                <header className="main__header">
                    <img className="main__img" src={mainImage} alt="main" />
                </header>
                <div className="main__content">
                    <div className="main__author">
                        <img
                            className="author__avatar"
                            src={avatar}
                            alt="author avatar"
                        />
                        <div className="author__description">
                            Описание юзера
                        </div>
                    </div>
                    <div className="main__posts">
                        <p>My posts</p>
                        <div className="posts__new-post">
                            Инпут для нового поста и кнопка создать
                        </div>
                        <div className="post1">Пост 1</div>
                        <div className="post2">Пост 2</div>
                    </div>
                </div>
            </main>
        </wrapper>
    );
}

export default App;
