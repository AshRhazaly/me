import React from "react";
import profile from "./profile-hs.jpg";
import linkedIn from "./linkedin-logo.svg";
import github from "./gitlogo.svg";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-header--avatar" src={profile} alt="Avatar"></img>
        <span className="App-header--name">ASH</span>
        <span className="App-header--text">I like tinkering with stuff.</span>
        <span className="App-header--socialMedia">
          <img
            className="App-header--socialMedia-github"
            src={github}
            alt="Github logo"
          />
          <img
            className="App-header--socialMedia-linkedIn"
            src={linkedIn}
            alt="LinkedIn logo"
          />
        </span>
      </header>
    </div>
  );
};

export default App;
