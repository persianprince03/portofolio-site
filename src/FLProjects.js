import {FLProjectsData} from "./Data/FLProjectsData";
import FLProjectCard from "./components/FLProjectsCard";

function FLProjects(){
    return (
        <div>
            <h2>My Hobbies</h2>
            { FLProjectsData.map((val,key) => {
                return (
                    <FLProjectCard
                        client = {val.client}
                        bullets = {val.bullets}
                        image = {val.image}
                    />

                );
            })}
        </div>
    )
}

export default FLProjects;