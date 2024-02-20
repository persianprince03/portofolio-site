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
import Education from "./Education";
import resume from './media/ATS_Parsa.pdf'

function App() {
  return (
        <div className="App">
          <header className="App-header">
            <div className="landing">
              <DevCard/>
            </div>

            <Education/>
            <a href={resume} download='ParsaDivanbeigiResume' className='download'>Download Resume</a>

            <FLProjects/>
            <div className="we">
              <ExtraCurricular/>
              <WorkExperience/>
            </div>
            <div className="skillsDiv">
              <Skills/>
            </div>
            <div>

            </div>
            <Hobbies/>


            <ContactInfo/>
          </header>
        </div>
  );
}

export default App;
