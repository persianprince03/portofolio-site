import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function WorkExperienceCard (props){
    return (
        <div className={'WorkExperienceCard'}>
            <div className='WorkExperienceHeader'>
                <img src = {props.image} alt={props.title} className='WorkExperienceImage'/>
                <div className='WorkExprieneceHeaderText'>
                    <h1>{props.company}</h1>
                    <h2>{props.title}</h2>
                    <h3>{props.timeFrame}</h3>
                </div>
                <ul>
                    {props.bullets.map((bullet) =>{
                        return(
                            <li>{bullet}</li>
                        );
                    })}
                </ul>
            </div>
        </div>

    );

}

export default WorkExperienceCard;