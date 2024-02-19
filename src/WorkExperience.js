import {WorkExperienceData} from "./Data/WorkExperienceData";
import WorkExperienceCard from "./components/WorkExperienceCard";
import './WorkExperience.css'

function WorkExperience(){
    return(
        <div>
            <h2>My Work Experience</h2>
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