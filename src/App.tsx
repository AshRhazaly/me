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
          <a href="https://github.com/AshRhazaly/" target="_blank">
            <img
              className="App-header--socialMedia-github"
              src={github}
              alt="Github logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/ash-r-9445987b/" target="_blank">
            <img
              className="App-header--socialMedia-linkedIn"
              src={linkedIn}
              alt="LinkedIn logo"
            />
          </a>
        </span>
      </header>
      <main className="App-contact">
        <button className="App-contact--button">GET IN TOUCH</button>
        {/* <section className="App-contact--form">
          <form action=""></form>
        </section> */}
      </main>
    </div>
  );
};

export default App;
