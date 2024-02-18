import {ExtraCurricularData} from "./Data/ExtraCurricularData"
import ExtraCurricularCard from "./components/ExtraCurricularCard";

function ExtraCurricular(){
    return (
        <div>
            <h2>Extra Curricular Activities </h2>
            { ExtraCurricularData.map((val,key) => {
                return (
                    <ExtraCurricularCard
                        org = {val.org}
                        position = {val.position}
                        bullets = {val.bullets}
                        image = {val.image}
                    />

                );
            })}
        </div>
    )
}

export default ExtraCurricular;