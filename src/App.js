import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Pages/Messages/Messages";
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Settings from "./components/Pages/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app__wrapper">
          <Header />
          <NavBar />
          <div className="app__wrapperContent">
            <Routes>
              <Route path="/profile" element={<Profile prop={props.prop}/>} />
              <Route path="/Messages/*" element={<Messages prop={props.prop}/>} />
              <Route path="/music" element={<Music />} />
              <Route path="/news" element={<News />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
