import "./App.css";
import Equilibrium from "./images/image-equilibrium.jpg";
import IconWiew from "./images/icon-view.svg";

import Avatar from "./images/image-avatar.png";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-div">
      <div className="card">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
