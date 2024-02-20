import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


// TODO Add icons for beauty
import './ContactCard.css'
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";

function ContactInfo(){
    return (

        <div id="Contact" >
            <h2>Contact Info</h2>
            <ul>
                <li className='contact'> <a href= "tel:+1 314-236-7756"><FontAwesomeIcon icon={faPhone} />    Call +1 314-236-7756 </a> </li>
                <li className='contact'><a href= "mailto:parsa@divanbeigip.com"><FontAwesomeIcon icon={faEnvelope} /> Email: parsa@divanbeigip.com</a> </li>
                <li className='contact'><a href="sms:+1 314-236-7756"><FontAwesomeIcon icon={faComment} /> Text</a></li>
            </ul>
        </div>

    )
}

export default ContactInfo;