//TODO: Implement scroll animation that the navbar will only appear


import "./NavBar.css"
function NavBar(){
    return (

        <ul className="NavBox">
            <li className="NavButton"><a className="active" href="#Education">Education</a></li>
            <li className="NavButton"><a href="#Freelance">Freelance Projects</a></li>
            <li className="NavButton"><a href="#Extra">Extra Curricular</a></li>
            <li className="NavButton"><a href="#Work">Work Experience</a></li>
            <li className="NavButton"><a href="#Skills">Skills</a></li>
            <li className="NavButton"><a href="#Hobbies">Hobbies</a></li>
            <li className="NavButton"><a href="#Contact">Contact Info</a></li>
        </ul>
    );
}


export default NavBar;