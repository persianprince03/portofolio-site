// import logo from './logo.svg';
import './App.css';
import DevCard from "./DevCard";
import React from "react";
import Hobbies from "./Hobbies";
import FLProjects from "./FLProjects";
import Skills from "./Skills";
import ExtraCurricular from "./ExtraCurricular";
import WorkExperience from "./WorkExperience";
import ContactInfo from "./ContactInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landing">
        <DevCard />
        </div>
        <FLProjects />
        <ExtraCurricular />
        <WorkExperience />
        <Hobbies />
        <div className="skillsDiv">
        <Skills />
        </div>

        <ContactInfo />
      </header>
    </div>
  );
}

export default App;
