import React from 'react';
import "../App.css";

function FLProjectCard (props) {
    return (
        <div className='contentCard'>
            <div>
                <img src={props.image} alt={props.title} className='FLProjectCardImage'/>

                <div style={{float:"right"}}>
                    <h1 style={{fontSize:40}}>{props.client}</h1>
                    <ul>
                        <br/>
                        {props.bullets.map((bullet) => {
                            return (
                                <li>{bullet}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

    );
}


export default FLProjectCard;