import React from 'react';
import "../App.css";

function FLProjectCard (props) {
    return (
        <div className='FLProjectCard'>
            <div className='FLProjectCardHeader'>
                <img src={props.image} alt={props.title} className='FLProjectCardImage'/>
                <div className='FLProjectCardHeaderText'>
                    <h1>{props.client}</h1>
                </div>
            </div>
            <ul>
                <br/>
                {props.bullets.map((bullet) =>{
                    return(
                        <li>{bullet}</li>
                    );
                })}
            </ul>
        </div>
    );
}


export default FLProjectCard;