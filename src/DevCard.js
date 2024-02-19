import headshot from "./headshot.jpeg"
import './DevCard.css'
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
        <div>
            <div className="DevInfo">
            <h1>Parsa Divanbeigi</h1>
            <p>Student, Developer, Freelancer</p>
            </div>
            <Profile />
        {/*    Add LinkedIn and Github*/}
        </div>
    );
}