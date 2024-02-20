import headshot from "./headshot.jpeg"
import './DevCard.css'
import Typewriter from "typewriter-effect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
function Profile(){
    return(
        <div>
        <div className='DevCard'>
            <img className='DevImage'
                src={headshot}
                alt= "PD_Headshot"
                width="300vw"
                height="300vh"
                // className="DevImage"

            />
        </div>
    </div>
    );
}

export default function DevCard() {
    return (
        <div className='DevCard'>
            <div className="DevInfo">
            <Profile />
                <h1>Parsa Divanbeigi</h1>
                <Typewriter
                    options={{
                        strings:[
                            "Student","Developer","Freelancer"],
                        autoStart: true,
                        loop: true,
                    }}/>
            </div>
            <a href="https://github.com/persianprince03" className="icon"><FontAwesomeIcon icon={faGithub } size={"2xl"}/></a>
            <a href="https://www.linkedin.com/in/parsa-divanbeigi/" className='icon'><FontAwesomeIcon icon={faLinkedin}size={"2xl"}/></a>
        {/*    Add LinkedIn and Github*/}
        </div>
    );
}