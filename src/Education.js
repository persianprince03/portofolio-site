import school from "./media/PRIMARY_BANNER_FC.png"
import "./Education.css"
function Education(){
    return(
        <div>
        <div id="Education" className="contentCard">
            {/*<div className="contentCard">*/}
            <div className="eduLeft" style={{float:"left"}}>
                <h1 >Education</h1>
            </div>
                <div className='eduRight' style={{float: "right"}}>
            <img src={school}
                 alt="School"
            style={{float:'right'}}/>
            <h2>Missouri University of Science and Technology</h2>
            <h3>Major: Computer Science</h3>
            <h3>GPA: 3.8/4.0</h3>
                </div>
            </div>

          </div>

    )
}

export default Education;