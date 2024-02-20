import {WorkExperienceData} from "./Data/WorkExperienceData";
import WorkExperienceCard from "./components/WorkExperienceCard";
import './WorkExperience.css'

function WorkExperience(){
    return(
        <div id='Work'>
            <h1 className="Tittle">My Work Experience</h1>
            {WorkExperienceData.map((val, key) => {
                return (
                    <WorkExperienceCard
                        company={val.company}
                        title={val.title}
                        image={val.image}
                        timeFrame={val.timeFrame}
                        bullets={val.bullets}
                    />
                );
            })}
            {/*<button>For Complete resume click here</button>*/}

        </div>
    )
}

export default WorkExperience;