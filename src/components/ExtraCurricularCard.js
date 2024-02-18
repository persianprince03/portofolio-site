import React from 'react';
import "../App.css";

function ExtraCurricularCard (props) {
    return (
        <div className='ExtraCurricularCard'>
            <div className='ExtraCurricularCardeader'>
                <img src={props.image} alt={props.title} className='ExtraCurricularCardImage'/>
                <div className='ExtraCurricularCardHeaderText'>
                    <h1>{props.org}</h1>
                    <h2>{props.position}</h2>
                </div>
            </div>
            <ul>
                {props.bullets.map((bullet) =>{
                    return(
                        <li>{bullet}</li>
                    );
                })}
            </ul>
        </div>
    );
}


export default ExtraCurricularCard;