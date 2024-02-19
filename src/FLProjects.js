import {FLProjectsData} from "./Data/FLProjectsData";
import FLProjectCard from "./components/FLProjectsCard";
import "./FLProjects.css"
function FLProjects(){
    return (
        <div className="FLProjects">
            <h1 className="FLProjectsTittle" >Freelance Projects</h1>
            { FLProjectsData.map((val,key) => {
                return (
                    <FLProjectCard
                        client = {val.client}
                        bullets = {val.bullets}
                        // image = {val.image}
                    />

                );
            })}
        </div>
    )
}

export default FLProjects;