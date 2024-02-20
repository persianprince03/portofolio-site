import {ExtraCurricularData} from "./Data/ExtraCurricularData"
import ExtraCurricularCard from "./components/ExtraCurricularCard";

function ExtraCurricular(){
    return (
        <div id='EXC'>
            <h1 className="Tittle">Extra Curricular Activities </h1>

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