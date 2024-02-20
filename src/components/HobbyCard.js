import React from 'react';
import "../App.css";

function HobbyCard (props) {
    return (
        <div className='contentCard'>
            <div className='HobbyCardHeader'>
                {/*<img src={props.image} alt={props.title} className='HobbyCardImage'/>*/}
                <div className='HobbyCardHeaderText'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}


export default HobbyCard;